// react
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// api calls
import axios from "axios";

//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import LandingPageDataAtom from "../recoil/pages/landingPage/LandingPageDataAtom";

// components
import HeroSection from "../components/landingPage/HeroSection";
import SecondSection from "../components/landingPage/SecondSection";
import ThirdSection from "../components/landingPage/ThirdSection";
import FourthSection from "../components/landingPage/FourthSection";
import FifthSection from "../components/landingPage/FifthSection";
import Footer from "../components/globalComponents/Footer";
import EventSection from "../components/landingPage/EventSection";
import Section from "../components/landingPage/Section";

const Landing = () => {
  // Global variables
  const [landingPageData, setLandingPageData] =
    useRecoilState(LandingPageDataAtom);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_LINK + "landingPage")
      .then(function (response) {
        console.log(response?.data);
        setLandingPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("landingPageData");
    console.log(landingPageData);
  }, [landingPageData]);

  return (
    <div className="">
      {/* <HeroSection />
      <EventSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection /> */}

      {landingPageData?.data?.map((sectionData, sectionIndex) => {
        return (
          <div key={sectionIndex}>
            <Section apiData={sectionData} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Landing;
