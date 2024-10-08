import React from "react";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/footer/Footer";
import HomeCapabilities from "@/components/containers/home/HomeCapabilities";
import ServiceCoreCapabilitiesBanner from "@/components/layout/banner/ServiceCoreCapabilitiesBanner";
import MoreAdvisoryServiceBanner from "@/components/layout/banner/MoreAdvisoryServiceBanner";
import OurMission from "@/components/containers/OurMission"
import FooterTry from "@/components/layout/footer/FooterTry";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
// import CmnBanner from "@/components/layout/banner/CmnBanner";
// import ServiceMain from "@/components/containers/ServiceMain";
// import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
// import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
// import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
// import CtaTwo from "@/components/containers/service-details/CtaTwo";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";

// import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";

// import Home from './components/Home';

const MoreAdvisaory = () => {

  
  return (
    <Layout header={2} video={0}>
      <MoreAdvisoryServiceBanner/>
      <OurMission />
      <CtaTwo/>
      <FooterTry/>
    </Layout>
    
  );
};

export default MoreAdvisaory;
