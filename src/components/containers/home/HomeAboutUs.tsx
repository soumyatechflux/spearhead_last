import React, { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import creative from "./../../../../public/images/aboutus/shutterstock_2273961219.jpg";
import glow_star from "public/images/glowing star.gif";
import dotlarge from "public/images/agency/dot-large.png";
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

// Define the API response interface
interface ApiResponse {
  response: boolean;
  success_msg: string;
  error_msg: string;
  data: {
    article_data: ArticleData;
    field_data: Array<{ data: string }>[]; // Assuming field_data is an array, adjust as needed
  }[];
}

interface ReadMoreProps {
  children: React.ReactNode;
}
const ReadMore: React.FC<ReadMoreProps> = ({ children }) => {
  const text = children as string;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-more-btn">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
const HomeAboutUs = () => {
  const [triggerClasses] = useState({
    skillBar: "skill-bar-single",
    scrollAnimation: "scroll_animation",
    imgAnimation: "img-animation",
    listAnimation: "list",
  });
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [listItems, setListItems] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Skill Bar Animations
    const skillBars = document.querySelectorAll(`.${triggerClasses.skillBar}`);
    skillBars.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none none",
            },
          })
          .fromTo(skillBarPercent, { width: 0 }, { width: target, duration: 2 })
          .from(
            percentValue,
            {
              textContent: "0%",
              snap: { textContent: 5 },
            },
            "<"
          );
      }
    });
  }, [triggerClasses.skillBar]);

  useEffect(() => {
    // Scroll Animation for 'scroll_animation' class
    gsap.to(`.${triggerClasses.scrollAnimation}`, {
      scrollTrigger: {
        trigger: `.${triggerClasses.scrollAnimation}`,
        start: "top 75%", // Start animation when the top of the element hits 75% of the viewport
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
      y: 15,
      duration: 2,
    });
  }, [triggerClasses.scrollAnimation]);

  useEffect(() => {
    // Image Animation
    gsap.to(`.${triggerClasses.imgAnimation}`, {
      scrollTrigger: {
        trigger: `.${triggerClasses.imgAnimation}`,
        start: "top 75%", // Adjust start position as needed
        end: "bottom 25%",
        toggleActions: "play none none none",
      },
      x: 40,
      duration: 4,
    });
  }, [triggerClasses.imgAnimation]);

  useEffect(() => {
    // List Items Animation
    gsap.fromTo(
      `.${triggerClasses.listAnimation}`,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.3, // Delay between each list item
        scrollTrigger: {
          trigger: `.${triggerClasses.listAnimation}`,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [triggerClasses.listAnimation]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=1"
        );
        if (response.data.response) {
          setArticle(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg || "Error fetching data.");
        }
      } catch (err) {
        setError("Error fetching article.");
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchListItems = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/strip.php?id=49"
        );
        if (response.data.response) {
          const fulltextItems = response.data.data[0].article_data.fulltext_;

          // Check if fulltextItems is a string and convert it to an array
          if (typeof fulltextItems === "string") {
            // Split the string into an array based on your desired delimiter
            setListItems(fulltextItems.split("\n")); // Example using newline as a delimiter
          } else {
            // If it's already an array, just set it directly
            setListItems(fulltextItems);
          }
        } else {
          setError(response.data.error_msg || "Error fetching data.");
        }
      } catch (err) {
        setError("Error fetching list items.");
        console.error(err);
      }
    };

    fetchListItems();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  interface ListItem {
    text: string;
    iconSrc: string;
  }
  return (
    <section className="section agency">
      <div className="container">
        <div className="row gaper pt-5">
          <div className="col-12 col-lg-6">
            <div className="agency__thumb">
              <div className="agency__thumb">
                <Image
                  src="https://techfluxsolutions.com//web_shop////////media//spearhead_243435432////unnamed-(3).png"
                  alt="Image"
                  width={800} // Replace with actual width
                  height={600} // Replace with actual height
                  className="thumb-two img-animation"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 scroll_animation">
            <div className="agency__content section__content fade-top">
              <h2
                className="title title-anim"
                style={{ textTransform: "capitalize" }}
              >
                {article.title}
              </h2>
              {/* <div className="paragraph"> */}

              <div className="paragraph">
                <p dangerouslySetInnerHTML={{ __html: article.introtext_ }} />
                <br />
                {/* </ReadMore> */}
              </div>
              <ul>
                {listItems.map((item, index) => (
                  <li key={index} className="list">
                    <Image
                      src="/images/check.png" // Update icon path as needed
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
            </div>
          </div>
        </div>
      </div>

      <Image src={glow_star} alt="Image" className="star" priority />
      <Image src={dotlarge} alt="Image" className="dot-large" priority />
      <Image src={glow_star} alt="Image" className="star-dot-large" priority />
    </section>
  );
};

export default HomeAboutUs;
