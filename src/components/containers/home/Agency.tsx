// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import creative from "public/images/aboutus/five.jpg";
// import ceo from "public/images/aboutus/thumbnail_IMG.jpg";
// import experience from "public/images/experience.png";
// // import thumbone from "public/images/agency/thumb-one.png";
// // import thumbone from "public/images/agency/ani.png";
// // import thumbtwo from "public/images/agency/thumb-two.png";
// // import star from "public/images/star.png";
// import glow_star from "public/images/glowing star.gif";
// import dotlarge from "public/images/agency/dot-large.png";
// // import { FaQuoteLeft } from "react-icons/fa";

// interface ArticleData {
//   id: string;
//   title: string;
//   alias: string;
//   introtext_: string;
//   fulltext_: string;
//   category_id: string;
//   created_at: string;
//   created_by: string;
//   images: {
//     intro_image_link: string;
//     intro_image_alt_text: string;
//     full_image_link: string;
//     full_image_alt_text: string;
//   };
//   hits: string;
//   ordering: string;
//   published: string;
//   star: null | string;
//   og_title: string;
//   og_description: string;
//   og_image: string;
//   meta_title: string;
//   meta_keyword: string;
//   meta_description: string;
//   parent_language_id: string;
//   language_id: string;
// }

// interface ApiResponse {
//   response: boolean;
//   success_msg: string;
//   error_msg: string;
//   data: {
//     article_data: ArticleData;
//     field_data: Array<{ data: string }>;
//   }[];
// }

// interface StripApiResponse {
//   response: boolean;
//   success_msg: string;
//   error_msg: string;
//   data: Array<{
//     article_data: ArticleData;
//     field_data: Array<{ data: string }>;
//   }>;
// }

// gsap.registerPlugin(ScrollTrigger);
// const Agency = () => {
//   const [triggerClasses] = useState({
//     skillBar: "skill-bar-single",
//     scrollAnimation: "scroll_animation",
//     imgAnimation: "img-animation",
//     listAnimation: "list",
//   });

//   useEffect(() => {
//     // Skill Bar Animations
//     const skillBars = document.querySelectorAll(`.${triggerClasses.skillBar}`);
//     skillBars.forEach((element) => {
//       const skillBarPercent = element.querySelector(
//         ".skill-bar-percent"
//       ) as HTMLElement | null;
//       const percentValue = element.querySelector(
//         ".percent-value"
//       ) as HTMLElement | null;

//       if (skillBarPercent && percentValue) {
//         const target = percentValue.textContent || "0%";

//         gsap
//           .timeline({
//             scrollTrigger: {
//               trigger: element,
//               start: "top 75%", // Trigger when the top of the element hits 75% of the viewport
//               end: "bottom 25%", // End the trigger when the bottom of the element hits 25% of the viewport
//               toggleActions: "play none none none",
//             },
//           })
//           .fromTo(skillBarPercent, { width: 0 }, { width: target, duration: 2 })
//           .from(
//             percentValue,
//             {
//               textContent: "0%",
//               snap: { textContent: 5 },
//             },
//             "<"
//           );
//       }
//     });
//   }, [triggerClasses.skillBar]);

//   useEffect(() => {
//     // Scroll Animation for 'scroll_animation' class
//     gsap.to(`.${triggerClasses.scrollAnimation}`, {
//       scrollTrigger: {
//         trigger: `.${triggerClasses.scrollAnimation}`,
//         start: "top 75%", // Start animation when the top of the element hits 75% of the viewport
//         end: "bottom 25%",
//         toggleActions: "play none none none",
//       },
//       y: 0,
//       duration: 2,
//     });
//   }, [triggerClasses.scrollAnimation]);

//   useEffect(() => {
//     // Image Animation
//     gsap.to(`.${triggerClasses.imgAnimation}`, {
//       scrollTrigger: {
//         trigger: `.${triggerClasses.imgAnimation}`,
//         start: "top 75%", // Adjust start position as needed
//         end: "bottom 25%",
//         toggleActions: "play none none none",
//       },
//       x: 31,
//       duration: 4,
//     });
//   }, [triggerClasses.imgAnimation]);

//   useEffect(() => {
//     // List Items Animation
//     gsap.fromTo(
//       `.${triggerClasses.listAnimation}`,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 2,
//         stagger: 0.3, // Delay between each list item
//         scrollTrigger: {
//           trigger: `.${triggerClasses.listAnimation}`,
//           start: "top 80%",
//           end: "bottom 20%",
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, [triggerClasses.listAnimation]);

//   const [isReadMore, setIsReadMore] = useState(false);

//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };

//   const [article, setArticle] = useState<ApiResponse | null>(null);
//   const [stripData, setStripData] = useState<StripApiResponse | null>(null);
//   const [ceoMessageData, setCeoMessageData] = useState<ApiResponse | null>(
//     null
//   );
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await axios.get<ApiResponse>(
//           "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=49"
//         );
//         setArticle(response.data);
//       } catch (err) {
//         setError("Error fetching article data.");
//         console.error(err);
//       }
//     };

//     fetchArticle();
//   }, []);

//   useEffect(() => {
//     const fetchStripData = async () => {
//       try {
//         const response = await axios.get<StripApiResponse>(
//           "https://techfluxsolutions.com/web_shop/app/api_folder/strip.php?id=49"
//         );
//         setStripData(response.data);
//       } catch (err) {
//         setError("Error fetching Strip API data.");
//         console.error(err);
//       }
//     };

//     fetchStripData();
//   }, []);

//   useEffect(() => {
//     const fetchCeoMessageData = async () => {
//       try {
//         const response = await axios.get<ApiResponse>(
//           "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=50"
//         );
//         setCeoMessageData(response.data);
//       } catch (err) {
//         setError("Error fetching CEO message.");
//         console.error(err);
//       }
//     };
//     fetchCeoMessageData();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!article || !stripData || !ceoMessageData) {
//     return <div>Loading...</div>;
//   }
//   // const listItems = [
//   //   stripData.data[0].article_data.fulltext_,
//   // ];
//   const listItems = stripData.data[0].article_data.fulltext_;

//   return (
//     <section className="section agency">
//       <div className="container">
//         <div className="row gaper pt-5">
//           <div className="col-11 col-lg-6">
//             <div className="agency__thumb">
             

//               <Image
//                 src="https://techfluxsolutions.com//web_shop////media//spearhead_243435432//five.jpg"
//                 alt="Image"
//                 className="thumb-two img-animation"
//                 priority
//                 width={500} // Set width as needed
//                 height={300} // Set height as needed
//               />
//             </div>
//           </div>

//           <div className="col-12 col-lg-6 scroll_animation">
//             <div className="agency__content section__content fade-top">
             
//               <span className="sub-title mt-0">
//                 About Us<i className="fa-solid fa-arrow-right"></i>
//               </span>
//               <h2 className="title title-anim">
//                 {article.data[0].article_data.title}
//               </h2>
//               <div className="paragraph">
                
//                 <ul>
//                   <li className="list">
                    

//                     <p className="summary">
//                       {article.data[0].article_data.introtext_}
//                     </p>
                    
//                     <Link href="/about-us" className="read-more-btn">
//                       ..Read More
//                     </Link>
//                   </li>

//                   {listItems.map((item, index) => (
//                     <li className="list" key={index}>
//                       <Image
//                         src="/images/check.png"
//                         alt="Check Icon"
//                         width={24} // Set the width
//                         height={24} // Set the height
//                         className="list-icon"
//                       />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="skill-wrap">
//                 <div className="skill-bar-single d-none">
//                   <div className="skill-bar-title">
//                     <p className="primary-text">Website design</p>
//                   </div>
//                   <div className="skill-bar-wrapper" data-percent="75%">
//                     <div className="skill-bar">
//                       <div className="skill-bar-percent">
//                         <span className="percent-value"></span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="skill-bar-single">
                 
//                 </div>
                
//               </div>
             
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="container"> */}
//       <div className="row justify-content-center">
//         <div className="col-12 col-lg-8 col-xl-8 ceo-message">
//           <div className="ceo-quote mb-5">
//             {/* <i className="fa-solid fa-quote-right"></i> */}
//             {/* <FaQuoteLeft /> */}
//             <Image
//               src={ceo}
//               alt="https://techfluxsolutions.com//web_shop//media//spearhead_243435432////thumbnail_IMG.jpg"
//               width={200} // Set the width
//               height={200} // Set the height
//               className="CEO-img"
//             />

//             <h2
//               className="title ceo-title title-anim"
//               style={{ textTransform: "capitalize" }}
//             >
//               {/* Message From CEO */}
//               {ceoMessageData.data[0].article_data.title}
//             </h2>
//           </div>
//           <div className="ceo-msg mb-4">
//             <h6 className="ceo-msg ">
//               <span className="double-quote">"</span>
//               <p>{ceoMessageData.data[0].article_data.introtext_}</p>
//             </h6>

//             {isReadMore && (
//               <p className="ceo-msg">
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: ceoMessageData.data[0].article_data.fulltext_,
//                   }}
//                 />
//               </p>
//             )}
//             <button className="read-more-btn " onClick={toggleReadMore}>
//               {isReadMore ? "Read Less" : " ...Read More"}
//             </button>
//             <span className="double-quote">"</span>
//           </div>

//           <div className="content-cta">
//             <h4 className="ceo-name">Paul Williams</h4>
//             {/* <p>CEO</p> */}
//           </div>
//         </div>
//       </div>

//       {/* </div> */}

//       <Image src={glow_star} alt="Image" className="star" priority />
//       <Image src={dotlarge} alt="Image" className="dot-large" priority />
//       <Image src={glow_star} alt="Image" className="star-dot-large" priority />
//     </section>
//   );
// };

// export default Agency;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Import images
import creative from "public/images/aboutus/five.jpg";
import ceo from "public/images/aboutus/thumbnail_IMG.jpg";
import glow_star from "public/images/glowing star.gif";
import dotlarge from "public/images/agency/dot-large.png";

// Define TypeScript interfaces
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

interface StripApiResponse {
  response: boolean;
  success_msg: string;
  error_msg: string;
  data: Array<{
    article_data: ArticleData;
    field_data: Array<{ data: string }>;
  }>;
}

gsap.registerPlugin(ScrollTrigger);

const Agency: React.FC = () => {
  const [triggerClasses] = useState({
    skillBar: "skill-bar-single",
    scrollAnimation: "scroll_animation",
    imgAnimation: "img-animation",
    listAnimation: "list",
  });

  const [isReadMore, setIsReadMore] = useState(false);
  const [article, setArticle] = useState<ApiResponse | null>(null);
  const [stripData, setStripData] = useState<StripApiResponse | null>(null);
  const [ceoMessageData, setCeoMessageData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articleResponse, stripResponse, ceoMessageResponse] = await Promise.all([
          axios.get<ApiResponse>("https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=49"),
          axios.get<StripApiResponse>("https://techfluxsolutions.com/web_shop/app/api_folder/strip.php?id=49"),
          axios.get<ApiResponse>("https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=50"),
        ]);

        setArticle(articleResponse.data);
        setStripData(stripResponse.data);
        setCeoMessageData(ceoMessageResponse.data);
      } catch (err) {
        setError("Error fetching data.");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Skill Bar Animations
    const skillBars = document.querySelectorAll(`.${triggerClasses.skillBar}`);
    skillBars.forEach((element) => {
      const skillBarPercent = element.querySelector(".skill-bar-percent") as HTMLElement | null;
      const percentValue = element.querySelector(".percent-value") as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none none",
          },
        })
        .fromTo(skillBarPercent, { width: 0 }, { width: target, duration: 2 })
        .from(percentValue, {
          textContent: "0%",
          snap: { textContent: 5 },
        }, "<");
      }
    });
  }, [triggerClasses.skillBar]);

  useEffect(() => {
    gsap.to(`.${triggerClasses.scrollAnimation}`, {
      scrollTrigger: {
        trigger: `.${triggerClasses.scrollAnimation}`,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
      y: 0,
      duration: 2,
    });
  }, [triggerClasses.scrollAnimation]);

  useEffect(() => {
    gsap.to(`.${triggerClasses.imgAnimation}`, {
      scrollTrigger: {
        trigger: `.${triggerClasses.imgAnimation}`,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
      x: 31,
      duration: 4,
    });
  }, [triggerClasses.imgAnimation]);

  useEffect(() => {
    gsap.fromTo(
      `.${triggerClasses.listAnimation}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: `.${triggerClasses.listAnimation}`,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [triggerClasses.listAnimation]);

  const toggleReadMore = () => {
    setIsReadMore((prev) => !prev);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!article || !stripData || !ceoMessageData) {
    return <div>Loading...</div>;
  }

  const listItems = stripData.data[0].article_data.fulltext_;

  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper pt-5">
          <div className="col-11 col-lg-6">
            <div className="agency__thumb">
              <Image
                src="https://techfluxsolutions.com/web_shop/media/spearhead_243435432/five.jpg"
                alt="Image"
                className="thumb-two img-animation"
                priority
                width={500}
                height={300}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 scroll_animation">
            <div className="agency__content section__content fade-top">
              <span className="sub-title mt-0">
                About Us<i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">{article.data[0].article_data.title}</h2>
              <div className="paragraph">
                <ul>
                  <li className="list">
                    <p className="summary">{article.data[0].article_data.introtext_}</p>
                    <Link href="/about-us" className="read-more-btn">..Read More</Link>
                  </li>
                  {listItems?.map((item, index) => (
                    <li className="list" key={index}>
                      <Image
                        src="/images/check.png"
                        alt="Check Icon"
                        width={24}
                        height={24}
                        className="list-icon"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="skill-wrap">
                <div className="skill-bar-single d-none">
                  <div className="skill-bar-title">
                    <p className="primary-text">Website design</p>
                  </div>
                  <div className="skill-bar-wrapper" data-percent="75%">
                    <div className="skill-bar">
                      <div className="skill-bar-percent">
                        <span className="percent-value"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skill-bar-single"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-8 ceo-message">
          <div className="ceo-quote mb-5">
            <Image
              src={ceo}
              alt="CEO Image"
              width={200}
              height={200}
              className="CEO-img"
            />
            <h2 className="title ceo-title title-anim" style={{ textTransform: "capitalize" }}>
              {ceoMessageData.data[0].article_data.title}
            </h2>
          </div>
          <div className="ceo-msg mb-4">
            <h6 className="ceo-msg">
              <span className="double-quote">"</span>
              <p>{ceoMessageData.data[0].article_data.introtext_}</p>
            </h6>
            {isReadMore && (
              <p className="ceo-msg">
                <div
                  dangerouslySetInnerHTML={{
                    __html: ceoMessageData.data[0].article_data.fulltext_,
                  }}
                />
              </p>
            )}
          </div>
          <button onClick={toggleReadMore} className="read-more-btn">
            {isReadMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-11 text-center mt-4">
          <Image
            src={glow_star}
            alt="Glow Star"
            width={100}
            height={100}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default Agency;
