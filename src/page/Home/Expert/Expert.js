import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const {name, img, expertize} = expert;

    return (       
            <div className='col-lg-4 col-ms-6 col-12 img-style'>
                <img src={img} alt="" />
                <h1>{name}</h1>
                <h5 className='text-danger'>{expertize}</h5>
            </div>      
    );
};

export default Expert;