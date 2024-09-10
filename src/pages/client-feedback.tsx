import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ClientFeedbackMain from "@/components/containers/ClientFeedbackMain";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import Footer from "@/components/layout/footer/Footer";
import FooterTry from "@/components/layout/footer/FooterTry";

const ClientFeedback = () => {
  return (
    <Layout header={2}  video={0}>
      <CmnBanner title="Client's Feedback" navigation="Client's Feedback" />
      <HomeTestimonial/>
      <FooterTry/>
    </Layout>
  );
};

export default ClientFeedback;
