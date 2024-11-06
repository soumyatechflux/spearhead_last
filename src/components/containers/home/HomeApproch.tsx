import React, { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import approch from "public/images/approch-1.png";
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
    field_data: Array<{ data: string }>[]; 
  }[]; 
}

gsap.registerPlugin(ScrollTrigger);

const HomeApproch = () => {
  const [article, setArticle] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    const percentElements = document.querySelectorAll("[data-percent]");
    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute("data-percent") || "0%";
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll(".skill-bar-single");
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        ".skill-bar-percent"
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        ".percent-value"
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || "0%";

        const axBarTimeline = gsap.timeline({
          defaults: { duration: 2 },
          scrollTrigger: { trigger: element },
        });

        axBarTimeline.fromTo(skillBarPercent, { width: 0 }, { width: target });

        axBarTimeline.from(
          percentValue,
          { textContent: "0%", snap: { textContent: 5 } },
          "<"
        );
      }
    });
  }, []);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  interface ReadMoreProps {
    text: string;
  }

  const ReadMore: React.FC<ReadMoreProps> = ({ text }) => {
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    // Split the text into paragraphs based on line breaks (\n)
    const paragraphs = text.split("\n");

    useEffect(() => {
      const fetchArticle = async () => {
        try {
          const response = await axios.get<ApiResponse>(
            "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=51"
          );
          setArticle(response.data);
        } catch (err) {
          setError("Error fetching article data.");
          console.error(err);
        }
      };

      fetchArticle();
    }, []);

    if (error) {
      return <div>{error}</div>;
    }

    if (!article) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {
          isReadMore
            ? paragraphs
                .slice(0, 1)
                .map((para, index) => <p key={index}>{para}</p>)
            : paragraphs.map((para, index) => <p key={index}>{para}</p>)
        }
        <span onClick={toggleReadMore} className="read-more-btn">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </div>
    );
  };

  return (
    <section className="offer fade-wrapper light">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="agency__content section__content">
              <h2 className="title title-anim">
                {article && article.data[0].article_data.title}
              </h2>
              <div className="paragraph">
                <ReadMore
                  text={article ? article.data[0].article_data.introtext_ : ""}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 approch-right-side">
            <div className="agency__thumb">
              <Image
                style={{ padding: "10px" }}
                src="https://techfluxsolutions.com//web_shop////media//spearhead_243435432////approch-1.png"
                alt="Image"
                className="approch-img"
                priority
                width={600} // specify the width you want
                height={400} // specify the height you want
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeApproch;
