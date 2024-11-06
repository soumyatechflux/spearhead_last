import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
const HomeSponsor = () => {
const one = require("../../../../public/images/logo_images/ABCD.png");
const two = require("../../../../public/images/logo_images/Abudhabi.png");
const three = require("../../../../public/images/logo_images/New_folder/Accor.png");
const four = require("../../../../public/images/logo_images/New_folder/American express.png");
const five = require("../../../../public/images/logo_images/New_folder/Barbara rizzi.png");
const six = require("../../../../public/images/logo_images/New_folder/Bird.png");
const seven = require("../../../../public/images/logo_images/New_folder/carrefour.png");
const eight = require("../../../../public/images/logo_images/New_folder/DC.png");
const nine = require("../../../../public/images/logo_images/New_folder/Dubai financial center.png");
const ten = require("../../../../public/images/logo_images/New_folder/Emirates.png");
const eleven = require("../../../../public/images/logo_images/New_folder/Expo2020.png");
const twelve = require("../../../../public/images/logo_images/New_folder/Food crowd.png");
const thirteen = require("../../../../public/images/logo_images/New_folder/Frame 1-1.png");
const fourteen = require("../../../../public/images/logo_images/New_folder/Frame 1-2.png");
const fifteen = require("../../../../public/images/logo_images/New_folder/Frame 1-3.png");
const sixteen = require("../../../../public/images/logo_images/New_folder/Frame 1.png");
const seventeen = require("../../../../public/images/logo_images/New_folder/Habib bank.png");
const eighteen = require("../../../../public/images/logo_images/New_folder/Kingdom.png");
const nineteen = require("../../../../public/images/logo_images/New_folder/Kwantu.png");
const twenty5 = require("../../../../public/images/logo_images/New_folder/Public investment fund.png");
const twenty6 = require("../../../../public/images/logo_images/New_folder/Rixos.png");
const twenty7 = require("../../../../public/images/logo_images/New_folder/Rolls royce.png");
const twenty8 = require("../../../../public/images/logo_images/New_folder/Sharjah media city.png");
const twenty9 = require("../../../../public/images/logo_images/New_folder/Viceroy.png");
const thirty = require("../../../../public/images/logo_images/New_folder/Sharjah.png");
const thirty1 = require("../../../../public/images/logo_images/New_folder/Zoya.png");



  return (
    <>
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
    </>
  );
};

export default HomeSponsor;
