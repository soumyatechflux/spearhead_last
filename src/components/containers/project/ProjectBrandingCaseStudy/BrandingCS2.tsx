import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import Link from "next/link";
import blogthumb from "public/images/offer/blog-thumb.png";
import arrow3 from "public/images/projects/arrow_bottom.png";
import overview from "public/images/CaseStudy/statistics.png";
import conclusion from "public/images/CaseStudy/conclusion.png";
import approach from "../../../../../public/images/CaseStudy/approach-.png";
import result from "../../../../../public/images/CaseStudy/result_.png";
import challange from "../../../../../public/images/CaseStudy/challange.png";
import arrow1 from "public/images/projects/Group.png";

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
  
  interface FieldData {
    data: string;
  }
  
const BrandingCS2 = () => {
    const [hovered, setHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [article1, setArticle1] = useState<ArticleData | null>(null);
  const [article2, setArticle2] = useState<ArticleData | null>(null);
  const [article3, setArticle3] = useState<ArticleData | null>(null);
  const [article4, setArticle4] = useState<ArticleData | null>(null);
  const [article5, setArticle5] = useState<ArticleData | null>(null);
  const [fieldData1, setFieldData1] = useState<FieldData[]>([]);
  const [fieldData2, setFieldData2] = useState<FieldData[]>([]);
  const [fieldData3, setFieldData3] = useState<FieldData[]>([]);
  const [fieldData4, setFieldData4] = useState<FieldData[]>([]); 
  const [fieldData5, setFieldData5] = useState<FieldData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
            rowGap: '4rem',
        },
        item: {
            background: '#111', // Slightly lighter black for item background
            // borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Darker shadow for black theme
            // display: 'flex',
            // flexDirection: 'column' as 'column', 
            height: '100%'
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
        imageContainer: {
            position: "relative" as "relative",
        },
        hoverImage: {
            display: activeIndex === 0 ? "block" : "none",
            position: "absolute" as "absolute",
            top: "100%",
            left: "0",
            zIndex: -1,
            width: "300px",
            background: "#fff",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",

        },
        // imageContainer: {
        //     display: hovered ? "block" : "none", // Conditional visibility based on hover
        //     marginTop:hovered? "20px" : ""
        //   },
    };
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const caseStudyItems = document.querySelectorAll(".offer__cta-single");
            const deviceWidth = window.innerWidth;

            if (deviceWidth > 576) {
                caseStudyItems.forEach((item) => {
                    const contentBox = item.getBoundingClientRect();
                    const dx = event.clientX - contentBox.x;
                    const dy = event.clientY - contentBox.y;
                    const thirdChild = item.children[2] as HTMLElement;
                    thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleLoadingAndError = () => {
        setLoading(true);
        setError(null);
      };
    
      // Fetch the first article (ID 25)
      useEffect(() => {
        const fetchArticle1 = async () => {
          handleLoadingAndError();
          try {
            const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=25');
            const articleData = response.data.data[0].article_data;
            const fieldDataArray = response.data.data[0].field_data;
    
            setArticle1(articleData);
            setFieldData1(fieldDataArray);
          } catch (err) {
            setError('Error fetching article data for ID 25');
          } finally {
            setLoading(false);
          }
        };
    
        fetchArticle1();
      }, []);
    
      // Fetch the second article (ID 26)
      useEffect(() => {
        const fetchArticle2 = async () => {
          handleLoadingAndError();
          try {
            const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=26');
            const articleData = response.data.data[0].article_data;
            const fieldDataArray = response.data.data[0].field_data;
    
            setArticle2(articleData);
            setFieldData2(fieldDataArray);
          } catch (err) {
            setError('Error fetching article data for ID 26');
          } finally {
            setLoading(false);
          }
        };
    
        fetchArticle2();
      }, []);
    
      // Fetch the third article (ID 27)
      useEffect(() => {
        const fetchArticle3 = async () => {
          handleLoadingAndError();
          try {
            const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=27');
            const articleData = response.data.data[0].article_data;
            const fieldDataArray = response.data.data[0].field_data;
    
            setArticle3(articleData);
            setFieldData3(fieldDataArray);
          } catch (err) {
            setError('Error fetching article data for ID 27');
          } finally {
            setLoading(false);
          }
        };
    
        fetchArticle3();
      }, []);
    
      // Fetch the fourth article (ID 29)
      useEffect(() => {
        const fetchArticle4 = async () => {
          handleLoadingAndError();
          try {
            const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=29');
            const articleData = response.data.data[0].article_data;
            const fieldDataArray = response.data.data[0].field_data;
    
            setArticle4(articleData);
            setFieldData4(fieldDataArray);
          } catch (err) {
            setError('Error fetching article data for ID 29');
          } finally {
            setLoading(false);
          }
        };
    
        fetchArticle4();
      }, []);
      useEffect(() => {
        const fetchArticle5 = async () => {
          handleLoadingAndError();
          try {
            const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=28');
            const articleData = response.data.data[0].article_data;
            const fieldDataArray = response.data.data[0].field_data;
    
            setArticle5(articleData);
            setFieldData5(fieldDataArray);
          } catch (err) {
            setError('Error fetching article data for ID 28');
          } finally {
            setLoading(false);
          }
        };
    
        fetchArticle5();
      }, []);
    
      // Handle loading and error states
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

    return (
        <section className="section offer fade-wrapper light">

            <section style={styles.container}>
                <div style={styles.intro}>
                    {/* <h1 style={styles.heading}>Our Expertise</h1> */}
                    <div style={styles.description}>
                        {/* <Link href="project-one"> */}
                        <div style={styles.item} className="row">
                            {/* <div className="col-12 col-lg-6 d-flex align-items-center">
               <Image src={branding} alt="Brand Development" style={styles.image} />
            </div> */}

                            <div className="col-12 col-lg-12 my-3 px-md-5">

                                <div className="case-study-container">
                                    {/* <Image src={logo} style={{ width: "500px", height: "100px" }} alt="Image" className="unset fade-left" /> */}
                                    <h3 className="heading_title">
                                        {/* Nesma Injazat: A Case Study in Brand Excellence */}
                                        {article1?.title}
                                        </h3>

                                    <section className="case-study-overview">

                                        <section className="section offer fade-wrapper light">
                                            <div className="container">

                                                <div className="row gaper">
                                                    <div className="col-12 col-lg-7 col-xl-6 offset-xl-1"></div>
                                                    <div className="offer__cta">
                                                        <div className="offer__cta-single fade-top">
                                                            <Image src={overview} alt="Overview Icon" style={{ display: "none" }} />
                                                            <h2>
                                                                <Link href="https://nesma-injazat.com" target="_blank">
                                                                    Overview
                                                                    {/* {fieldData1?.length} */}
                                                                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                                    <p>
                                                                        {/* Spearhead Creativity was approached by Nesma Injazat, a leader in the construction and engineering industry, with a vision to redefine their brand identity and solidify their market position. The goal was to create a brand that not only resonated with their target audience but also distinguished them in an increasingly competitive landscape. */}
                                                                        {article1?.introtext_}
                                                                    </p>
                                                                    <p>
                                                                    {article1?.fulltext_ }
                                                                    </p>

                                                                </Link>
                                                            </h2>
                                                            <div className="offer-thumb-hover d-none d-md-block">
                                                                <Image 
                                                                // src={blogthumb}
                                                                src="https://techfluxsolutions.com//web_shop////media//spearhead_243435432//blog-thumb.png"
                                                                width={100}
                                                                height={100} 
                                                                alt="Image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                           
                                        </section>
                                    </section>
                                    <Image src={arrow1} alt="Brand Development" className="arrow-img" />




                                </div>

                                <section className="case-study-challenge">
                    
                                    <section className="section offer fade-wrapper light">
                                        <div className="container">

                                            <div className="row gaper">
                                                <div className="col-12 col-lg-7 col-xl-6 offset-xl-1"></div>
                                                <div className="offer__cta">
                                                    <div className="offer__cta-single fade-top">
                                                        <Image src={overview} alt="Overview Icon" style={{ display: "none" }} />
                                                        <h2>
                                                            <Link href="https://nesma-injazat.com" target="_blank">
                                                                {/* Challenge */}
                                                                {article2?.title}
                                                                <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                                <ul>
                                                                    {/* <li><strong>Lack of a distinct brand identity:</strong> Despite their expertise and success in their industry, the company lacked a strong visual and strategic identity that could stand out to clients and partners.</li>
                                                                    <li><strong>Digital presence:</strong> Their online presence was minimal, with a need for a website that would effectively communicate their services and facilitate engagement.</li> */}
                                                                </ul>
                                                                <p>
                                                                {article2?.introtext_}
                                                                </p>
                                                                <p>
                                                                {/* {article2?.fulltext_} */}
                                                                {article2?.fulltext_ && <div dangerouslySetInnerHTML={{ __html: article2?.fulltext_ }} />}
                                                                </p>
                                                            </Link>
                                                        </h2>
                                                        <div className="offer-thumb-hover d-none d-md-block">
                                                            <Image 
                                                            // src={challange} 
                                                            src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/challange.png"
                                                            width={100}
                                                            height={100}
                                                            alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                  
                                </section>
                                <Image src={arrow3} alt="Brand Development" className="arrow3-img" />



                                <section className="case-study-approach">
                                   
                                    <section className="section offer fade-wrapper light">
                                        <div className="container">

                                            <div className="row gaper">
                                                <div className="col-12 col-lg-7 col-xl-6 offset-xl-1"></div>
                                                <div className="offer__cta">
                                                    <div className="offer__cta-single fade-top">
                                                        <Image src={overview} alt="Overview Icon" style={{ display: "none" }} />
                                                        <h2>
                                                            <Link href="https://nesma-injazat.com/scope-of-services/" target="_blank">
                                                                Our Approach
                                                                <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                                <h6 className="heading6"><strong>Brand Development and Research</strong></h6>
                                                                    <p>
                                                                        {/* We began the project with an in-depth analysis of the market, target audience, and competitors. By aligning our findings with Nesma Injazat’s mission and core values, we were able to establish a clear direction for the brand. */}
                                                                        {article3?.introtext_}
                                                                    </p>
                                                                    {/* <h6 className="heading6"><strong>Logo Design</strong></h6>
                                                                    <p>
                                                                        Our design team worked to create a logo that captured Nesma Injazat’s essence: innovation, integrity, and leadership in the construction and engineering industry.
                                                                    </p>
                                                                    <h6 className="heading6"><strong>Website Design and Development</strong></h6>
                                                                    <p>
                                                                        The goal of the website was to provide a seamless user experience while showcasing Nesma Injazat’s services, projects, and core values. We employed a clean, minimalist design to ensure easy navigation while strategically placing calls-to-action to drive engagement.
                                                                    </p> */}
                                                                    <p>
                                                                    {article3?.fulltext_}
                                                                    </p>
                                                            </Link>
                                                        </h2>
                                                        <div className="offer-thumb-hover d-none d-md-block">
                                                            <Image 
                                                            // src={approach} 
                                                            src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/approach-.png"
                                                            width={100}
                                                            height={100}
                                                            alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                </section>
                                <Image src={arrow1} alt="Brand Development" className="arrow-img" />
                                 <section className="case-study-outcome">
                                    
                                    <section className="section offer fade-wrapper light">
                                        <div className="container">

                                            <div className="row gaper">
                                                <div className="col-12 col-lg-7 col-xl-6 offset-xl-1"></div>
                                                <div className="offer__cta">
                                                    <div className="offer__cta-single fade-top">
                                                        <Image src={overview} alt="Overview Icon" style={{ display: "none" }} />
                                                        <h2>
                                                            <Link href="https://nesma-injazat.com/scope-of-services/" target="_blank">
                                                                 Outcome
                                                                <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                                <h6 className="heading6"><strong>
                                                                    {/* Brand Development and Research */}
                                                                    {article5?.introtext_}
                                                                    </strong></h6>
                                                                {/* <ul>
                                                                    <li><strong>Brand Identity:</strong> The new brand identity was rolled out with a cohesive visual and strategic narrative. Nesma Injazat’s new logo is now prominently displayed across their materials, creating a lasting impact on clients and partners.</li>
                                                                    <li><strong>Website:</strong> The new website saw a significant increase in user engagement, with improved site traffic and client inquiries. The intuitive design and layout improved the overall user experience, leading to better communication of Nesma Injazat’s offerings and values.</li>
                                                                </ul> */}
                                                                <p>
                                                                {article5?.fulltext_ }
                                                                </p>
                                                            </Link>
                                                        </h2>
                                                        <div className="offer-thumb-hover d-none d-md-block">
                                                            <Image 
                                                            // src={result} 
                                                            src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/result_.png"
                                                            width={100}
                                                            height={100}
                                                            alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                </section>
                                <Image src={arrow3} alt="Brand Development" className="arrow3-img" />

                                <section className="case-study-conclusion">
                                    <Image 
                                    src={conclusion} 
                                    style={{}} alt="Image" 
                                    className="unset fade-left" />
                                    <h4 className="heading4">Conclusion</h4>
                                    <p>
                                        {/* This project exemplifies Spearhead Creativity’s commitment to delivering excellence in brand development. By partnering with Nesma Injazat, we successfully created a brand and digital platform that will support their growth and reinforce their leadership position in the industry. */}
                                        {article4?.introtext_}
                                    </p>                                    
                                        <p>
                                            {/* For more details, visit the  */}
                                            {article4?.fulltext_ }
                                            <Link href="https://nesma-injazat.com" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7425" }}> Nesma Injazat Website</span></Link>.</p>
                                </section>

                            </div>
                        </div>



                    </div>
                    <div>

                    </div>



                </div>

            </section>

        </section>
    );
};

export default BrandingCS2;
