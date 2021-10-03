import React from "react";
import { Route, Link } from "react-router-dom";


export default function Header () {
    return (
        <div className='link'>
        <Link to='/'>Home</Link>
        <Link to='/Profile.js'>Profile</Link>
            <Link to='/Chat.js'>Chat</Link>
            </div>
    )
}