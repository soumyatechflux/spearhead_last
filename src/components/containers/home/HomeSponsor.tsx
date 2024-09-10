import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import one from "public/images/sponsor/three-dark.png";
// import two from "public/images/sponsor/five-dark.png";
// import three from "public/images/sponsor/one.png";
// import four from "public/images/sponsor/one-dark.png";
// import five from "public/images/sponsor/four-dark.png";
// import six from "public/images/sponsor/six-dark.png";

import one from "public/images/logo images/long/accor.png";
import two from "public/images/logo images/long/adcb.png";
import three from "public/images/logo images/long/department.png";
// import four from "public/images/logo images/long/department1.png";
import five from "public/images/logo images/long/viceroy.png";
// import six from "public/images/logo images/long/logo1.jpg";
import six from  "public/images/logo images/long/barbara.webp";
import seven from "public/images/logo images/long/abudhabi.jpg";
import eight from "public/images/logo images/long/example.jpg";
import twelve from "public/images/logo images/long/zoya.jpg";
import nine from "public/images/logo images/long/Rixos.png";
import ten from "public/images/logo images/long/expo.jpg";
import fourteen from "public/images/logo images/long/cartier.webp";
import eleven from "public/images/logo images/long/sharja.webp";

import thirteen from "public/images/logo images/long/kwantu.png";



const HomeSponsor = () => {
  return (
    <div className="sponsor section pb-0">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className="sponsor__slider"
              >
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={six} alt="Image" style={{width:'220px' ,height:'150px'}}/>
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={one} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={two} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={six} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={three} alt="Image" />
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={five} alt="Image" />
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={six} alt="Image" />
                  </div>
                </SwiperSlide> */}

                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={seven} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={eight} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twelve} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={nine} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={ten} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={fourteen} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={eleven} alt="Image" />
                  </div>
                </SwiperSlide>
               
               
              
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={thirteen} alt="Image" />
                  </div>
                </SwiperSlide>
              
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeSponsor;
