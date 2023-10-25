import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => {

    const userEmail = sessionStorage.getItem("email");
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-dark fs-4" href="/">Omninos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {userEmail && <Link to="/login"><button className="btn btn-outline-success mx-3" type="submit">Login</button></Link>}
                            <Link to="/cart"><button className="btn btn-outline-danger" type="submit">View Cart</button></Link>
                                
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
