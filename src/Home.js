import React from 'react';
import "./Home.css";
import Product from "./Product";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="home">
            <Slider {...settings}>
                <div>
                    <img 
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_1500x600_EN-US_5538_v2._CB407273330_.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img 
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/SENG_H3_1500x600_Final_HO_r5._CB417923261_.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img 
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YzExNTRjZmUt/YzExNTRjZmUt-ZWRmYzNiOWQt-w1500._CB418546933_.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <img 
                        className="home__image"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/1225157-gw_desk_tall-multi_ben-en-songs-1x_1594231150._CB410279486_.png"
                        alt=""
                    />
                </div>
                
            </Slider>
            
            <div className="home__row">
                <Product 
                    id = "12344"
                    title = "LG 34WN750-B 34 21:9 UltraWide QHD FreeSync IPS Monitor"
                    price = {496.99}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81VoIHD6gZL._AC_SX450_.jpg">
                </Product>
                <Product 
                    id = "84373"
                    title = "Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model)"
                    price = {329.99}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/6162WMQWhVL._AC_UY436_FMwebp_QL65_.jpg">
                </Product>
            </div>

            <div className="home__row">
            <Product 
                id = "37843"
                title = "Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours Of Listening Time - Satin Gold (Latest Model)"
                price = {199.95}
                rating = {4}
                image = "https://m.media-amazon.com/images/I/51b4PIHShxL._AC_UY436_FMwebp_QL65_.jpg">
            </Product>
            <Product 
                id = "75327"
                title = "Dyson SV11 Animal Pro EXCL Ir/SNk/Ir B (Renewed)"
                price = {299.99}
                rating = {4}
                image = "https://m.media-amazon.com/images/I/51BEn3cBBuL._AC_UY436_FMwebp_QL65_.jpg">
            </Product>
            <Product 
                id = "76448"
                title = "Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                price = {49.99}
                rating = {4}
                image = "https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL160_SR160,160_.jpg">
            </Product>
            </div>

            <div className="home__row">
                <Product 
                    id = "12344"
                    title = "Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems"
                    price = {35.09}
                    rating = {3}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51gP9mXEqWL._SX379_BO1,204,203,200_.jpg">
                </Product>
            </div>
            

        </div>
    )
}

export default Home
