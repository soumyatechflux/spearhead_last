import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";
import Footer from "@/components/layout/footer/Footer";
import Branding from "@/components/containers/project/ProjectBranding";
import ProjectBranding from "@/components/containers/project/ProjectBranding";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ProjectDetails = () => {
  return (
    <Layout header={2} video={0}>
      <CmnBanner
        title="Brand Development"
        navigation="Brand Development"
        parent="Projects"
        parentLink="our-projects"
      />
      <ProjectBranding/>
      <CtaTwo/>
      {/* <ProjectDetailsMain /> */}
      <Footer />
      {/* <UxProcess /> */}
    </Layout>
  );
};

export default ProjectDetails;
