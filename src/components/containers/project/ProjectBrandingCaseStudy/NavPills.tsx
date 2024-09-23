import React, { FC, ReactNode, useState } from 'react';

// Define the type for each tab
interface Tab {
  tabButton: string;
  tabContent: ReactNode;
}

// Define the props for the NavPills component
interface NavPillsProps {
  color?: string;
  tabs: Tab[];
}

const NavPills: FC<NavPillsProps> = ({ color = 'primary', tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={`nav-pills nav-pills-${color}`}>
      <ul className="nav justify-content-center">
        {tabs.map((tab, index) => (
          <li
            className={`nav-item ${activeTab === index ? 'active-tab' : ''}`}
            key={index}
            onClick={() => setActiveTab(index)}
          >
            <a className="nav-link">{tab.tabButton}</a>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            {activeTab === index && tab.tabContent}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavPills;
