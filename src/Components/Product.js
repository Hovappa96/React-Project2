import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
    const [products, setProducts] = useState([]);
    const params = useParams();

    useEffect(() => {
        GetProduct();
    })


    const GetProduct = async () => {
        let res = await fetch("/products", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        res = await res.json();
        if (res) {
            setProducts(res)
        }
    }


    const DeleteProduct = async (params) => {
        let result = await fetch(`/product/${params}`, {
            method: "DELETE"
        })
        result = await result.json();
    }

    return (
        <div className="product">
            <h1>PRODUCT LIST</h1>
            <ul className="product-list-title">
                <li>S No</li>
                <li>Name</li>
                <li>Model</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
                <li>Operation</li>
            </ul>
            {
                products && products.map((items, index) => {
                    return <ul className="product-list" key={index}>
                        <li>{index}</li>
                        <li>{items.name}</li>
                        <li>{items.model}</li>
                        <li>{items.price}</li>
                        <li>{items.company}</li>
                        <li>{items.category}</li>
                        <li><button onClick={(id) => { DeleteProduct(items._id) }}>delete</button></li>
                    </ul>
                })
            }
        </div>
    )
}

export default Product;