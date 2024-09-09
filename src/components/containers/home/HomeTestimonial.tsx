import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import sthumb from "public/images/client/khaled-amer.png";
import sthumbtwo from "public/images/client/soumaiama.png";
import sthumbthree from "public/images/client/pamela.png";
import sthumbfour from "public/images/client/Soula Baroudi.jpg";
import sthumbfive from "public/images/client/Latifa.jpg";
import sthumbsix from "public/images/client/khaled-amer.png";
import sthumbseven from "public/images/client/khaled-amer.png";
import sthumbeight from "public/images/client/Sonal Nanoo.jpg";
import sthumbnine from "public/images/client/Tamim Abazid.jpg";
import sthumbten from "public/images/client/Alexandra.jpg";
import sthumbeleven from "public/images/client/Rhiannon.jpg";
import sthumbtwelve from "public/images/client/Müller.jpg";
import sthumbthirteen from "public/images/client/Christian.jpg";
import sthumbfourteen from "public/images/client/Julia Knight.jpg";
import sthumbfiveteen from "public/images/client/Carmen Aston.jpg";
import sthumbsixteen from "public/images/client/Ella.jpg";
import sthumbseventeen from "public/images/client/Phil.jpg";
import sthumbeighteen from "public/images/client/MB Ortiguerra.jpg";

const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };

  const testimonials = [
    {
      // thumb: sthumb,
      summary: "Paul Williams is an outstanding brand strategist and media specialist. Our collaboration on various hotel projects showcased his exceptional dedication, creativity, and strategic insight. His professionalism and commitment to excellence are commendable traits that greatly contributed to our success. I have every confidence in Paul's abilities and wholeheartedly endorse him for any future endeavors.",
      name: "Khaled Amer",
      title: "Vice President",
    },
    {
      thumb: sthumbtwo,
      summary: "I've had the pleasure of collaborating with Paul and his company on a few projects, and I can attest to his exceptional work ethics and unwavering commitment to delivering top-quality services. His strategic approach to catering to his customers' vision and tailoring the offers to their requirements sets a benchmark for professionalism and high standards in the industry. Paul's consistency and transparent communication showcases a genuine passion for achieving excellence. I highly recommend Spearhead Creativity to any organization seeking a dedicated, visionary agency that ensures unwavering quality and delivering outstanding results.",
      name: "Soumaia Amane",
      title: "Sr. Industrial Engineer",
    },
    {
      thumb: sthumbthree,
      summary: "Paul Williams has phenomenal local Media Management and PR experience, is very well connected and is one of the best networkers that I have seen. His company, Spearhead Creativity, manages my company's Public Relations and marketing. Paul and his team were able to secure excellent coverage with leading publications to develop my personal branding, as well as our company branding for Linen Obsession. This has really helped to increase recognition and awareness for our new business initiatives, and to enhance sales. Thank you to Paul and his team.",
      name: "Pamela Lilburne Opie",
      title: "CEO of Linen Obsession Textile Trading LLC",
    },
    {
      thumb: sthumbfour,
      summary: "I worked with Paul on creating a commercial Ad for our company. Paul and his team went above our expectations and delivered an exceptional commercial Ad that was displayed in leading cinema screens as well as outdoor billboards. Paul is a professional candidate and working with him was a real pleasure. He has a strategic thinking mind with a positive attitude topped with a fun and friendly personality. I highly recommend others to work with him and his team and I look forward to be working again with him on new projects.",
      name: "Soula Baroudi",
      title: "Strategic Marketing Consultant",
    },
    {
      thumb: sthumbfive,
      summary: "It has been a true pleasure working with Spearhead. They've addressed our branding and creative content creation needs for our social media platforms and have been accommodating to our startup.Paul is flexible, easy to work with, and prompt with his responses. Continue the great work!",
      name: "Latifa Bin Haider",
      title: "Entrepreneur, Founder of Baytukum, Aurora Technologies",
    },
    {
      thumb: '',
      summary: "It’s my absolute pleasure to write about Mr. paul williams. Paul is one of my friend and great artist, although he has a creative mind that gives an ecstatic feeling to others. Paul is an optimistic and asset of any organization. Paul has it's own vision and unique method to solving problems across strategy, branding and communication.",
      name: "Er.Salma mol K",
      title: "Quantity Surveyor",
    },
    {
      thumb: '',
      summary: "There is no better colleague than Paul. He is one of the most dedicated professionals I’ve worked with and is willing to put that extra help whenever you need it. He always helped his team come up with more efficient solutions on different projects. His contribution is valuable to any side, and I highly recommend Paul as a highly reputable and trustworthy individual and would love to work with him one day again.",
      name: "Alie Jaber",
      title: "CEO",
    },
    {
      thumb: sthumbeight,
      summary: "Paul is an asset to any organization! Paul constantly amazed me with his industry insight and unique methods to solving problems across strategy, branding & communications. He consistently demonstrated a solid work ethic as well as a commitment to success. Paul is an organized and customer-service oriented perfectionist, and has no problem to work hard when necessary. He has an extremely positive attitude towards work, making him not only a reliable and forward-thinking director but also an inspiring team player.",
      name: "Sonal Nanoo",
      title: "",
    },
    {
      thumb: sthumbnine,
      summary: "Paul‘s positive attitude towards work helped encourage and support me and support any one he worked with, which made for a very enjoyable but productive work environment.I witnessed Paul‘s commitment to any project he Handel, and I recommend him without hesitation.”",
      name: "Tamim Abazid",
      title: "Creative Art Director ",
    },
    // {
    //   thumb: sthumbten,
    //   summary: "Paul is a superb networker, planner and strategist. He's a problem solver and all round over achiever.",
    //   name: "Lady Alexandra Williams",
    //   title: "CEO at A Communications",
    // },
    {
      thumb: sthumbeleven,
      summary: "Paul hired me to work for him in 2008. I was new to Dubai and to the company and he was my direct line manager - Paul had the perfect balance of being a kind and considerate manager, who did not hesitate to assist me and guide me when needed, but he also pushed me and encouraged me to learn on the job via trial and error. He led by example, unlike some of my previous managers..Ie, he put in the hard graft and definately had the gift of the gab when it came to sales and closing deals. I'll always be thankful to Paul for fighting my corner during interviews and for giving me the chance he did to start my new chapter in the UAE.",
      name: "Rhiannon Downie Hurst",
      title: "Multi-Entrepreneur",
    },
    {
      thumb: sthumbtwelve,
      summary: "I have had the pleasure of working with Paul on more than a few key projects and found him to be detail-oriented, conscientious, and dedicated. Paul is a driver of symbiotic relationships that makes sure the growth of all involved. His commitment to adding a personal hands-on touch to everything he does ensures glowing results all around. Paul plays a pivotal role in the success of all those he works with.",
      name: "Lance K Müller",
      title: "Director & Core Founder - Castheads Media",
    },
    {
      thumb: sthumbthirteen,
      summary: "I worked with Paul when he was in media sales back when Dubai was seeing rapid growth, and then a drastic short term decline through the recession. Throughout it I have always enjoyed his infectious positivity, openness to challenge creative boundaries and - last not least - his ability to deliver. I admire his courage to go out and do it. Many people talk about the importance of diversity in any industry - he was ‘doing it’ by his mere presence long before the wider (Western) world woke up to it and has transformed himself into a UAE original in the process. Godspeed! ",
      name: "Christian Fedorczuk",
      title: "Global experience",
    },
    {
      thumb: sthumbfourteen,
      summary: "Paul is superb at networking and ensuring meaningful connections are made. I will often reach out to Paul to find out where to take clients, visit or stay in the UAE- his knowledge of the hospitality industry is second to none. When we are visiting Dubai, we will always try to meet Paul to say hello. It is like greeting a long lost friend and his smile lights up rooms. Above everything, I value honesty, integrity and warmth which Paul exudes.",
      name: "Julia Knight MCCT",
      title: "Experienced School Founder ",
    },
    {
      thumb: sthumbfiveteen,
      summary: "Paul is a dedicated team player and is committed to achieving and exceeding goals within his role.He is a skilful negotiator, a self starter and a tenacious worker - all the necessary qualities for success. His strong interpersonal skills enables him to work well within a team or with his clients.Talent, hard work and a great person!",
      name: "Carmen Aston",
      title: "Global Sales & Marketing Director",
    },
    {
      thumb: sthumbsixteen,
      summary: "Paul has the energy that could move mountains, and his love for the clients manifests in his dedication to always create value for every project he works on. Outside work, Paul is a friend who would throw opportunities your way whenever he can. ",
      name: "Ella Vennice G.",
      title: "",
    },
    {
      thumb: sthumbseventeen,
      summary: "A fearless, resourceful and relentless business development professional, Paul always hit his targets and his name was invariably at the top of the sales leaderboard. A natural born hustler with a passion for luxury brands, fashion and social media, Paul is commercially driven and has an innate perception of where and how to secure the most lucrative deals. Charming, hard-working and very ambitious, Paul brings experience, drive and dedication to the table.",
      name: "Phil Smith",
      title: "Middle East Media Representative",
    },
    {
      thumb: sthumbeighteen,
      summary: "Paul Williams is one of the few people who can think both conceptually and operationally. He handles both processes with ease. He has the ability to see through numbers and identify trends, visualize visions, and put all of this into a well-articulated and exceptionally solid plan. It is a pleasure to work with someone who has a clear purpose, is action-oriented, and avoids putting in half-hearted efforts. A man who commands the admiration and loyalty of those around him. Anyone who has worked with Paul will attest to this. Above all, he is an amazing human being who brings out the best in people. Simply put, he is a true leader, which is a highly sought-after and elusive commodity!",
      name: "MB Ortiguerra",
      title: "Cluster Marketing",
    },
  ];

  return (
    <section className="section testimonial pt-0 position-relative">
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="testimonial__text-slider"
        >
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s testimonial
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s testimonial
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s testimonial
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s testimonial
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s testimonial
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s testimonial
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial__text-slider-single">
              <h2 className="h1">
                <Link href="client-feedback">
                  client&apos;s testimonial
                  <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                </Link>
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-s__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-testimonial-three",
                  prevEl: ".prev-testimonial-three",
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                className="testimonial-s__slider"
              >
                {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="testimonial-s__slider-single">
            <div className="row gaper align-items-center">
              {/* <div className="col-12 col-lg-4 col-xxl-4">
                <div className="thumb">
                   <Image src={testimonial.thumb} alt="Image" /> 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="322"
                    viewBox="0 0 44 322"
                    fill="none"
                    className="d-none d-lg-block"
                  >
                    <path
                      d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                      stroke="#414141"
                    />
                  </svg>
                </div>
              </div> */}
              <div className="col-12 ">
                <div className="testimonial-s__content">
                  <div className="quote">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <div className="content">
                    <h5 className="summary">{testimonial.summary}</h5>
                  </div>
                  <div className="content-cta">
                    <h5 style={{ fontWeight: 'bold' ,textAlign:'center',color:'#ff7425' }}>{testimonial.name}</h5>
                    <p style={{ textAlign:'center' }}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="slide-group justify-content-start">
          <button
            aria-label="previous item"
            className="slide-btn prev-testimonial-three"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button
            aria-label="next item"
            className="slide-btn next-testimonial-three"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="other-section">
        <Image
          className="other-section-image"
          src={
            nextSlideIndex === 0
              ? sthumb
              : nextSlideIndex === 1
              ? sthumbtwo
              : sthumbthree
          }
          alt="Next Slide Image"
        />
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
