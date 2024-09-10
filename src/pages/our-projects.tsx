import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectMain from "@/components/containers/project/ProjectMain";
import WorkStepsProject from "@/components/containers/project/WorkStepsProject";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import Footer from "@/components/layout/footer/Footer";
import HomeProjectBanner from "@/components/layout/banner/HomeProjectBanner";
import FooterTry from "@/components/layout/footer/FooterTry";

const OurProjects = () => {
  return (
    <Layout header={2}  video={0}>
      {/* <CmnBanner title="List of Projects" navigation="List of Projects" /> */}
      <HomeProjectBanner/>
      <ProjectMain />
      {/* <WorkStepsProject /> */}
      <CtaTwo />
      <FooterTry/>
    </Layout>
  );
};

export default OurProjects;
