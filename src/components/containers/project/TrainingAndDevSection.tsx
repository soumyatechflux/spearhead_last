import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import sakal from "public/images/more/sakalwebp.webp";

const TrainingAndDevSection = () => {
    
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 ">
            <div className="award__thumb dir-rtl mt-5">
              {/* <Image src={sakal} style={{height:'300px',width:'600px'}} alt="Image" className="unset fade-left" /> */}
            </div>
          </div>
          <div className="col-12  offset-xxl-1">
            <div className="award__content section__content">
             
              <h2 className="title title-anim">
              Training and<span>  Development </span> 
              </h2>
              <div className="tain-paragraph">
                 <div className="training-animated-paragraph">
                    <p className="training-para">
                        
                        Welcome to the Training and Development section at Spearhead Creativity, where we empower individuals and businesses with the skills needed to excel in the digital age. Our comprehensive training programs cover a wide range of essential areas including SEO, Social Media, Sales, and Communication.

                    </p>
                    <p>
                    At Spearhead Creativity, we understand that staying ahead in today’s competitive market requires continuous learning and adaptability. Our SEO training demystifies the complexities of search engine optimization, providing actionable insights to enhance online visibility. Our Social Media courses teach you how to effectively build and manage your brand presence across various platforms, fostering deeper engagement with your audience.

                    </p>

                    <p>
                    Our Sales training is designed to refine your approach, equipping you with strategies to drive results and close deals efficiently. Meanwhile, our Communication training focuses on enhancing interpersonal skills, ensuring you can convey messages clearly and persuasively, whether you're networking, negotiating, or leading a team.
                    </p>

                    <p>Led by industry experts, our training sessions are interactive and personalized, ensuring you gain the practical skills needed to thrive. Join us at Spearhead Creativity to boost your professional growth and elevate your career or business to new heights.</p>
                </div>

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

export default TrainingAndDevSection;
