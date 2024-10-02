import React from "react";
import Layout from "@/components/layout/Layout";
import ProjectBrandingBanner from "@/components/layout/banner/ProjectBrandingBanner";
import FooterTry from "@/components/layout/footer/FooterTry";
import ProjectBrandingCaseStudy from "@/components/containers/project/ProjectBrandingCaseStudy/ProjectBrandingCaseStudy";
import ProjectCaseStudyBanner from "@/components/layout/banner/ProjectCaseStudyBanner";
import ProjectBrandingCaseStudyTabs from "@/components/containers/project/ProjectBrandingCaseStudy/ProjectBrandingCaseStudyTabs";
import ProjectPRCaseStudyBanner from "@/components/layout/banner/ProjectPRCaseStudyBanner";
import ProjectPRCaseStudy from "@/components/containers/project/ProjectPRCaseStudy";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ProjectCaseStudy = () => {
  return (
    <Layout header={2} video={0}>
      <ProjectPRCaseStudyBanner/>
      <ProjectPRCaseStudy/>
      <CtaTwo/>
      <FooterTry />
    </Layout>
  );
};

export default ProjectCaseStudy ;