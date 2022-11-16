import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css"

const Navbar = () => {
    let auth = JSON.parse(localStorage.getItem("user"));
    let navigate = useNavigate();

    const Logout = () => {
        localStorage.clear();
        navigate("/signup")
    }

    return (
        <div className="navbar">
            <img className="logo" src="https://i.pinimg.com/originals/1c/54/f7/1c54f7b06d7723c21afc5035bf88a5ef.png" alt="logo" />
            <div className="navbar-title">
                {
                    auth ?
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/update">Update</Link></li>
                            <li><Link to="/add">Add</Link></li>
                            <li><Link to="/signup" onClick={Logout}>Logout</Link></li>
                        </ul> :
                        <ul>
                            <li><Link to="/signup">SignUp</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                }
            </div>
        </div>
    )
}

export default Navbar;
