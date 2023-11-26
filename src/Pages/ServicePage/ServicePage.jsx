import React from "react";
import AboutSection from "../Home/AboutSection/AboutSection";
import Services from "../Home/Services/Services";
import OurLocation from "../Home/OurLocation/OurLocation";
import HeaderSection from "../../Component/HeaderSection/HeaderSection";
import img from "../../../src/assets/images/banner-1.jpg";
import AllServicesPrice from "./AllServicesPrice";

const ServicePage = () => {
  return (
    <div>
      <HeaderSection
        backgroundImage={img}
        heading="Services"
        subHeading="Our Services"
      />
      <AllServicesPrice />
      <AboutSection />
      <Services />
      <OurLocation />
    </div>
  );
};

export default ServicePage;
