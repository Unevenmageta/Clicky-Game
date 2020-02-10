import React from 'react';
import './Images.css';

const Images = (props) => {
return(
    <button className='imageCard'
        onClick ={() => props.eachClick(props.id)}>

            <div className='container'>
                    <img src={props.image}/>
                </div>
    
    
    
    </button>


);


}

export default Images
