import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { NavLink } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    // title: "Branding",
    subTitle: "01",
    // details: ["Define Idea", "Competitor Research", "Target Audience", "Idea Validation", "Customer Value"],
    photo:"/images/SM/pic2_files/pic1.jpg",
    link: "https://www.instagram.com/p/DAKzaooo_r5/"
  },
  {
    id: 2,
    title: "UX Design",
    subTitle: "02",
    photo:"/images/SM/pic2_files/pic2.jpg",
    // details: ["Estimation", "Research", "Story board", "User Flow", "Information Architecture"],
    link: "https://www.instagram.com/p/DAEISi9IvjS/?img_index=1"
  },
  {
    id: 3,
    title: "UI Design",
    subTitle: "03",
    photo:"/images/SM/pic2_files/pic3.jpg",
    // details: ["Hi-Fidelity Wireframe", "Design System", "Final Presentation", "Final Delivery", "Post Delivery Support"],
    link: "https://www.instagram.com/p/C_yCmuTosGC/"
  },
  {
    id: 4,
    title: "Development",
    subTitle: "04",
    photo:"/images/SM/pic2_files/pic4.jpg",
    // details: ["Front End", "Backend", "Mobile App", "Post Delivery Support", "Server Development"],
    link: "https://www.instagram.com/p/C_7oyUlpeLN/"
  },
  {
    id: 5,
    title: "Development",
    subTitle: "05",
    photo:"/images/SM/pic2_files/pic5.jpg",
    // details: ["Front End", "Backend", "Mobile App", "Post Delivery Support", "Server Development"],
    link: "https://www.instagram.com/p/C_s791BoCa3/"
  },
  {
    id: 6,
    title: "Development",
    subTitle: "06",
    photo:"/images/SM/pic2_files/pic6.jpg",
    // details: ["Front End", "Backend", "Mobile App", "Post Delivery Support", "Server Development"],
    link: "https://www.instagram.com/p/C_ihTgTons9/"
  },

  {
    id: 7,
    title: "Development",
    subTitle: "07",
    photo:"/images/SM/pic2_files/pic7.jpg",
    // details: ["Front End", "Backend", "Mobile App", "Post Delivery Support", "Server Development"],
    link: "https://www.instagram.com/p/C_TGfVEoBZX/"
  },
];

const ProjectSocialMediaCaseStudy2 = () => {
  return (
    <section className="section service-t">
      
      <div className="container">
       <Link href="https://www.instagram.com/parkregiskriskin?igsh=Y2kzampibWg3d2xo" target="_blank">
        <h2 className="title title-anim">parkregiskriskin</h2>
       </Link>
       
      
      
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                 modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {serviceData.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="service-t-single-wrapper">
                      <div className="service-t__slider-single">
                        <div className="intro">
                          <span className="sub-title">
                            {service.subTitle}
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          {/* <h4>
                            <Link href={service.link}>{service.title}</Link>
                          </h4> */}
                        </div>
                        <div>
                        <img
                            src={service.photo} 
                            alt={service.title} 
                            style={{width:"500px", height:"300px"}}
                            // width={500} 
                            // height={300} 
                            // layout="responsive"
                          />
                                                  </div>
                        {/* <ul>
                          {service.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul> */}
                        <div className="cta pt-4">
                          <Link href={service.link} target="_blank">
                            <i className="icon-arrow-top-right"></i>
                            <span>View Page</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ProjectSocialMediaCaseStudy2;