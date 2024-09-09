import React, { useState, useEffect } from "react";
import Image from 'next/image';
import icon1 from "public/images/capabilities/Icons.svg";
import icon2 from "public/images/capabilities/Icons two.svg";
import icon3 from "public/images/capabilities/Icons three.svg";
import icon4 from "public/images/capabilities/Icons four.svg";

const CoreCapabilities = () => {
  const [hover, setHover] = useState(1);

  const services = [
    {
      title: "Strategic Planning",
      icon: icon1,
      description:
        "Unlock your brand's potential with our expert strategic planning services. Our approach focuses on aligning business goals with actionable strategies to ensure long-term growth and competitive advantage.",
    },
    {
      title: "Concept Design",
      icon: icon2,
      description:
        "Ignite creativity with our concept design solutions that bring your vision to life. We specialize in crafting unique and innovative concepts that not only capture attention but also represent your brand seamlessly.",
    },
    {
      title: "Asset Development",
      icon: icon3,
      description:
        "Equip your brand with high-quality asset development tailored to your needs. Our team creates powerful visual and digital assets that enhance your brand's message and resonate with your target audience.",
    },
    {
      title: "Brand Activations & Engagement",
      icon: icon4,
      description:
        "Boost your brand's impact with our dynamic brand activations and engagement strategies. We design experiences that increase brand awareness, foster meaningful interactions, and create loyal customers.",
    },
  ];

  return (
    <section className="section work-steps fade-wrapper">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-12 col-sm-6 col-xl-3" key={index}>
              <div
                className={`work-steps__single fade-top d-flex justify-content-center ${
                  hover === index ? "work-steps__single-active" : ""
                }`}
                onMouseEnter={() => setHover(index)}
              >
                <span>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="capabilities-icon"
                  />
                </span>
                <div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
