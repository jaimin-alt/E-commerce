import React, { useState } from 'react'
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './Navbar.css'
import { dummydata } from '../../dummydata/Dummydata';
import { BsFillBagHeartFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Searchcard from '../searchedcard/Searchcard';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const navigate = useNavigate();
    useGSAP(()=>{
        gsap.from(".logo",{
            opacity:0,
            delay:0.5,
            duration:1
        })
    })
 const CartItemCount =    useSelector((state)=>state.cartslice.cart)


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

                <div className="logo" onClick={()=>navigate('/')}>
                    <span>HJ-SHOP</span>
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
                    <div className='cart-box-inner' onClick={()=>navigate('./cart')}>
                        <span>
                            <FaShoppingCart />
                        </span>
                        <span className='value'>
                            {CartItemCount.length}
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
                                <Searchcard key={item.id} item={item}/>
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