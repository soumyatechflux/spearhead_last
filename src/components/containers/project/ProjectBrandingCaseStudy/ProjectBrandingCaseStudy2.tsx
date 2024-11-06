import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import arrow1 from "public/images/projects/Group.png";
import arrow3 from "public/images/projects/arrow_bottom.png";
import overview from "public/images/CaseStudy/statistics.png";
import challanges from "public/images/CaseStudy/challenge.png";
import approach from "public/images/CaseStudy/approach.png";
import outcome from "public/images/CaseStudy/results.png";
import conclusion from "public/images/CaseStudy/conclusion.png";
import abu from "public/images/CaseStudy/Airport.jpg";


interface ArticleData {
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
}

interface ApiResponse {
  response: boolean;
  success_msg: string;
  error_msg: string;
  data: Array<{
    article_data: ArticleData;
    field_data: any[];
  }>;
}


const ProjectBrandingCaseStudy2: React.FC = () => {
  const [article30, setArticle30] = useState<ArticleData | null>(null);
  const [article31, setArticle31] = useState<ArticleData | null>(null);
  const [article32, setArticle32] = useState<ArticleData | null>(null);
  const [article33, setArticle33] = useState<ArticleData | null>(null);
  const [article34, setArticle34] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
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
    const fetchArticle30 = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=30');
        setArticle30(response.data.data[0].article_data);
      } catch (err) {
        setError('Error fetching article with id 30');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle30();
  }, []);

  
  useEffect(() => {
    const fetchArticle31 = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=31');
        setArticle31(response.data.data[0].article_data);
      } catch (err) {
        setError('Error fetching article with id 31');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle31();
  }, []);
  useEffect(() => {
    const fetchArticle32 = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=32');
        setArticle32(response.data.data[0].article_data);
      } catch (err) {
        setError('Error fetching article with id 32');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle32();
  }, []);
  useEffect(() => {
    const fetchArticle33 = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=33');
        setArticle33(response.data.data[0].article_data);
      } catch (err) {
        setError('Error fetching article with id 33');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle33();
  }, []);
  useEffect(() => {
    const fetchArticle34 = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=34');
        setArticle34(response.data.data[0].article_data);
      } catch (err) {
        setError('Error fetching article with id 34');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle34();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section style={styles.container}>
      <div style={styles.intro}>
        <div style={styles.description}>
          <div style={styles.item} className="row">
             <div className="col-12 col-lg-12 my-3 px-md-5">
              
              <div className="case-study-container">
              <Image 
              // src={abu}
              src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/Airport.jpg"
            width={500}
            height={400}
             alt="Image" 
             className="unset fade-left" />
                  <h3 className="heading_title">
                    {/* Abu Dhabi Airport: A Case Study in Innovative Design and Operational Excellence */}
                    {article30?.title}
                  </h3>
                  
                  <section className="case-study-overview">
                  <Image
                  //  src={overview}
                  src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/\/\/statistics.png"
                   width={80}
                   height={80} 
                   alt="Image" 
                   className="unset fade-left" />
                    <h4 className="heading4 ">
                      {/* Overview */}
                      {article30?.introtext_}
                      </h4>
                    <p>{article30?.fulltext_}</p>
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img" />
                  
                  <section className="case-study-challenge">
                  <Image
                  //  src={challanges}
                  src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/challenge.png"
                   width={80}
                   height={80}
                   alt="Image" 
                   className="unset fade-left" />
                    <h4 className="heading4">
                      {/* Challenge */}
                      {article31?.introtext_}
                      </h4>
                    {/* <ul> */}
                    <p>{article31?.fulltext_}</p>
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-approach">
                  <Image 
                  // src={approach}
                src="https://techfluxsolutions.com//web_shop//media//spearhead_243435432////approach.png"
                 width={80}
                 height={80}
                 alt="Image" 
                 className="unset fade-left" />
                    <h4 className="heading4">
                      {/* Our Approach */}
                      {article32?.title}
                      </h4>
                   <p>{article32?.introtext_}</p>
                   <p>{article32?.fulltext_}</p>
                   
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img" />
                  

                  <section className="case-study-outcome">
                  <Image 
                  // src={outcome} 
                  src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/results.png"
                  width={80}
                  height={80}
                  alt="Image" 
                  className="unset fade-left" />
                    <h4 className="heading4">
                      {/* Outcome */}
                      {article33?.title}
                      </h4>
                    {/* <ul> */}
                      <p>{article33?.introtext_}</p>
                      <p>{article33?.fulltext_}</p>
                    {/* </ul> */}
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-conclusion">
                  <Image 
                  // src={conclusion} 
                  src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/conclusion.png"
                  width={80}
                  height={80}
                  alt="Image" 
                  className="unset fade-left" />
                    <h4 className="heading4">
                      {/* Conclusion */}
                      {article34?.introtext_}
                      </h4>
                    <p>{article34?.fulltext_}</p>
                    {/* <p>For more details, visit the <Link href="https://nesma-injazat.com" target="_blank" rel="noopener noreferrer"><span style={{color:"#ff7425"}}> Nesma Injazat Website</span></Link>.</p> */}
                  </section>

                </div>
            </div>
          </div>
          <div>
          
          </div>
        {/* </Link> */}
 
        
        </div>
      </div>
    </section>
  );
};

export default ProjectBrandingCaseStudy2;




