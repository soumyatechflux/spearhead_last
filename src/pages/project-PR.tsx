import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";
import Footer from "@/components/layout/footer/Footer";
import Branding from "@/components/containers/project/ProjectBranding";
import ProjectBrandingBanner from "@/components/layout/banner/ProjectBrandingBanner";
import FooterTry from "@/components/layout/footer/FooterTry";
import ProjectBranding from "@/components/containers/project/ProjectBranding";
import ProjectPrBanner from "@/components/layout/banner/ProjectPrBanner";
import ProjectPrSection from "@/components/containers/project/ProjectPrSection";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ProjectPr = () => {
  return (
    <Layout header={2} video={0}>
      <ProjectPrBanner/>
      <ProjectPrSection/>
      <CtaTwo />
      {/* <Branding/> */}
      {/* <ProjectDetailsMain /> */}
      <FooterTry />
      {/* <UxProcess /> */}
    </Layout>
  );
};

export default ProjectPr;
