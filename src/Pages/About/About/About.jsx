import React from 'react';
import HeaderSection from '../../../Component/HeaderSection/HeaderSection';
import img from '../../../assets/d-slide-3.jpg';
import TextContent from '../../Home/TextContent/TextContent';
import Services from '../../Home/Services/Services';
import OurTeam from '../OurTeam/OurTeam';

const About = () => {
    return (
        <div>
            <HeaderSection
                backgroundImage={img}
                heading="Hair Services"
                subHeading="It’s time to give your hair some love"
            />
            <TextContent />
            <Services />
            <OurTeam />
        </div>
    );
};

export default About;