import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";

import './Navbar.css'
import { dummydata } from '../../dummydata/Dummydata';
import { BsFillBagHeartFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Productcard from '../product-card/Productcard';
import Searchcard from '../searchedcard/Searchcard';

const Navbar = () => {

     const [searchval, setsearchval] = useState(undefined);
    const [IsDisplay, setisdisplay] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    function handle(val) {
        setsearchval(val);

        if (val.trim() === "") {
            setFilteredData([]);
            setisdisplay(false);
        } else {
            const filtered = dummydata.filter(item =>
                item.name.toLowerCase().includes(val.toLowerCase())
            );
            setFilteredData(filtered);
            setisdisplay(true);
        }
    }

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
                        <input type="text" placeholder='Search Items....' value={searchval} onChange={(e)=>handle(e.target.value)}/>
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
                   
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                           
                 
                </div>
            </div>

           {
            IsDisplay && (
                <div className="search-results-container">

                    <div className='cancel'>
                     <MdCancel className='cancelbutton' onClick={()=>{
                        setisdisplay(!IsDisplay) 
                        setsearchval("")
                     }}/>

                    </div>

                    <div className='searched-items'>
                        {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                                <Searchcard key={item.id} name={item.name} price={item.price} image={item.image}/>
                        ))
                    ) : (
                        <div style={{ padding: "1rem",display:"flex",justifyContent:"center",alignItems:"center",height:"100%", width:"100%" ,fontSize:"2rem",fontWeight:"bolder" , letterSpacing:"4px" , wordSpacing:"10px"}}>No matching products found.</div>
                    )}
                    </div>
                </div>
            )
           }
            
        </div>
    )
}

export default Navbar