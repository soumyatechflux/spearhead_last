import React from "react";
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

const ProjectBranding: React.FC = () => {
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
    // <section style={styles.container}>
    //   <div style={styles.intro}>
    //     {/* <h1 style={styles.heading}>Our Expertise</h1> */}
    //     <div style={styles.description}>
    //     {/* <Link href="project-one"> */}
    //       <div style={styles.item} className="row">
    //         <div className="col-12 col-lg-6">
    //            <Image src={branding} alt="Brand Development" style={styles.image} />
    //         </div>
             
    //           <div style={styles.content} className="col-12 col-lg-6">
    //             <h2 style={styles.title}>Branding</h2>
    //             <p className="ceo-msg">
    //             Welcome to Spearhead Creativity's Brand Development page, where we transform visions into iconic brands. In the bustling marketplace, a distinct and memorable brand identity is essential.<br/><br/> Our experts at Spearhead Creativity craft and 
    //             refine brand stories that captivate and connect. Whether it’s designing impactful logos or creating a cohesive brand voice, we ensure your business stands out and resonates with your audience. Embark on a branding journey with us and position your company as a leader in your industry.
    //             </p>
    //           </div>
    //       </div>
    //       <div>
    //       <div className="footer__cta text-start mt-5 text-center">
    //             <Link href="project-branding-case-study" className="btn btn--secondary-2 casestudy-button">
    //              Explore Our Work
    //             </Link>
    //           </div>
    //       </div>
    //     {/* </Link> */}
 
        
    //     </div>
    //   </div>
    // </section>
    <section className="section award">
    <div className="container">
      <div className="row gaper align-items-center justify-content-center">
        <div className="row">
          <div className="col-md-6 col-12 d-md-flex align-items-center award__content section__content">
            <h2 className="title title-anim brand-title m-md-0 m-xl-0 mt-4">
              Branding
              </h2>
          </div>
          <div className="award__thumb dir-rtl mt-5 col-md-6 col-12">
            <Image src={branding} style={{height:'350px',width:"100%"}} alt="Image" className="unset fade-left" />
          </div>
        </div>
        <div className="col-12 ">
          <div className="award__content section__content">
           
            {/* <h2 className="title title-anim brand-title">
            Branding
            </h2> */}
            <div className="sakal-paragraph">
               <div className="sakal-animated-paragraph">
                  <p className="sakal-para brand-para" style={{fontSize:"25px"}}>
                  
                  Welcome to Spearhead Creativity's Brand Development page, where we transform visions into iconic brands. In the bustling marketplace, a distinct and memorable brand identity is essential.

                  </p>
                  <p className="sakal-para brand-para" style={{fontSize:"25px"}}>
                  Our experts at Spearhead Creativity craft and 
                              refine brand stories that captivate and connect. Whether it’s designing impactful logos or creating a cohesive brand voice, we ensure your business stands out and resonates with your audience.  Embark on a branding journey with us and position your company as a leader in your industry.
                  </p>
                  
              </div>

            </div>

            <div className="footer__cta text-start mt-5 text-center">
                <Link href="project-branding-case-study" className="btn btn--secondary-2 casestudy-button">
                 Explore Our Work
                </Link>
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

export default ProjectBranding;
