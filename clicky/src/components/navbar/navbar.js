import React, { Component } from 'react';
import './navbar.css'


const Navbar = (props) => {
    return (

        <div className="row w-100 pb-4 pt-4" >


            <div className='text-center  col '>
                <p className="Text">Clicky Game</p>
            </div>



            <div className="text-center col">
                <p className="Text"> Click a Hero to begin </p>
            </div>



            <div className="text-center col">
                <p className="Text "> Score: {props.score} </p>

                <p className="Text"> {props.message} </p>
            </div>

        </div>
    );
}

export default Navbar;