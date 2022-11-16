import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [user, setUser] = useState({
        email: "", password: ""
    })
    const navigate = useNavigate();


    const OnChangeEvent = (event) => {
        let { name, value } = event.target;
        return setUser((preValue) => {
            return { ...preValue, [name]: value }
        })
    }

    const OnClickButton = async () => {
        let { email, password } = user;
        let result = await fetch("/login", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        result = await result.json();
        if (result) {
            window.alert(result.message)
            localStorage.setItem("user", JSON.stringify(result.data))
            navigate("/")
        }
    }



    return (
        <div className="login">
            <div>
                <img className="login-image" src="https://img.freepik.com/premium-vector/secure-login-concept-illustration_251005-445.jpg?w=2000"
                    alt="login" />
            </div>
            <div className="login-con">
                <h1>Login</h1>
                <div className="container">
                    <input
                        className="inputBox"
                        type="email"
                        placeholder="Enter email address"
                        autoComplete="off"
                        name="email"
                        value={user.email}
                        onChange={OnChangeEvent}
                    />
                    <input
                        className="inputBox"
                        type="password"
                        placeholder="Enter password"
                        autoComplete="off"
                        name="password"
                        value={user.password}
                        onChange={OnChangeEvent}
                    />
                </div>
                <div>
                    <button className="btn1" onClick={OnClickButton}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;