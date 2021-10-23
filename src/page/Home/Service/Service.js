import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, price, img, discription, time}  = service;

    return (
        <div className='service-style'>
               <img src={img} alt="" srcset="" />
               <h2>{name}</h2>
               <h4>Price: {price}</h4>
               <p className='px-2'>{discription}</p>
        
        </div>
    );
};

export default Service;