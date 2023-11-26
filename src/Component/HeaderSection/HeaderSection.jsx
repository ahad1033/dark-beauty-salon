import React from 'react';

const HeaderSection = ( { backgroundImage, heading, subHeading} ) => {
    return (
        <div
            className="position-relative img-fluid"
            style={{ backgroundImage: `url(${backgroundImage})`, height: '650px', objectPosition: 'center', objectFit: 'cover', width: '100%', display: 'block' }}
        >
            <div className="container position-absolute top-50 text-center text-white">
                <h1 className='text-white fw-bolder  mb-4' style={{ fontSize: '50px' }}>{heading}</h1>
                <p className='fw-semibold '>{subHeading}</p>
            </div>
        </div>
    );
};

export default HeaderSection;