import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [data, setData] = useState({
        fname: "", lname: "", email: "", mobile: "", password: "", cpassword: ""
    })
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const OnChnageEvent = (event) => {
        const { name, value } = event.target
        return setData((previousValue) => {
            return { ...previousValue, [name]: value }
        })
    }


    const OnClickButton = async () => {
        let { fname, lname, email, mobile, password, cpassword } = data;
        if (!fname || !lname || !email || !mobile, !password || !cpassword) {
            setError(true);
        }

        let response = await fetch("/register", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fname, lname, email, mobile, password, cpassword
            })
        })

        response = await response.json();
        if (response) {
            window.alert(response.message)
            navigate("/login")

            setData({
                fname: "", lname: "", email: "", password: "", cpassword: ""
            })
        }

    }

    return (
        <div className="signup">
            <div>
                <img className="signup-image"
                    src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000"
                    alt="signup" />
            </div>

            <div className="singup-con">
                <div className="signup-title">
                    <h1>Register</h1>
                </div>
                <div className="container">
                    <input
                        className="inputBox"
                        type="text"
                        placeholder="Enter first name"
                        autoComplete="off"
                        name="fname"
                        value={data.fname}
                        onChange={OnChnageEvent}
                    />
                    {error && !data.fname && <span>enter valid first name</span>}
                    <input
                        className="inputBox"
                        type="text"
                        placeholder="Enter last name"
                        autoComplete="off"
                        name="lname"
                        value={data.lname}
                        onChange={OnChnageEvent}
                    />
                    <input
                        className="inputBox"
                        type="email"
                        placeholder="Enter email address"
                        autoComplete="off"
                        name="email"
                        value={data.email}
                        onChange={OnChnageEvent}
                    />
                    <input
                        className="inputBox"
                        type="number"
                        placeholder="Enter mobile number"
                        autoComplete="off"
                        name="mobile"
                        value={data.mobile}
                        onChange={OnChnageEvent}
                    />
                    <input
                        className="inputBox"
                        type="password"
                        placeholder="Enter new password"
                        autoComplete="off"
                        name="password"
                        value={data.password}
                        onChange={OnChnageEvent}
                    />
                    <input
                        className="inputBox"
                        type="password"
                        placeholder="confirm new password"
                        autoComplete="off"
                        name="cpassword"
                        value={data.cpassword}
                        onChange={OnChnageEvent}
                    />
                </div>
                <button className="btn1" onClick={OnClickButton}>SignUp</button>
            </div>
        </div>
    )
}

export default SignUp;