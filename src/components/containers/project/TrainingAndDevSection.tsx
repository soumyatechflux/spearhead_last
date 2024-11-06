import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import sakal from "public/images/more/sakalwebp.webp";

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
    field_data: any[]; // You can define specific types if needed
  }[];
}


const TrainingAndDevSection = () => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch article data
  const fetchArticle = async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=47'
      );
      
      if (response.data.response) {
        setArticle(response.data.data[0].article_data); // Access the first article in the data array
      } else {
        setError(response.data.error_msg || 'Error fetching the article');
      }
    } catch (err) {
      setError('An error occurred while fetching the article.');
      console.error(err);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchArticle();
  }, []);

  // Handle loading state
  if (!article) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }
    
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 ">
            <div className="award__thumb dir-rtl mt-5">
              {/* <Image src={sakal} style={{height:'300px',width:'600px'}} alt="Image" className="unset fade-left" /> */}
            </div>
          </div>
          <div className="col-12  offset-xxl-1">
            <div className="award__content section__content">
             
              <h2 className="title title-anim">
              {/* Training and<span>  Development </span>  */}
              <span>{article.title}</span>
              </h2>
              <div className="tain-paragraph">
                 <div className="training-animated-paragraph">
                    <p className="training-para">
                        
                        {/* Welcome to the Training and Development section at Spearhead Creativity, where we empower individuals and businesses with the skills needed to excel in the digital age. Our comprehensive training programs cover a wide range of essential areas including SEO, Social Media, Sales, and Communication. */}
                        {article.introtext_}

                    </p>
                    <p>
                    {/* At Spearhead Creativity, we understand that staying ahead in today’s competitive market requires continuous learning and adaptability. Our SEO training demystifies the complexities of search engine optimization, providing actionable insights to enhance online visibility. Our Social Media courses teach you how to effectively build and manage your brand presence across various platforms, fostering deeper engagement with your audience. */}
                    {article.fulltext_}

                    </p>

                    
                </div>

              </div>
              <div className="award__content-meta">
                {/* <div className="single">
                  <h4>2018</h4>
                  <h4>Awwwards</h4>
                  <p>Website of the day</p>
                </div>
                <div className="single">
                  <h4>2020</h4>
                  <h4>Awwwards</h4>
                  <p>National design contest</p>
                </div>
                <div className="single">
                  <h4>2022</h4>
                  <h4>Awwwards</h4>
                  <p>Apps of the day</p>
                </div> */}
              </div>
              {/* <div className="section__content-cta">
                <Link href="about-us" className="btn btn--primary">
                  Know More
                </Link>
              </div> */}
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

export default TrainingAndDevSection;
