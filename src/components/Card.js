import React from 'react'
import { useNavigate } from 'react-router-dom'
import medicinePhoto from '../images/medicine.jpeg'
const Card = (props) => {
    const navigate = useNavigate();
    const addToCart = () =>{
        navigate('/Cart')
    }
    return (
        <>
            <div className="card" key={props.index}>
                <img className="card-img-top" src={medicinePhoto} alt="Cardcap" />
                <div className="card-body py-6">
                    <h4 className="card-title">Name: <i>{props.name}</i></h4>
                    <h5 className="card-text"><b>Price:</b> Rs.{props.price}</h5>
                    <h6 className="card-text"><b>Brand: </b>{props.brand}</h6>
                    <a href="/" className="btn btn-primary" onClick={addToCart}>Add to cart!</a>
                </div>
            </div>
        </>
    )
}

export default Card
