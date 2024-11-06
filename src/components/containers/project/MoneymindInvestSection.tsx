import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import moneymind from "public/images/more/moneymind.png";
import axios from 'axios';


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
    field_data: any[]; // You can define a specific type for field_data if needed
  }[];
}

const MoneymindInvestSection = () => {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchArticle = async (id: number) => {
    try {
      const response = await axios.get<ApiResponse>(`https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=${id}`);
      
      if (response.data.response) {
        setArticle(response.data.data[0].article_data); // Assuming the first item is the one needed
      } else {
        setError(response.data.error_msg || 'Error fetching article');
      }
    } catch (err) {
      setError('An error occurred while fetching the article.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArticle(75);
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

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
              //  src={moneymind}
              src="https://techfluxsolutions.com//web_shop//////////media//spearhead_243435432//moneymind.png"
                height={700}
                width={600}
               alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12  offset-xxl-1">
            <div className="award__content section__content">
             
              <h2 className="title title-anim">
                {/* Moneymind <span>Investment</span> */}
                <span>{article.title}</span>
                
              </h2>
              <div className="money-paragraph">
                 <div className="money-animated-paragraph">
                    <p className="money-para">
                       
                        {/* Welcome to the MoneyMinds Investment Group section of Spearhead Creativity. Based in the thriving financial hub of London, UK, MoneyMinds Investment Group is dedicated to providing innovative investment solutions that cater to a diverse array of clients. Our focus is on delivering strategic financial guidance and investment management services that are both tailored and forward-thinking. */}
                        {article.introtext_}

                    </p>
                    <p className="money-para">
                    {/* As the CEO of MoneyMinds Investment Group, I [Paul Williams] am committed to steering the company towards sustainable growth and excellence. Our team of experts works tirelessly to analyze market trends and craft investment strategies that maximize returns while managing risk. We pride ourselves on our personalized approach to investment, understanding that each client’s needs are unique. */}
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

export default MoneymindInvestSection;
