import React, { useEffect } from 'react';
import './OrderConfirmation.css';
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";


const OrderConfirmation = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="orderconfirmation">
            <div className="orderconfirmation__messagebox">
                <div className="orderconfirmation__thankyouMessage">
                    <h1>Thank You for Your Order!</h1>
                </div>
                <div className="orderconfirmation__message">
                    <h3>{`Thank you for shopping with us. We sent a confirmation email to ${user?.email}. Please check it out.`}</h3>
                </div>
                <Link to="/">
                    <button className="orderconfirmation__button" type="button">Return</button>
                </Link>
                
            </div>
            

            
        </div>
    )
}

export default OrderConfirmation
