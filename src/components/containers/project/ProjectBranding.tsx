import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import hrone from "public/images/projects/hr-one.png";
import hrtwo from "public/images/projects/hr-two.png";
import hrthree from "public/images/projects/hr-three.png";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import hrsix from "public/images/projects/hr-six.png";
import branding from "public/images/projects/branding.jpeg";

import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import axios from "axios";

// Define the structure for the article data
interface Article {
  id: string;
  title: string;
  alias: string;
  introtext_: string;
  fulltext_: string;
  images: {
    intro_image_link: string;
    intro_image_alt_text: string;
    full_image_link: string;
    full_image_alt_text: string;
  };
  created_at: string;
  created_by: string;
  hits: string;
  ordering: string;
  published: string;
}

// Define the structure of the response data
interface ApiResponse {
  response: boolean;
  success_msg: string;
  error_msg: string;
  data: {
    article_data: Article;
  }[];
}

const ProjectBranding: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#000', // Black background
      color: '#fff', // White text
    },
    intro: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#fff', // White text for heading
    },
    description: {
      // display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      columnGap: '10rem',
      rowGap:'4rem',
    },
    item: {
      background: '#111', // Slightly lighter black for item background
      // borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Darker shadow for black theme
      // display: 'flex',
      // flexDirection: 'column' as 'column', 
      height:'100%'
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    content: {
      padding: '2rem',
    },
    title: {
      fontSize: '1.25rem',
      marginBottom: '0.5rem',
      color: '#ff7425', // White text for titles
    },
    text: {
      fontSize: '1rem',
      color: '#ccc', // Light gray text for readability
    },
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=4"
        );
        const articleData = response.data.data[0]?.article_data;
        setArticle(articleData);
      } catch (err) {
        setError("Failed to fetch article data.");
        console.error(err);
      }
    };

    fetchArticle();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <section className="section award">
    <div className="container">
      <div className="row gaper align-items-center justify-content-center">
        <div className="row">
          <div className="col-md-6 col-12 d-md-flex align-items-center award__content section__content">
            {/* <h2 className="title title-anim brand-title m-md-0 m-xl-0 mt-4">
              Branding
              {article.title}
              </h2> */}
              {article && (
                <h2 className="title title-anim brand-title m-md-0 m-xl-0 mt-4">
                  {article.title}
                </h2>
                )}
          </div>
          
          <div className="award__thumb dir-rtl mt-5 col-md-6 col-12">
            <Image
            src="https://techfluxsolutions.com//web_shop//media//spearhead_243435432////branding.jpeg"
            width={500} 
            height={600} 
             alt="Image" 
            className="unset fade-left" />
          </div>
        </div>

         {article && (
            <div className="col-12">
              <div className="award__content section__content">
                <div className="sakal-paragraph">
                  <div className="sakal-animated-paragraph">
                    <p
                      className="sakal-para brand-para"
                      style={{ fontSize: "25px" }}
                    >
                      {article.introtext_}
                    </p>
                    <p
                      className="sakal-para brand-para"
                      style={{ fontSize: "25px" }}
                    >
                      {article.fulltext_}
                    </p>
                  </div>
                </div>

                <div className="footer__cta text-start mt-5 text-center">
                  <Link
                    href="project-branding-case-study"
                    className="btn btn--secondary-2 casestudy-button"
                  >
                    Explore Our Work
                  </Link>
                </div>

                <div className="award__content-meta"></div>
              </div>
            </div>
          )}
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

export default ProjectBranding;
