import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Londan from "public/images/AdvisoryService/one.jpg";
import paris from "public/images/AdvisoryService/two.jpg";
import dubai from "public/images/AdvisoryService/three.jpg";
import four from "public/images/AdvisoryService/four.jpg";
import five from "public/images/AdvisoryService/five.jpg";
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
}

const OurMission = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [article41, setArticle41] = useState<ArticleData | null>(null);
  const [article42, setArticle42] = useState<ArticleData | null>(null);
  const [article43, setArticle43] = useState<ArticleData | null>(null);
  const [article44, setArticle44] = useState<ArticleData | null>(null);
  const [article45, setArticle45] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }
    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const fetchArticle41 = async () => {
      try {
        const response = await axios.get(
          'https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=41'
        );
        if (response.data.response) {
          setArticle41(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg || 'Data not found for article 41');
        }
      } catch (err) {
        setError('Failed to fetch article 41');
      } finally {
        setLoading(false); // Update loading after first call
      }
    };

    fetchArticle41();
  }, []);

  useEffect(() => {
    const fetchArticle42 = async () => {
      try {
        const response = await axios.get(
          'https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=42'
        );
        if (response.data.response) {
          setArticle42(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg || 'Data not found for article 42');
        }
      } catch (err) {
        setError('Failed to fetch article 42');
      } finally {
        setLoading(false); // Update loading after second call
      }
    };

    fetchArticle42();
  }, []);

  useEffect(() => {
    const fetchArticle43 = async () => {
      try {
        const response = await axios.get(
          'https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=43'
        );
        if (response.data.response) {
          setArticle43(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg || 'Data not found for article 43');
        }
      } catch (err) {
        setError('Failed to fetch article 43');
      } finally {
        setLoading(false); // Update loading after third call
      }
    };

    fetchArticle43();
  }, []);
  useEffect(() => {
    const fetchArticle44 = async () => {
      try {
        const response = await axios.get(
          'https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=44'
        );
        if (response.data.response) {
          setArticle44(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg || 'Data not found for article 44');
        }
      } catch (err) {
        setError('Failed to fetch article 44');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle44();
  }, []);
  useEffect(() => {
    const fetchArticle45 = async () => {
      try {
        const response = await axios.get(
          'https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=45'
        );
        if (response.data.response) {
          setArticle45(response.data.data[0].article_data);
        } else {
          setError(response.data.error_msg || 'Data not found for article 45');
        }
      } catch (err) {
        setError('Failed to fetch article 45');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle45();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12"></div>
        </div>

        <div className="row gaper">
          <div className="col-12 col-lg-6 text-section">
            <div className="mission-s__single mission-s__single--alt fade-top ">
              <h3
                ref={elementRef}
                className={`typing-animation ${
                  isVisible ? "typing-start" : ""
                }`}
              >
                {/* Creative Strategy Development */}
                {article41?.title}
              </h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  {article41?.introtext_}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 image-section">
            <div className="mission-s__single fade-top">
              <Image
                src="https://techfluxsolutions.com//web_shop//media//spearhead_243435432//Advisory-Service.jpg"
                alt="Image"
                className="adv-img"
                width={800}
                height={800}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 image-section">
            <div className="mission-s__single fade-top">
              <Image
                // src={Londan}
                src="https://techfluxsolutions.com//web_shop//media//spearhead_243435432////one.jpg"
                alt="Image"
                className="adv-img"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 text-section">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3
                ref={elementRef}
                className={`typing-animation ${
                  isVisible ? "typing-start" : ""
                }`}
              >
                {/* Ideation Workshops */}
                {article42?.title}
              </h3>
              <div className="section__content-cta">
                <p className="primary-text">
                {article42?.introtext_}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-section">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3
                ref={elementRef}
                className={`typing-animation ${
                  isVisible ? "typing-start" : ""
                }`}
              >
                {article43?.title}
              </h3>
              <div className="section__content-cta">
                <p className="primary-text">
              {article43?.introtext_}
              </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 image-section">
            <div className="mission-s__single fade-top">
              <Image
                // src={paris}
                src="https://techfluxsolutions.com//web_shop//media//spearhead_243435432////two.jpg"
                alt="Image"
                className="adv-img"
               width={1000}
               height={1000}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 image-section">
            <div className="mission-s__single fade-top">
              <Image
                // src={four}
                src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/four.jpg"
                alt="Image"
                className="adv-img"
               width={1000}
               height={1000}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 text-section">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3
                ref={elementRef}
                className={`typing-animation ${
                  isVisible ? "typing-start" : ""
                }`}
              >
                {article44?.title}
              </h3>
              <div className="section__content-cta">
                <p className="primary-text">
                {article44?.introtext_}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-section">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3
                ref={elementRef}
                className={`typing-animation ${
                  isVisible ? "typing-start" : ""
                }`}
              >
               {article45?.title}
              </h3>
              <div className="section__content-cta">
                <p className="primary-text">
                {article45?.introtext_}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 image-section">
            <div className="mission-s__single fade-top">
              <Image
                // src={five}
                src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/five.jpg"
                alt="Image"
                className="adv-img"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

