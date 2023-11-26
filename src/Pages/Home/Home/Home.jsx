import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import AboutSection from "../AboutSection/AboutSection";
import Services from "../Services/Services";

import Gallery from "../Gallery/Gallery";
import OurLocation from "../OurLocation/OurLocation";
import TrendingSection from "../../../Pages/Home/TrendingSection/TrendingSection";
import Wizard from "../../../Component/WaitList/Steps/Wizard";
import WaitList from "../../../Component/WaitList/WaitList";
import DateAndTime from "../../../Component/WaitList/DateAndTime";
import Otp from "../../../Component/WaitList/Otp";
import SelectEmployee from "../../../Component/WaitList/SelectEmployee";
import SelectService from "../../../Component/WaitList/SelectService";
import UserInfo from "../../../Component/WaitList/UserInfo";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      {/* <Wizard></Wizard> */}

      <AboutSection />
      <Services />
      <TrendingSection />
      <Gallery />
      <OurLocation />
    </div>
  );
};

export default Home;
