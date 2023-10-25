import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
    const[invalidPassword,setInvalidPassword] = useState(false);
    const[invalidEmail,setInvalidEmail] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Button is clicked");
            sessionStorage.setItem("email", credentials.email);
            sessionStorage.setItem("password", credentials.password);
            setLoggedIn(!loggedIn);
            navigate("/");
        }
    }

    const validateForm = () => {

        if (!/^\S+@\S+\.\S+$/.test(credentials.email)) {
            setInvalidEmail(true);
            return false;
        }

        if (credentials.password.length < 6) {
            // alert("Password must be atleast 6 characters.");
            setInvalidPassword(true);
            return false;
        }

        return true;

    }
    return (
        <>

            <div className="container my-5 p-5">
                <h1 className="text-center my-4">Login Page</h1>
                <form className='w-50 m-auto m-5 p-5 border bg-primary border-success rounded' onSubmit={handleSubmitLogin}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control mt-1" id="exampleInputEmail1" required placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                        {invalidEmail && <small style={{color:"red"}}>*Please enter correct email format</small>}<br/>
                        <small id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control mt-1" id="exampleInputPassword1" required placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                        {invalidPassword && <small style={{color:"red"}}>*Password must be atleast 6 characters long</small>}
                    </div>
                    <button type="submit" className="btn btn-outline-light my-3" onClick={handleSubmitLogin}>Login</button>

                </form>
            </div>
        </>
    )
}

export default Loginpage
