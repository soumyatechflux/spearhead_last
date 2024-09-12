import React from "react";
import Image from "next/image";
import Link from "next/link";
import hrone from "public/images/projects/hr-one.png";
import hrtwo from "public/images/projects/hr-two.png";
import hrthree from "public/images/projects/hr-three.png";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import arrow1 from "public/images/projects/Group.png";
import arrow2 from "public/images/projects/Group_.png";
import arrow3 from "public/images/projects/arrow_bottom.png";
import branding from "public/images/projects/branding.jpeg";



const ProjectBrandingCaseStudy: React.FC = () => {
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
  return (
    <section style={styles.container}>
      <div style={styles.intro}>
        {/* <h1 style={styles.heading}>Our Expertise</h1> */}
        <div style={styles.description}>
        {/* <Link href="project-one"> */}
          <div style={styles.item} className="row">
            {/* <div className="col-12 col-lg-6 d-flex align-items-center">
               <Image src={branding} alt="Brand Development" style={styles.image} />
            </div> */}
             
            <div className="col-12 col-lg-12 box-border">
              
              <div className="case-study-container">
                  <h3 className="heading_title">Nesma Injazat: A Case Study in Brand Excellence</h3>
                  
                  <section className="case-study-overview">
                    <h4 className="heading4 ">Overview</h4>
                    <p>
                      Spearhead Creativity was approached by Nesma Injazat, a leader in the construction and engineering industry, with a vision to redefine their brand identity and solidify their market position. The goal was to create a brand that not only resonated with their target audience but also distinguished them in an increasingly competitive landscape.
                    </p>
                    <p>This case study outlines the strategic process that our team followed to achieve this vision, focusing on brand development, logo design, and website creation. By the end of the project, we were able to deliver a cohesive brand narrative that encapsulated Nesma Injazat's values, mission, and future growth trajectory.</p>
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img" />
                  
                  <section className="case-study-challenge">
                    <h4 className="heading4">Challenge</h4>
                    <ul>
                      <li><strong>Lack of a distinct brand identity:</strong> Despite their expertise and success in their industry, the company lacked a strong visual and strategic identity that could stand out to clients and partners.</li>
                      <li><strong>Digital presence:</strong> Their online presence was minimal, with a need for a website that would effectively communicate their services and facilitate engagement.</li>
                    </ul>
                    <p>Our challenge was to translate Nesma Injazat’s vision into a compelling brand that was both modern and timeless, while also developing a functional and visually engaging website to represent their offerings.</p>
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-approach">
                    <h4 className="heading4">Our Approach</h4>
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
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img" />
                  

                  <section className="case-study-outcome">
                    <h4 className="heading4">Outcome</h4>
                    <ul>
                      <li><strong>Brand Identity:</strong> The new brand identity was rolled out with a cohesive visual and strategic narrative. Nesma Injazat’s new logo is now prominently displayed across their materials, creating a lasting impact on clients and partners.</li>
                      <li><strong>Website:</strong> The new website saw a significant increase in user engagement, with improved site traffic and client inquiries. The intuitive design and layout improved the overall user experience, leading to better communication of Nesma Injazat’s offerings and values.</li>
                    </ul>
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-conclusion">
                    <h4 className="heading4">Conclusion</h4>
                    <p>This project exemplifies Spearhead Creativity’s commitment to delivering excellence in brand development. By partnering with Nesma Injazat, we successfully created a brand and digital platform that will support their growth and reinforce their leadership position in the industry.</p>
                    <p>For more details, visit the <Link href="https://nesma-injazat.com" target="_blank" rel="noopener noreferrer">Nesma Injazat Website</Link>.</p>
                  </section>

                </div>
            </div>

            {/* <div className="col-12 col-lg-6 box-border">
           
                   <h4 className="heading">Abu Dhabi Airport: A Case Study in Innovative Design and Operational Excellence</h4> 
                   <p className="case-study-align">
                    At Spearhead Creativity, we are thrilled to share our integral role in the successful pre-opening and launch of the Abu Dhabi Airport, including the design and development of two exclusive lounges—the Diamond Lounge and Salam Meet and Greet.
                   Collaborating with the Pre-Opening Team

                   Our journey began by partnering with the pre-opening team of Abu Dhabi Airport. Tasked with creating a welcoming atmosphere for travelers, we focused on blending architectural elegance with functional design to enhance the overall passenger experience. Our commitment to excellence ensured that every detail was meticulously planned and executed.

                   Designing the Diamond Lounge and Salam Meet and Greet

                  Spearhead Creativity was entrusted with crafting the interiors of the Diamond Lounge and the Salam Meet and Greet, spaces that embody luxury and comfort. The Diamond Lounge, designed to offer premium services to exclusive travelers, features sophisticated interiors with bespoke furnishings and state-of-the-art amenities. Meanwhile, the Salam Meet and Greet service provides a seamless, efficient, and memorable journey for passengers, underscored by a welcoming and serene aesthetic.

                   Showcasing Design Ingenuity

                  These lounges are not just waiting areas; they are sanctuaries of relaxation and style, designed with the modern traveler in mind. The design elements we implemented reflect a balance of cultural inspiration and contemporary design, positioning them as highlights of the Abu Dhabi Airport experience.

                   Our work on this project exemplifies the innovative design and strategic planning that Spearhead Creativity brings to each venture. It stands as a proud example of our ability to deliver exceptional environments that enhance the traveler experience, reinforcing our reputation as leaders in creative design specialized in the hospitality and travel sectors.
                </p>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center">
               <Image src={branding} alt="Brand Development" style={styles.image} />
            </div> */}
             
          </div>
          <div>
          {/* <div className="footer__cta text-start mt-5 text-center">
                <Link href="project-branding-case-study" className="btn btn--secondary-2">
                 Our Case Study
                </Link>
              </div> */}
          </div>
        {/* </Link> */}
 
        
        </div>
      </div>
    </section>
  );
};

export default ProjectBrandingCaseStudy;





// import React, { useState, useEffect } from "react";

// const ProjectBrandingCaseStudy = () => {


//   return (
//     <>
//     <div className="container">
//         <div className="row">
//             <div className="col-6 box-border">
//                 <p>
//                 <h4 className="heading">Nesma Injazat: A Case Study in Brand Excellence</h4>

//                     At Spearhead Creativity, we take immense pride in our role as the architects behind the Nesma Injazat brand. Our team embarked on a collaborative journey to build a brand that not only resonates with its target audience but also stands out in the competitive marketplace. 

//                     Brand Development and Logo Design

//                     Nesma Injazat came to us with a vision to establish themselves as a leader in their industry, and our mission was clear: to translate this vision into a compelling brand identity. Our brand development process began with in-depth research and strategic planning, allowing us to create a strong, cohesive brand narrative. The logo we designed for Nesma Injazat encapsulates their core values and mission, with a modern and memorable aesthetic that embodies their commitment to innovation and excellence.

//                     Website Design and Development

//                     Spearhead Creativity also had the privilege of designing and developing the Nesma Injazat website. Our team focused on creating a user-friendly and visually striking digital platform that provides an excellent user experience. The website is tailored to effectively communicate Nesma Injazat's unique offerings and facilitate engagement with their audience through seamless navigation and strategically crafted content.

//                     This project stands as a testament to the creative expertise and strategic thinking our team brings to every project. At Spearhead Creativity, we are proud to have partnered with Nesma Injazat and to showcase this collaboration as a prime example of our commitment to branding excellence.
//                 </p>
//             </div>

//             <div className="col-6 box-border">
//             <p>
//                    <h4 className="heading">Abu Dhabi Airport: A Case Study in Innovative Design and Operational Excellence</h4> 

//                     At Spearhead Creativity, we are thrilled to share our integral role in the successful pre-opening and launch of the Abu Dhabi Airport, including the design and development of two exclusive lounges—the Diamond Lounge and Salam Meet and Greet.

//                     Collaborating with the Pre-Opening Team

//                     Our journey began by partnering with the pre-opening team of Abu Dhabi Airport. Tasked with creating a welcoming atmosphere for travelers, we focused on blending architectural elegance with functional design to enhance the overall passenger experience. Our commitment to excellence ensured that every detail was meticulously planned and executed.

//                     Designing the Diamond Lounge and Salam Meet and Greet

//                     Spearhead Creativity was entrusted with crafting the interiors of the Diamond Lounge and the Salam Meet and Greet, spaces that embody luxury and comfort. The Diamond Lounge, designed to offer premium services to exclusive travelers, features sophisticated interiors with bespoke furnishings and state-of-the-art amenities. Meanwhile, the Salam Meet and Greet service provides a seamless, efficient, and memorable journey for passengers, underscored by a welcoming and serene aesthetic.

//                     Showcasing Design Ingenuity

//                     These lounges are not just waiting areas; they are sanctuaries of relaxation and style, designed with the modern traveler in mind. The design elements we implemented reflect a balance of cultural inspiration and contemporary design, positioning them as highlights of the Abu Dhabi Airport experience.

//                     Our work on this project exemplifies the innovative design and strategic planning that Spearhead Creativity brings to each venture. It stands as a proud example of our ability to deliver exceptional environments that enhance the traveler experience, reinforcing our reputation as leaders in creative design specialized in the hospitality and travel sectors.
//                 </p>
//             </div>
                
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectBrandingCaseStudy;
