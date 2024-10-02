import React, { FC } from 'react';
import NavPills from './NavPills';
import ProjectBrandingCaseStudy from './ProjectBrandingCaseStudy';
import ProjectBrandingCaseStudy2 from './ProjectBrandingCaseStudy2';
import ProjectBrandingCaseStudy3 from './ProjectBrandingCaseStudy3';
import ProjectBrandingCaseStudy4 from './ProjectBrandingCaseStudy4';
import BrandingCS1 from './BrandingCS1';
import BrandingCS2 from './BrandingCS2';

const ProjectBrandingCaseStudyTabs: FC = () => {
  return (
    <NavPills
      color="warning"
      tabs={[
        {
          tabButton: 'Case Study 1',
          // tabContent: <ProjectBrandingCaseStudy/>
          tabContent: <BrandingCS2 />
          // tabContent: <BrandingCS1 />
        },
        {
          tabButton: 'Case Study 2',
          tabContent: <ProjectBrandingCaseStudy2 />
        },
        {
          tabButton: 'Case Study 3',
          tabContent: <ProjectBrandingCaseStudy3 />
        },
        // {
        //   tabButton: 'Case Study 4',
        //   tabContent: <BrandingCS2 />
        // },
        // {
        //     tabButton: 'Case Study 4',
        //     tabContent: <ProjectBrandingCaseStudy4 />
        //   }
      ]}
    />
  );
};

export default ProjectBrandingCaseStudyTabs;
