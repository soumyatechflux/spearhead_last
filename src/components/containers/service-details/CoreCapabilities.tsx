import React, { useState, useEffect } from "react";
import Image from 'next/image';
import icon1 from "public/images/capabilities/Icons.svg";
import icon2 from "public/images/capabilities/Icons two.svg";
import icon3 from "public/images/capabilities/Icons three.svg";
import icon4 from "public/images/capabilities/Icons four.svg";
import axios from 'axios';

// Define the shape of the article data
interface ArticleData {
  title: string;
  introtext_: string;
  created_at: string;
}

// Define the shape of the API response
interface ApiResponse {
  response: boolean;
  data: Array<{
    article_data: ArticleData;
  }>;
  error_msg?: string; // optional error message
}

const CoreCapabilities: React.FC = () => {
  const [hover, setHover] = useState<number>(1);
  const [articles, setArticles] = useState<ArticleData[]>([]); // Store multiple articles
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          axios.get<ApiResponse>('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=12'),
          axios.get<ApiResponse>('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=13'),
          axios.get<ApiResponse>('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=14'),
          axios.get<ApiResponse>('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=15'), // New API for ID 15
        ]);

        // Log the full responses for debugging
        console.log(response1.data, response2.data, response3.data, response4.data);

        // Check if all responses are successful
        const articlesData: ArticleData[] = [];
        if (response1.data.response) {
          articlesData.push(response1.data.data[0].article_data);
        } else {
          setError(response1.data.error_msg || 'Unknown error occurred for ID 12');
        }

        if (response2.data.response) {
          articlesData.push(response2.data.data[0].article_data);
        } else {
          setError(response2.data.error_msg || 'Unknown error occurred for ID 13');
        }

        if (response3.data.response) {
          articlesData.push(response3.data.data[0].article_data);
        } else {
          setError(response3.data.error_msg || 'Unknown error occurred for ID 14');
        }

        if (response4.data.response) {
          articlesData.push(response4.data.data[0].article_data);
        } else {
          setError(response4.data.error_msg || 'Unknown error occurred for ID 15');
        }

        setArticles(articlesData); // Set all articles
      } catch (err) {
        // Log the error for debugging
        console.error(err);
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const services = [
    {
      title: articles.length > 0 ? articles[0].title : "",
      icon: icon1,
      description: articles.length > 0 ? articles[0].introtext_ : "",
    },
    {
      title: articles.length > 1 ? articles[1].title : "", 
      icon: icon2,
      description:
        articles.length > 1 ? articles[1].introtext_ : "",
    },
    {
      title: articles.length > 2 ? articles[2].title : "", 
      icon: icon3,
      description:
        articles.length > 2 ? articles[2].introtext_ : "",
    },
    {
      title: articles.length > 3 ? articles[3].title : "", 
      icon: icon4,
      description:
        articles.length > 3 ? articles[3].introtext_ : "",
    },
  ];

  return (
    <section className="section work-steps fade-wrapper">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-12 col-sm-6 col-xl-3" key={index}>
              <div
                className={`work-steps__single fade-top d-flex justify-content-center ${
                  hover === index ? "work-steps__single-active" : ""
                }`}
                onMouseEnter={() => setHover(index)}
              >
                <span>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    className="capabilities-icon"
                  />
                </span>
                <div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
