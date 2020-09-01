import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_1500x600_EN-US_5538_v2._CB407273330_.jpg"
            alt=""
            />
            <div className="home__row">
                <Product 
                    id = "12344"
                    title = "LG 34WN750-B 34 21:9 UltraWide QHD FreeSync IPS Monitor"
                    price = {496.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81VoIHD6gZL._AC_SX450_.jpg">
                </Product>
                <Product 
                    id = "12344"
                    title = "LG 34WN750-B 34 21:9 UltraWide QHD FreeSync IPS Monitor"
                    price = {496.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81VoIHD6gZL._AC_SX450_.jpg">
                </Product>
            </div>

            <div className="home__row">
            <Product 
                id = "12344"
                title = "LG 34WN750-B 34 21:9 UltraWide QHD FreeSync IPS Monitor"
                price = {496.99}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/81VoIHD6gZL._AC_SX450_.jpg">
            </Product>
            <Product 
                id = "12344"
                title = "LG 34WN750-B 34 21:9 UltraWide QHD FreeSync IPS Monitor"
                price = {496.99}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/81VoIHD6gZL._AC_SX450_.jpg">
            </Product>
            <Product 
                id = "12344"
                title = "LG 34WN750-B 34 21:9 UltraWide QHD FreeSync IPS Monitor"
                price = {496.99}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/81VoIHD6gZL._AC_SX450_.jpg">
            </Product>
            </div>

            <div className="home__row">
                <Product 
                    id = "12344"
                    title = "LG 34WN750-B 34 21:9 UltraWide QHD FreeSync IPS Monitor"
                    price = {496.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81VoIHD6gZL._AC_SX450_.jpg">
                </Product>
            </div>
            

        </div>
    )
}

export default Home
