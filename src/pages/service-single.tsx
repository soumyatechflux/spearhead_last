import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom" 
import ServiceMain from '../components/containers/ServiceMain';
import Footer from "@/components/layout/footer/Footer";
import FooterTry from "@/components/layout/footer/FooterTry";

const ServiceDetails = () => {
  return (
    <Layout header={2}video={false}>
      <ServiceDetailsBanner />
      <ServiceMain />
      <FooterTry/>
      {/* <ServiceDetailsMain /> */}
      {/* <UxProcess /> */}
      {/* <CtaTwo /> */}
    </Layout>
  );
};

export default ServiceDetails;
