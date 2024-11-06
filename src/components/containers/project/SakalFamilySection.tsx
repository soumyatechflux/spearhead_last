import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import sakal from "public/images/more/logo_black.webp";



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
  star: string | null;
  og_title: string;
  og_description: string;
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
    field_data: any[]; // Field data can have its own type if necessary
  }[];
}

const SakalFamilySection = () => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchArticle = async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=76'
      );
      
      if (response.data.response) {
        setArticle(response.data.data[0].article_data); // Assuming the article is the first in the data array
      } else {
        setError(response.data.error_msg || 'Error fetching the article');
      }
    } catch (err) {
      setError('An error occurred while fetching the article.');
      console.error(err);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchArticle();
  }, []);

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  // Handle loading state
  if (!article) {
    return <div>Loading...</div>;
  }
    
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 ">
            <div className="award__thumb dir-rtl mt-5">
              <Image 
              // src={sakal}
              src="https://techfluxsolutions.com//web_shop////media//spearhead_243435432//logo_black.webp"
              height={200}
              width={200}
              alt="Image"
              className="unset fade-left" />
            </div>
          </div>
          <div className="col-12  offset-xxl-1">
            <div className="award__content section__content">
             
              <h2 className="title title-anim">
              {/* SAKAL<span> Group </span> and Family <span>Office</span> */}
              <span>{article.title}</span>
              </h2>
              <div className="sakal-paragraph">
                 <div className="sakal-animated-paragraph">
                    <p className="sakal-para">
                    
                        {/* Welcome to the SAKAL Group and Family Office section of Spearhead Creativity. As a leading global enterprise, the SAKAL Group is synonymous with innovation and excellence, focusing on diverse investment opportunities and strategic partnerships. Our Family Office is dedicated to managing and expanding the group’s portfolio, ensuring sustainable growth and long-term value creation. */}
                        {article.introtext_}
                    </p>
                    <p className="sakal-para">
                    {/* I am Paul Williams, the Managing Partner for the Middle East GCC and Asia, regions marked by rapid economic growth and dynamic business landscapes. In my role, I oversee strategic initiatives, investments, and operations, leveraging local insights to navigate these unique markets. My commitment to excellence and strategic vision ensures that the SAKAL Group continues to thrive and expand its influence across these regions.  */}
                    {article.fulltext_}
                    </p>

                    
                </div>

              </div>
              <div className="award__content-meta">
              </div>
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

export default SakalFamilySection;
