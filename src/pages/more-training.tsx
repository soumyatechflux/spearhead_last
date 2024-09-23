import React from "react";
import Layout from "@/components/layout/Layout";
import Footer from "@/components/layout/footer/Footer";
import HomeCapabilities from "@/components/containers/home/HomeCapabilities";
import ServiceCoreCapabilitiesBanner from "@/components/layout/banner/ServiceCoreCapabilitiesBanner";
import MoreAdvisoryServiceBanner from "@/components/layout/banner/MoreAdvisoryServiceBanner";

import Training from "@/components/containers/Training";
import FooterTry from "@/components/layout/footer/FooterTry";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const MoreAdvisaory = () => {
  return (
    <Layout header={2} video={0}>
      <MoreAdvisoryServiceBanner/>
      <Training/>
      <CtaTwo/>
      <FooterTry/>
    </Layout>
    
  );
};

export default MoreAdvisaory;
