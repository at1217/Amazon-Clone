import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBascketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();


    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="">
                </img>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {!user? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>     
                </Link>

                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Order</span>
                    </div>     
                </Link>


                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>     


                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBascketIcon />
                        <span className="header__optionLineTwo header__bascketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>            
        </nav>
    )
}

export default Header
