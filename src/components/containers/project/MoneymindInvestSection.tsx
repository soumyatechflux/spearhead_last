import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import glow_star from "public/images/glowing star.gif"; 
import dotlarge from "public/images/agency/dot-large.png";
import moneymind from "public/images/more/moneymind.png";

const MoneymindInvestSection = () => {
    
  return (
    <section className="section award">
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 ">
            <div className="award__thumb dir-rtl mt-5">
              <Image src={moneymind} style={{height:'300px',width:'600px'}} alt="Image" className="unset fade-left" />
            </div>
          </div>
          <div className="col-12  offset-xxl-1">
            <div className="award__content section__content">
             
              <h2 className="title title-anim">
                Moneymind <span>Investment</span>
              </h2>
              <div className="money-paragraph">
                 <div className="money-animated-paragraph">
                    <p className="money-para">
                       
                        Welcome to the MoneyMinds Investment Group section of Spearhead Creativity. Based in the thriving financial hub of London, UK, MoneyMinds Investment Group is dedicated to providing innovative investment solutions that cater to a diverse array of clients. Our focus is on delivering strategic financial guidance and investment management services that are both tailored and forward-thinking.

                    </p>
                    <p className="money-para">
                    As the CEO of MoneyMinds Investment Group, I [Paul Williams] am committed to steering the company towards sustainable growth and excellence. Our team of experts works tirelessly to analyze market trends and craft investment strategies that maximize returns while managing risk. We pride ourselves on our personalized approach to investment, understanding that each client’s needs are unique.

                    </p>

                    <p className="money-para">
                    At MoneyMinds Investment Group, we believe in empowering our clients with the knowledge and resources they need to make informed financial decisions. Join us as we navigate the complexities of the financial world and build a stronger, more prosperous future.
                    </p>
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

export default MoneymindInvestSection;
