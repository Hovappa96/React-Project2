import React, { useState } from "react";

const Add = () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;

    const [product, setProduct] = useState({
        name: "", model: "", company: "", category: "", price: ""
    })

    const OnChangeEvent = (event) => {
        let { name, value } = event.target;
        setProduct((preValue) => {
            return { ...preValue, [name]: value }
        })
    }


    const OnClickButton = async () => {
        let { name, model, company, category, price } = product

        let response = await fetch("/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, model, company, category, price, userId })
        });
        response = await response.json();
        if (response) {
            setProduct({
                name: "", model: "", company: "", category: "", price: ""
            })
        }

    }

    return (
        <div className="add-product">
            <div className="add-container">
                <h1>Add Product</h1>
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter product name"
                    autoComplete="off"
                    name="name"
                    value={product.name}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter product model"
                    autoComplete="off"
                    name="model"
                    value={product.model}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter product company"
                    autoComplete="off"
                    name="company"
                    value={product.company}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter product category"
                    autoComplete="off"
                    name="category"
                    value={product.category}
                    onChange={OnChangeEvent}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder="Enter product price"
                    autoComplete="off"
                    name="price"
                    value={product.price}
                    onChange={OnChangeEvent}
                />
            </div>
            <br />
            <div>
                <button className="btn2" onClick={OnClickButton}>Add Product</button>
            </div>
        </div>
    )
}

export default Add;