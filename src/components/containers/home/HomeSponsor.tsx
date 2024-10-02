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

import one from "../../../../public/images/logo images/ABCD.png";

import two from "./../../../../public/images/logo images/Abudhabi.png";
import three from "./../../../../public/images/logo images/New Folder/Accor.png";
import four from "./../../../../public/images/logo images/New Folder/American express.png";
import five from "./../../../../public/images/logo images/New Folder/Barbara rizzi.png";
import six from "./../../../../public/images/logo images/New Folder/Bird.png";
import seven from "./../../../../public/images/logo images/New Folder/carrefour.png";
import eight from "./../../../../public/images/logo images/New Folder/DC.png";
import nine from "./../../../../public/images/logo images/New Folder/Dubai financial center.png";
import ten from "./../../../../public/images/logo images/New Folder/Emirates.png";
import eleven from "./../../../../public/images/logo images/New Folder/Expo2020.png";
import twelve from "./../../../../public/images/logo images/New Folder/Food crowd.png";
import thirteen from "./../../../../public/images/logo images/New Folder/Frame 1-1.png";
import fourteen from "./../../../../public/images/logo images/New Folder/Frame 1-2.png";
import fifteen from "./../../../../public/images/logo images/New Folder/Frame 1-3.png";
import sixteen from "./../../../../public/images/logo images/New Folder/Frame 1.png";
import seventeen from "./../../../../public/images/logo images/New Folder/Habib bank.png";
import eighteen from "./../../../../public/images/logo images/New Folder/Kingdom.png";
import nineteen from "./../../../../public/images/logo images/New Folder/Kwantu.png";
import twenty5 from "./../../../../public/images/logo images/New Folder/Public investment fund.png";
import twenty6 from "./../../../../public/images/logo images/New Folder/Rixos.png";
import twenty7 from "./../../../../public/images/logo images/New Folder/Rolls royce.png";
import twenty8 from "./../../../../public/images/logo images/New Folder/Sharjah media city.png";
import twenty9 from "./../../../../public/images/logo images/New Folder/Viceroy.png";
import thirty from "./../../../../public/images/logo images/New Folder/Sharjah.png";
import thirty1 from "./../../../../public/images/logo images/New Folder/Zoya.png";






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
        
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={four} alt="Image" />
                  </div>
                </SwiperSlide>
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
                    <Image src={eleven} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twelve} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={thirteen} alt="Image" />
                  </div>
                </SwiperSlide>
               
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={fourteen} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={fifteen} alt="Image" />
                  </div>
                </SwiperSlide>
               <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={sixteen} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={seventeen} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={eighteen} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={nineteen} alt="Image" />
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty1} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty2} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty3} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty4} alt="Image" />
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty5} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty6} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty7} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty8} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={twenty9} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={thirty} alt="Image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={thirty1} alt="Image" />
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
