import React, { useEffect, useState } from "react";
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

const BrandingCS2 = () => {
    const [hovered, setHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
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
                                    <h3 className="heading_title">Nesma Injazat: A Case Study in Brand Excellence</h3>

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
                                                                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                                    <p>
                                                                        Spearhead Creativity was approached by Nesma Injazat, a leader in the construction and engineering industry, with a vision to redefine their brand identity and solidify their market position. The goal was to create a brand that not only resonated with their target audience but also distinguished them in an increasingly competitive landscape.
                                                                    </p>
                                                                    <p>This case study outlines the strategic process that our team followed to achieve this vision, focusing on brand development, logo design, and website creation. By the end of the project, we were able to deliver a cohesive brand narrative that encapsulated Nesma Injazat's values, mission, and future growth trajectory.</p>

                                                                </Link>
                                                            </h2>
                                                            <div className="offer-thumb-hover d-none d-md-block">
                                                                <Image src={blogthumb} alt="Image" />
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
                                                                Challenge
                                                                <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                                                                <ul>
                                                                    <li><strong>Lack of a distinct brand identity:</strong> Despite their expertise and success in their industry, the company lacked a strong visual and strategic identity that could stand out to clients and partners.</li>
                                                                    <li><strong>Digital presence:</strong> Their online presence was minimal, with a need for a website that would effectively communicate their services and facilitate engagement.</li>
                                                                </ul>
                                                                <p>Our challenge was to translate Nesma Injazat’s vision into a compelling brand that was both modern and timeless, while also developing a functional and visually engaging website to represent their offerings.</p>
                                                            </Link>
                                                        </h2>
                                                        <div className="offer-thumb-hover d-none d-md-block">
                                                            <Image src={challange} alt="Image" />
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
                                                                        We began the project with an in-depth analysis of the market, target audience, and competitors. By aligning our findings with Nesma Injazat’s mission and core values, we were able to establish a clear direction for the brand.
                                                                    </p>
                                                                    <h6 className="heading6"><strong>Logo Design</strong></h6>
                                                                    <p>
                                                                        Our design team worked to create a logo that captured Nesma Injazat’s essence: innovation, integrity, and leadership in the construction and engineering industry.
                                                                    </p>
                                                                    <h6 className="heading6"><strong>Website Design and Development</strong></h6>
                                                                    <p>
                                                                        The goal of the website was to provide a seamless user experience while showcasing Nesma Injazat’s services, projects, and core values. We employed a clean, minimalist design to ensure easy navigation while strategically placing calls-to-action to drive engagement.
                                                                    </p>
                                                            </Link>
                                                        </h2>
                                                        <div className="offer-thumb-hover d-none d-md-block">
                                                            <Image src={approach} alt="Image" />
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
                                                                <h6 className="heading6"><strong>Brand Development and Research</strong></h6>
                                                                <ul>
                                                                    <li><strong>Brand Identity:</strong> The new brand identity was rolled out with a cohesive visual and strategic narrative. Nesma Injazat’s new logo is now prominently displayed across their materials, creating a lasting impact on clients and partners.</li>
                                                                    <li><strong>Website:</strong> The new website saw a significant increase in user engagement, with improved site traffic and client inquiries. The intuitive design and layout improved the overall user experience, leading to better communication of Nesma Injazat’s offerings and values.</li>
                                                                </ul>
                                                            </Link>
                                                        </h2>
                                                        <div className="offer-thumb-hover d-none d-md-block">
                                                            <Image src={result} alt="Image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                </section>
                                <Image src={arrow3} alt="Brand Development" className="arrow3-img" />

                                <section className="case-study-conclusion">
                                    <Image src={conclusion} style={{}} alt="Image" className="unset fade-left" />
                                    <h4 className="heading4">Conclusion</h4>
                                    <p>This project exemplifies Spearhead Creativity’s commitment to delivering excellence in brand development. By partnering with Nesma Injazat, we successfully created a brand and digital platform that will support their growth and reinforce their leadership position in the industry.</p>
                                    <p>For more details, visit the <Link href="https://nesma-injazat.com" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7425" }}> Nesma Injazat Website</span></Link>.</p>
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
