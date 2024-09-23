import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import blog1 from "public/images/blog/blog1.jpg";
import blog2 from "public/images/blog/blog2.jpg";
import blog3 from "public/images/blog/blog6.webp";
import blog4 from "public/images/blog/blog7.webp";
import blog5 from "public/images/blog/blog5.webp";
// import blog6 from "public/images/blog/blog5.webp";


gsap.registerPlugin(ScrollTrigger);
const ProjectPRCaseStudy = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section blog-three pb-0 mb-5">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              {/* <span className="sub-title">
                news & Blog
                <i className="fa-solid fa-arrow-right"></i>
              </span> */}
              {/* <h2 className="title title-anim mt-3">what&apos;s new in blog</h2> */}
              <h2 className="title title-anim mt-3">Public Relations</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="blog-three__wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6 scrollable-content" style={{height:'60vh', overflowY:'scroll'}}>
                  <div
                    className="blog-three__single"
                    onMouseEnter={() => setActiveIndex(0)}
                  >
                    <div className="blog__single-content">
                      <h4>
                        <Link href="https://nabd-alhadath.com/archives/41251" target="_blank" className="link">
                        <span className="span-pr">Nabd Al Hadath – </span>Damac Maison Icon City Hotel Apartments in Dubai Welcomes Saudi and Gulf Visitors
                        </Link>
                      </h4>
                      {/* <div className="blog__single-meta">
                        <Link href="blog" className="sub-title">
                          creative
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <p>MARCH 23, 2023</p>
                      </div> */}
                    </div>
                  </div>
                 
               

                  <div className="blog-three__single" onMouseEnter={() => setActiveIndex(3)} >
                    <div className="blog__single-content">
                      <h4>
                        <Link href="https://sanews.sa/13951729/" target="_blank" className="link">
                        <span className="span-pr">Al-Sahat Al-Arabiya Newspaper –</span> AYKON City is Launch By Damac Maison, the largest luxury real estate and Hospitality Project in Dubai
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div className="blog-three__single" onMouseEnter={() => setActiveIndex(4)} >
                    <div className="blog__single-content">
                      <h4>
                        <Link href="https://ainalalam.com/?p=79698" target="_blank" className="link">
                        <span className="span-pr">Ain Al Alam -</span> Damac Maison Icon City Hotel Apartments in Dubai Welcomes Saudi and Gulf Visitors
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div className="blog-three__single" onMouseEnter={() => setActiveIndex(5)} >
                    <div className="blog__single-content">
                      <h4>
                        <Link href="https://ainalalam.com/?p=79702" target="_blank" className="link">
                        <span className="span-pr">Ain Al Alam -</span> AYKON City is Launch By Damac Maison, the largest luxury real estate and Hospitality Project in Dubai
                        </Link>
                      </h4>
                    </div>
                  </div>

                </div>
                <div className="col-12 col-lg-6 ">
                  <div className="blog-three__thumb g-blog-thumb">
                    <div className={ "blog-single-img" + (activeIndex === 0 ? " blog-single-img-active" : " ") }>
                      <Link href="https://nabd-alhadath.com/archives/41251" target="_blank">
                        <Image src={blog1} alt="Image" />
                      </Link>
                    </div>
                    <div
                      className={ "blog-single-img" + (activeIndex === 1 ? " blog-single-img-active" : " ")}>
                      <Link href="https://sanews.sa/13951729/" target="_blank">
                        <Image src={blog2} alt="Image" />
                      </Link>
                    </div>
                    <div className={"blog-single-img" +(activeIndex === 2 ? " blog-single-img-active" : " ")}>
                      <Link href="https://sanews.sa/13951531/" target="_blank">
                        <Image src={blog3} alt="Image" />
                      </Link>
                    </div>
                    <div className={"blog-single-img" +(activeIndex === 3 ? " blog-single-img-active" : " ")}>
                      <Link href="https://sanews.sa/13951729/" target="_blank">
                        <Image src={blog3} alt="Image" />
                      </Link>
                    </div>

                    <div className={"blog-single-img" +(activeIndex === 4 ? " blog-single-img-active" : " ")}>
                      <Link href="https://ainalalam.com/?p=79698" target="_blank">
                        <Image src={blog4} alt="Image" />
                      </Link>
                    </div>

                    <div className={"blog-single-img" +(activeIndex === 5 ? " blog-single-img-active" : " ")}>
                      <Link href="https://ainalalam.com/?p=79702" target="_blank">
                        <Image src={blog5} alt="Image" />
                      </Link>
                    </div>

                    <div className={"blog-single-img" +(activeIndex === 6 ? " blog-single-img-active" : " ")}>
                      <Link href="https://www.thenationalnews.com/business/property/" target="_blank">
                        <Image src={blog5} alt="Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPRCaseStudy;
