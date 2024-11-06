import React, { useState, useEffect } from "react";
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
import axios from "axios";

interface ArticleData {
  id: string;
  title: string;
  alias: string;
  introtext_: string;
  fulltext_: string;
  category_id: string;
  created_at: string;
  created_by: string;
  images: {
    intro_image_link: string;
    intro_image_alt_text: string;
    full_image_link: string;
    full_image_alt_text: string;
  };
  hits: string;
  ordering: string;
  published: string;
  star: null | string;
  og_title: string;
  og_description: string;
  og_image: string;
  meta_title: string;
  meta_keyword: string;
  meta_description: string;
  parent_language_id: string;
  language_id: string;
}

interface ApiResponse {
  response: boolean;
  success_msg: string;
  error_msg: string;
  data: {
    article_data: ArticleData;
    field_data: Array<{ data: string }>;
  }[];
}

const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);
  const [article1, setArticle1] = useState<ArticleData | null>(null);
  const [article2, setArticle2] = useState<ArticleData | null>(null);
  const [article3, setArticle3] = useState<ArticleData | null>(null);
  const [article4, setArticle4] = useState<ArticleData | null>(null);
  const [article5, setArticle5] = useState<ArticleData | null>(null);
  const [article6, setArticle6] = useState<ArticleData | null>(null);
  const [article7, setArticle7] = useState<ArticleData | null>(null);
  const [article8, setArticle8] = useState<ArticleData | null>(null);
  const [article9, setArticle9] = useState<ArticleData | null>(null);
  const [article10, setArticle10] = useState<ArticleData | null>(null);
  const [article11, setArticle11] = useState<ArticleData | null>(null);
  const [article12, setArticle12] = useState<ArticleData | null>(null);
  const [article13, setArticle13] = useState<ArticleData | null>(null);
  const [article14, setArticle14] = useState<ArticleData | null>(null);
  const [article15, setArticle15] = useState<ArticleData | null>(null);
  const [article16, setArticle16] = useState<ArticleData | null>(null);
  const [article17, setArticle17] = useState<ArticleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };

  useEffect(() => {
    const fetchArticle1 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=67"
        );

        if (response.data.response) {
          setArticle1(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 1.");
        console.error(err);
      }
    };

    const fetchArticle2 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=58"
        );

        if (response.data.response) {
          setArticle2(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 2.");
        console.error(err);
      }
    };
    const fetchArticle3 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=63"
        );

        if (response.data.response) {
          setArticle3(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 3.");
        console.error(err);
      }
    };
    const fetchArticle4 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=52" // Replace with the actual ID for the fourth article
        );

        if (response.data.response) {
          setArticle4(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 4.");
        console.error(err);
      }
    };

    const fetchArticle5 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=53" // Replace with the actual ID for the fifth article
        );

        if (response.data.response) {
          setArticle5(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 5.");
        console.error(err);
      }
    };
    const fetchArticle6 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=61"
        );

        if (response.data.response) {
          setArticle6(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 6.");
        console.error(err);
      }
    };
    const fetchArticle7 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=59"
        );

        if (response.data.response) {
          setArticle7(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 7.");
        console.error(err);
      }
    };
    const fetchArticle8 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=66"
        );

        if (response.data.response) {
          setArticle8(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 8.");
        console.error(err);
      }
    };
    const fetchArticle9 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=56"
        );

        if (response.data.response) {
          setArticle9(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 9.");
        console.error(err);
      }
    };
    const fetchArticle10 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=64"
        );

        if (response.data.response) {
          setArticle10(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 10.");
        console.error(err);
      }
    };
    const fetchArticle11 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=68"
        );

        if (response.data.response) {
          setArticle11(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 11.");
        console.error(err);
      }
    };
    const fetchArticle12 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=60"
        );

        if (response.data.response) {
          setArticle12(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 12.");
        console.error(err);
      }
    };
    const fetchArticle13 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=54"
        );

        if (response.data.response) {
          setArticle13(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 13.");
        console.error(err);
      }
    };
    const fetchArticle14 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=57"
        );

        if (response.data.response) {
          setArticle14(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 14.");
        console.error(err);
      }
    };
    const fetchArticle15 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=62"
        );

        if (response.data.response) {
          setArticle15(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 15.");
        console.error(err);
      }
    };
    const fetchArticle16 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=65"
        );

        if (response.data.response) {
          setArticle16(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 16.");
        console.error(err);
      }
    };
    const fetchArticle17 = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=55"
        );

        if (response.data.response) {
          setArticle17(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg);
        }
      } catch (err) {
        setError("Error fetching article data 17.");
        console.error(err);
      }
    };
   

    fetchArticle1();
    fetchArticle2();
    fetchArticle3();
    fetchArticle4();
    fetchArticle5();
    fetchArticle6();
    fetchArticle7();
    fetchArticle8();
    fetchArticle9();
    fetchArticle10();
    fetchArticle11();
    fetchArticle12();
    fetchArticle13();
    fetchArticle14();
    fetchArticle15();
    fetchArticle16();
    fetchArticle17();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  // Wait until both articles are fetched
  if (!article1 && !article2 && !article3 && !article6) {
    return <div>Loading...</div>;
  }
  const testimonials = [
    {
      thumb: sthumb,
      summary: article1?.fulltext_,
      name: article1?.title,
      title: article1?.introtext_,
    },
    {
      thumb: sthumbtwo,
      summary: article2?.fulltext_,
      name: article2?.title,
      title: article2?.introtext_,
    },
    {
      thumb: sthumbthree,
      summary: article3?.fulltext_,
      name: article3?.title,
      title: article3?.introtext_,
    },
    {
      thumb: sthumbfour,
      summary: article4?.fulltext_,
      name: article4?.title,
      title: article4?.introtext_,
    },
    {
      thumb: sthumbfive,
      summary: article5?.fulltext_,
      name: article5?.title,
      title: article5?.introtext_,
    },
    {
      thumb: "",
      summary: article6?.fulltext_,
      name: article6?.title,
      title: article6?.introtext_,
    },
    {
      thumb: "",
      summary: article7?.fulltext_,
      name: article7?.title,
      title: article7?.introtext_,
    },
    {
      thumb: sthumbeight,
      // summary:
      //   "Paul is an asset to any organization! Paul constantly amazed me with his industry insight and unique methods to solving problems across strategy, branding & communications. He consistently demonstrated a solid work ethic as well as a commitment to success. Paul is an organized and customer-service oriented perfectionist, and has no problem to work hard when necessary. He has an extremely positive attitude towards work, making him not only a reliable and forward-thinking director but also an inspiring team player.",
      // name: "Sonal Nanoo",
      // title: "",
      summary: article8?.fulltext_,
      name: article8?.title,
      title: article8?.introtext_,
    },
    {
      thumb: sthumbnine,
      summary: article9?.fulltext_,
      name: article9?.title,
      title: article9?.introtext_,
    },
    {
      thumb: sthumbeleven,
      summary: article10?.fulltext_,
      name: article10?.title,
      title: article10?.introtext_,
    },
    {
      thumb: sthumbtwelve,
      summary: article11?.fulltext_,
      name: article11?.title,
      title: article11?.introtext_,
    },
    {
      thumb: sthumbthirteen,
      summary: article12?.fulltext_,
      name: article12?.title,
      title: article12?.introtext_,
    },
    {
      thumb: sthumbfourteen,
      summary: article13?.fulltext_,
      name: article13?.title,
      title: article13?.introtext_,
    },
    {
      thumb: sthumbfiveteen,
      summary: article14?.fulltext_,
      name: article14?.title,
      title: article14?.introtext_,
    },
    {
      thumb: sthumbsixteen,
      summary: article15?.fulltext_,
      name: article15?.title,
      title: article15?.introtext_,
    },
    {
      thumb: sthumbseventeen,
      summary: article16?.fulltext_,
      name: article16?.title,
      title: article16?.introtext_,
    },
    {
      thumb: sthumbeighteen,
      summary: article17?.fulltext_,
      name: article17?.title,
      title: article17?.introtext_,
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
                              <h5
                                style={{
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  color: "#ff7425",
                                }}
                              >
                                {testimonial.name}
                              </h5>
                              <p style={{ textAlign: "center" }}>
                                {testimonial.title}
                              </p>
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

