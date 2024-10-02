import React from "react";
import Image from "next/image";
import arrow1 from "public/images/projects/Group.png";
import arrow3 from "public/images/projects/arrow_bottom.png";
import overview from "public/images/CaseStudy/statistics.png";
import challanges from "public/images/CaseStudy/challenge.png";
import approach from "public/images/CaseStudy/approach.png";
import outcome from "public/images/CaseStudy/results.png";
import conclusion from "public/images/CaseStudy/conclusion.png";
import abu from "public/images/CaseStudy/Airport.jpg";




const ProjectBrandingCaseStudy2: React.FC = () => {
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
             
             <div className="col-12 col-lg-12 my-3 px-md-5">
              
              <div className="case-study-container">
              <Image src={abu} style={{width:"400px"}} alt="Image" className="unset fade-left" />
                  <h3 className="heading_title">Abu Dhabi Airport: A Case Study in Innovative Design and Operational Excellence
                  </h3>
                  
                  <section className="case-study-overview">
                  <Image src={overview} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4 ">Overview</h4>
                    <p>
                    Spearhead Creativity was involved in the pre-opening and launch of Abu Dhabi Airport.
                    </p>
                    <p>
                        Tasked with the design and development of two premium lounges: the Diamond Lounge and Salam Meet and Greet.

                    </p>
                    <p>
                    The goal was to create luxurious, comfortable, and functional spaces that enhance the traveler experience.
                    </p>
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img" />
                  
                  <section className="case-study-challenge">
                  <Image src={challanges} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Challenge</h4>
                    {/* <ul> */}
                      <p><strong>Creating a unique, high-end experience </strong> or passengers while ensuring functionality in a busy airport environment.</p>
                      <p>Integrating <strong>cultural elements with modern design</strong> to reflect Abu Dhabi’s heritage in a contemporary setting.</p>
                    {/* </ul> */}
                    <p>Our challenge was to <strong>meeting tight deadlines</strong>  for the airport's launch, while ensuring top-notch design execution.
                    Developing a design that complements the <strong>exclusive services</strong>  offered, such as the high-end amenities in the Diamond Lounge and the efficiency of the Salam Meet and Greet service.</p>
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-approach">
                  <Image src={approach} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Our Approach</h4>
                    {/* <h6 className="heading6"><strong>Brand Development and Research</strong></h6> */}
                    <p>
                        <strong>Collaborated closely with the pre-opening team </strong> to understand the vision and requirements for the lounges.
                    </p>

                    <p>
                        Focused on creating <strong>welcoming, luxurious spaces </strong> that provide both relaxation and functionality for travelers.
                    </p>

                    <p>
                        Implemented  <strong>bespoke furnishings </strong> and cutting-edge technology to elevate the passenger experience in the <strong>Diamond Lounge.</strong>
                    </p>

                    <p>
                    Designed the  <strong>Salam Meet and Greet  </strong>  service area to provide a <strong>seamless and stress-free journey, </strong> with a focus on creating a serene and efficient environment for passengers.
                    </p>

                    <p>
                    Emphasized <strong> cultural inspiration combined with contemporary design </strong> to make the lounges distinctive.
                    </p>
                   
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img" />
                  

                  <section className="case-study-outcome">
                  <Image src={outcome} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Outcome</h4>
                    {/* <ul> */}
                      <p>uccessfully designed the<strong>Diamond Lounge</strong> as a sophisticated, premium space with world-class amenities, offering travelers a luxurious environment.</p>
                      <p>The <strong>Salam Meet and Greet </strong>  service area became a symbol of efficiency and elegance, ensuring a smooth and memorable passenger experience.</p>
                      <p>Both lounges were well-received and positioned as highlights of the Abu Dhabi Airport, contributing to the overall positive passenger experience.</p>
                      <p>The project was completed within the deadline, showcasing innovative design and operational excellence.</p>
                    {/* </ul> */}
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-conclusion">
                  <Image src={conclusion} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Conclusion</h4>
                    <p>
                        Spearhead Creativity’s work on the Abu Dhabi Airport lounges exemplifies the company’s expertise in <strong>hospitality and travel design.</strong>
                    </p>

                    <p>
                    The project demonstrates our ability to blend <strong>aesthetics with functionality </strong> while maintaining high design standards.
                    </p>

                    <p>
                       It reinforced our reputation for creating  <strong>exceptional environments</strong> that enhance the customer experience, delivering a successful project within the set timelines.
                    </p>
                    
                    {/* <p>For more details, visit the <Link href="https://nesma-injazat.com" target="_blank" rel="noopener noreferrer"><span style={{color:"#ff7425"}}> Nesma Injazat Website</span></Link>.</p> */}
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

export default ProjectBrandingCaseStudy2;





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
