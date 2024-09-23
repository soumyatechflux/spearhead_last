import React from "react";
import Layout from "@/components/layout/Layout";
import ProjectBrandingBanner from "@/components/layout/banner/ProjectBrandingBanner";
import FooterTry from "@/components/layout/footer/FooterTry";
import ProjectBrandingCaseStudy from "@/components/containers/project/ProjectBrandingCaseStudy/ProjectBrandingCaseStudy";
import ProjectCaseStudyBanner from "@/components/layout/banner/ProjectCaseStudyBanner";
import ProjectBrandingCaseStudyTabs from "@/components/containers/project/ProjectBrandingCaseStudy/ProjectBrandingCaseStudyTabs";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ProjectCaseStudy = () => {
  return (
    <Layout header={2} video={0}>
      <ProjectCaseStudyBanner/>
      <ProjectBrandingCaseStudyTabs/>
      <CtaTwo/>
      {/* <Branding/> */}
      {/* <ProjectDetailsMain /> */}
      <FooterTry />
      {/* <UxProcess /> */}
    </Layout>
  );
};

export default ProjectCaseStudy ;
