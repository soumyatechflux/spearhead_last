import React from "react";
import Layout from "@/components/layout/Layout";
import ProjectBrandingBanner from "@/components/layout/banner/ProjectBrandingBanner";
import FooterTry from "@/components/layout/footer/FooterTry";
import ProjectBrandingCaseStudy from "@/components/containers/project/ProjectBrandingCaseStudy/ProjectBrandingCaseStudy";
import ProjectCaseStudyBanner from "@/components/layout/banner/ProjectCaseStudyBanner";
import ProjectBrandingCaseStudyTabs from "@/components/containers/project/ProjectBrandingCaseStudy/ProjectBrandingCaseStudyTabs";
import ProjectPRCaseStudyBanner from "@/components/layout/banner/ProjectPRCaseStudyBanner";
import ProjectPRCaseStudy from "@/components/containers/project/ProjectPRCaseStudy";
import ProjectSocialMediaCSBanner from "@/components/layout/banner/ProjectSocialMediaCSBanner";
import ProjectSocialMediaCaseStudy from "@/components/containers/project/ProjectSocialMediaCaseStudy";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import ProjectSocialMediaCaseStudy2 from "@/components/containers/project/ProjectSocialMediaCaseStudy2";
import ProjectSocialMediaCaseStudy3 from "@/components/containers/project/ProjectSocialMediaCaseStudy3";

const SocialMediaCS = () => {

    

  return (
    <Layout header={2} video={0}>
      <ProjectSocialMediaCSBanner/>
      <ProjectSocialMediaCaseStudy/>
      <ProjectSocialMediaCaseStudy2/>
      <ProjectSocialMediaCaseStudy3/>
      <CtaTwo />
      <FooterTry />
    </Layout>
  );
};

export default SocialMediaCS  ;
