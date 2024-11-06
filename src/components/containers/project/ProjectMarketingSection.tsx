import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif";
import dotlarge from "public/images/agency/dot-large.png";
import marketing from "public/images/projects/marketingjpg.jpg";

interface Article {
  id: string;
  title: string;
  alias: string;
  introtext_: string;
  fulltext_: string;
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
}

// Define the structure of the API response
interface ApiResponse {
  response: boolean;
  success_msg: string;
  error_msg: string;
  data: {
    article_data: Article;
  }[];
}

const ProjectMarketingSection = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=69"
        );

        // Check if response is successful and article data exists
        if (response.data.response && response.data.data.length > 0) {
          const articleData = response.data.data[0].article_data;
          setArticle(articleData);
        } else {
          setError("No article data found.");
        }
      } catch (err) {
        setError("Failed to fetch article data.");
        console.error(err);
      }
    };

    fetchArticle();
  }, []);

  if (error) return <div>Error: {error}</div>;

  if (!article) return <div>Loading...</div>;

  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="row">
            <div className="col-md-6 col-12 d-md-flex align-items-center award__content section__content">
              <h2 className="title title-anim brand-title m-md-0 m-xl-0 mt-4">
                {/* Marketing */}
                {article.introtext_}
              </h2>
            </div>
            <div className="award__thumb dir-rtl mt-5 col-md-6 col-12">
              <Image
                //  src={marketing}
                src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/marketingjpg.jpg"
                height={600}
                width={500}
                alt="Image"
                className="unset fade-left"
              />
            </div>
          </div>
          <div className="col-12  ">
            <div className="award__content section__content">
              <div className="paragraph">
                <div className="animated-paragraph">
                  {/* <p> */}

                  {/* <p className="span" style={{fontSize:"25px"}}> At Spearhead Creativity, we redefine success with cutting-edge Marketing solutions tailored for growth. Effective marketing is key to your business’s flourishing journey.  </p>
                    <p className="span" style={{fontSize:"25px"}}>Our expertise spans digital marketing, SEO, content creation, and PPC campaigns, all crafted with precision to meet your unique goals. With a blend of creativity and data-driven strategies, we ensure your marketing efforts lead to tangible results.  </p> */}
                  <p className="span" style={{ fontSize: "25px" }}>
                    {" "}
                    {article.fulltext_}
                  </p>

                  {/* </p> */}
                </div>
              </div>
              <div className="award__content-meta"></div>
            </div>
          </div>
        </div>
      </div>
      <Image src={glow_star} alt="Image" className="star" />
      <Image src={glow_star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
      <Image src={glow_star} alt="Image" className="star-two" />
    </section>
  );
};

export default ProjectMarketingSection;
