import React from 'react';
import GalleryImages from '../GalleryImages/GalleryImages';
import HeaderSection from '../../../Component/HeaderSection/HeaderSection';
import img from '../../../assets/d-slide-2.jpg'

const OurGallery = () => {
    return (
        <div>
            <HeaderSection
                backgroundImage={img}
                heading="It’s Time For a Change"
                subHeading="The perfect combination of beauty and relaxation"
            />
            <GalleryImages />
        </div>
    );
};

export default OurGallery;