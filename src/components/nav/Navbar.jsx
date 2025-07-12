import React from 'react'
import './Navbar.css'
import { BsFillBagHeartFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar-top">

                <div className="logo">
                    <span>V-SHOP</span>
                    <span>
                        <BsFillBagHeartFill />
                    </span>
                </div>

                <div className="search-box">
                    <div className='search-box-inner'>
                        <input type="text" placeholder='Search Items....'/>
                        <span>
                            <CiSearch />
                        </span>
                    </div>

                </div>

                <div className="cart-box">
                    <div className='cart-box-inner'>
                        <span>
                            <FaShoppingCart />
                        </span>
                        <span className='value'>
                            0
                        </span>
                    </div>
                </div>

            </div>

            <div className="navbar-bottom">
                <div className='navbar-bot-inner'>
                   <li>
                    Home
                   </li>
                   <li>Shop</li>
                   <li>Cart</li>
                   <li>About</li>
                   <li>Contact</li>
                 
                </div>
            </div>
        </div>
    )
}

export default Navbar