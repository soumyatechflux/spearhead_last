import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import social_media from "public/images/projects/social-media.webp";



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


const ProjectSocialMedia = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=6"
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
              {article.title}
              </h2>
            </div>
            <div className="award__thumb dir-rtl mt-5 col-md-6 col-12">
              <Image 
              // src={social_media}
              src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/social-media.webp"
              height={600}
              width={500}
              alt="Image" 
              className="unset fade-left" />
            </div>
          </div>
          <div className="col-12  ">
            <div className="award__content section__content">
              <div className="paragraph">
                 <div className="animated-paragraph">
                        {/* <p className="span" style={{fontSize:"25px"}}>Discover the power of social engagement with Spearhead Creativity's Social Media services. </p>
                        <p className="span" style={{fontSize:"25px"}}>We excel in harnessing the dynamic potential of social platforms to amplify your brand’s presence and drive interaction. </p>
                        <p className="span" style={{fontSize:"25px"}}>Our team develops strategic, creative campaigns tailored to platforms like Facebook, Instagram, LinkedIn, and more, ensuring your message is seen by the right audience. </p>
                        <p className="span" style={{fontSize:"25px"}}>Let Spearhead Creativity help you connect, engage, and convert followers into brand advocates through innovative social strategies.</p> */}
                        <p className="span" style={{fontSize:"25px"}}> {article.introtext_}</p>
                </div>

              </div>
              
              <div className="footer__cta text-start mt-5 text-center">
                <Link href="project-social-media-case-study" className="btn btn--secondary-2 casestudy-button">
                 Explore Our Work
                </Link>
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

export default ProjectSocialMedia;
