import React from 'react';
// image import
import mechanik1 from '../../../images/mechanik/Mechanik-1.png'
import mechanik2 from '../../../images/mechanik/Mechanik-2.png'
import mechanik3 from '../../../images/mechanik/Mechanik-3.png'
import mechanik4 from '../../../images/mechanik/Mechanik-4.png'
import mechanik5 from '../../../images/mechanik/Mechanik-5.png'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanik1,
        name: 'jami',
        expertize: '-Palish Experts-'
    },
    {
        img: mechanik2,
        name: 'jack',
        expertize: '-Engin Experts-'
    },
    {
        img: mechanik3,
        name: 'mikal json',
        expertize: '-oil Experts-'
    },
    {
        img: mechanik4,
        name: 'jack born',
        expertize: '-Tair Experts-'
    },
    {
        img: mechanik5,
        name: 'jams',
        expertize: '-Wash Experts-'
    }
]


const Experts = () => {
    return (
        <div className='container'>
            <h1 className="text-primary">This Is Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>            
        </div>
    );
};

export default Experts;