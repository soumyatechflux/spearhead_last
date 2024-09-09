import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/poster.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/d-one.png";
import dtwo from "public/images/projects/d-two.png";
import dthree from "public/images/projects/d-three.png";
import dfour from "public/images/projects/d-four.png";
import dfive from "public/images/projects/d-five.png";

const ProjectDetailsMain = () => {
  return (
    <section className="section project-d">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="poster__slider-wrapper">
              <div className="poster__slider-w">
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
                    nextEl: ".next-project-d",
                    prevEl: ".prev-project-d",
                  }}
                  className="poster__slider"
                >
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slide-group">
                <button
                  aria-label="previous item"
                  className="slide-btn prev-project-d"
                >
                  <i className="fa-light fa-angle-left"></i>
                </button>
                <button
                  aria-label="next item"
                  className="slide-btn next-project-d"
                >
                  <i className="fa-light fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="project-box">
          <div className="col-12 ">
            <div className="project-d-group">
              {/* <h3 className="light-title-lg">January– Press Clippings</h3> */}
              <p className="pr-text">
              NabdAl Hadath – Damac Maison Icon City Hotel Apartments in Dubai Welcomes Saudi and Gulf VisitorsAhmed bin Abdulqadir, (2024). "Damac Maison Icon City Hotel Apartments in Dubai Welcomes Saudi and Gulf Visitors" Nabd Al Hadath
              </p>
              <br />
              <Link href="https://nabd-alhadath.com/archives/41251" target="_blank" rel="noopener noreferrer">
                <p className="pr-link">https://nabd-alhadath.com/archives/41251</p>
              </Link>
            </div>
          </div>
          <div className="col-12 ">
            <div className="project-d-group">
              {/* <h3 className="light-title-lg">Project Includes</h3> */}
              <p className="pr-text">
                NabdAl Hadath – Aycon City is Launch by Damac Maison, the latest luxury real estate and hospitality project in DUBAI
                Ahmad bin Abdulqadir, (2024). "AyconCity is Launch byDamacMaison, the latest luxury real estate and hospitality project in DUBAI" Nabd Al Hadath
              </p>
              <Link href="https://nabd-alhadath.com/archives/41260">
              <p className="pr-link">https://nabd-alhadath.com/archives/41260</p>
              </Link>
            </div>
          </div>
          </div>
        </div>
        {/* <div className="row gaper fade-wrapper">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Sectors</h5>
                <p>Roads & Highway</p>
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Owner</h5>
                <p>Some Comapny</p>
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Project Date</h5>
                <p>Start: 2021 - End: 2023</p>
              </div>
              <div className="thumb">
                <Image src={iconthree} alt="Image" />
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              {/* <h3 className="light-title-lg">February – Press Clippings</h3> */}
              <p className="pr-text">
              The National Online (AE) - Dubai Records Widening gap between renewal and new lease rent
              Nair, Deepthi."Dubai Records Widening gap between Renewal and new lease rent"The National (AE)
              </p>
              <Link href="https://www.thenationalnews.com/business/property/">
              <p className="pr-link">https://www.thenationalnews.com/business/property/</p>
              </Link>
              
              <p className="pr-text">
              Fresh Society- Dubai Records widening gap between renewal and new lease rents
              Miller Sanford, (2024) "Dubai Records a widening gap between renewal and new lease rents" Fresh Society 
              </p>
              <Link href="https://freshsociety.info/2024/">
              <p className="pr-link">https://freshsociety.info/2024/</p>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="quote-pj">
              <div className="cont">
                {/* <h3 className="light-title-lg">December – Press Clippings</h3> */}
                <p className="pr-text">
                Zawya- DAMAC unveils new luxury real estate, hospitality hroject
                Trade Arabia (2023). "Damac unveils new luxury real estate, hospitality project" ZAWYA
                </p>
                <Link href="https://www.zawya.com/en/business/real-estate/damac">
                <p className="pr-link">https://www.zawya.com/en/business/real-estate/damac</p>
                </Link>
                

                <p className="pr-text">
                Bizpreneurme-DAMAC’s MAISON AYKON City Breaks New Ground in Dubai’s Luxury Real Estate and Hospitality
                Bizpreneurme, (2023)
                </p>
                <Link href="https://www.bizpreneurme.com/damacs-maison-aykon-city-breaks-new-ground-in-dubais-luxury-real-estate-and-hospitality/">
                <p className="pr-link">https://www.bizpreneurme.com/damacs-maison-aykon-city-breaks-new-ground-in-dubais-luxury-real-estate-and-hospitality/</p>
                </Link>
               
                <p className="pr-text">
                Business Today-DAMAC’s MAISON AYKON City Breaks New Ground in Dubai's Luxury Real Estate
                Business Today, (2023)
                </p>
                <Link href="https://www.businesstoday.me/construction/damacs-maison-aykon-city-breaks-new-ground-in-dubais-luxury-real-estate-and-hospitality/">
                <p className="pr-link">https://www.businesstoday.me/construction/damacs-maison-aykon-city-breaks-new-ground-in-dubais-luxury-real-estate-and-hospitality/</p>
                </Link>

              </div>
              
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">The Result</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum
                generators on the Internet tend to repeat predefined chunks as
                necessary,
              </p>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="project-d__slider-w section__content-cta">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 5,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="project-d__slider"
        >
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </section>
  );
};

export default ProjectDetailsMain;
