import React from "react";
import Image from "next/image";
import arrow1 from "public/images/projects/Group (6).png";
import arrow3 from "public/images/projects/arrow_bottom.png";
import overview from "public/images/CaseStudy/statistics.png";
import challanges from "public/images/CaseStudy/challenge.png";
import approach from "public/images/CaseStudy/approach.png";
import outcome from "public/images/CaseStudy/results.png";
import conclusion from "public/images/CaseStudy/conclusion.png";
import dia from "public/images/CaseStudy/Diamond Lounge.jpg";


const ProjectBrandingCaseStudy3: React.FC = () => {
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
              <Image src={dia} style={{height:"300px", width:""}} alt="Image" className="unset fade-left" />
                  <h3 className="heading_title">Case Study: Diamond Lounge Brandmark and Colour Palette Implementation
                  </h3>
                  
                  <section className="case-study-overview">
                  <Image src={overview} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4 ">Overview</h4>
                    <p>
                    Development of the Diamond Lounge brandmark and colour palette.
                    </p>
                    <p>
                    Emphasis on a luxurious and professional visual identity.

                    </p>
                    <p>
                    Aimed to ensure consistency across all brand assets.
                    </p>
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img-long" />
                  
                  <section className="case-study-challenge">
                  <Image src={challanges} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Challenge</h4>
                    {/* <ul> */}
                      <p>Need for a clear and consistent brandmark usage across various platforms.</p>
                      <p>Ensuring the brandmark maintains legibility against complex backgrounds.</p>
                      <p>Preventing misuse and misrepresentation of the brandmark by third parties.</p>
                    {/* </ul> */}
                    
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-approach">
                  <Image src={approach} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Our Approach</h4>
                    <h5 className="heading6"><strong>Designing the Brandmark:</strong></h5>
                    <p>
                    Created a modern horizontal wordmark using a harmonious typeface.
                    </p>

                    <p>
                    Established strict guidelines for brandmark usage to maintain integrity.
                    </p>

                    <h5 className="heading6"><strong> Defining Colourways:
                    </strong></h5>
                    <p>
                    Developed six approved colour combinations to showcase versatility.
                    </p>

                    <p>
                    Ensured primary olive green (Pantone 8700 C) served as the focal colour.
                    </p>

                    <h5 className="heading6"><strong> Photography Guidelines:
                    </strong></h5>
                    <p>
                    Implemented rules for placing the brandmark over photography to maintain contrast.
                    </p>

                    <h4 className="heading6"><strong> Misuse Prevention:
                    </strong></h4>
                    <p>
                    Educated brand custodians on the importance of using approved artwork.
                    </p>

                    <p>
                    Highlighted common misuses to prevent deviations from brand standards.
                    </p>


                    <h5 className="heading6"><strong> Colour Palette Development:
                    </strong></h5>
                    <p>
                    Established a primary palette with olive green and copper, complemented by black and white.
                    </p>

                    <p>
                    Created a secondary palette inspired by the Abu Dhabi landscape for events and uniforms.
                    </p>



                   
                   
                   
                  </section>
                  <Image src={arrow1} alt="Brand Development" className="arrow-img-long" />
                  

                  <section className="case-study-outcome">
                  <Image src={outcome} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Outcome</h4>
                    {/* <ul> */}
                      <p>Consistent application of the brandmark across all platforms, reinforcing brand recognition.</p>
                      <p>Improved clarity and legibility of the brandmark in various contexts, enhancing brand visibility.</p>
                      <p>Reduced instances of misuse through clear guidelines and education of stakeholders.</p>
                      <p>A cohesive visual identity that resonates with the target audience, showcasing luxury and sophistication.</p>
                    {/* </ul> */}
                  </section>
                  <Image src={arrow3} alt="Brand Development" className="arrow3-img" />
                  
                  <section className="case-study-conclusion">
                  <Image src={conclusion} style={{}} alt="Image" className="unset fade-left" />
                    <h4 className="heading4">Conclusion</h4>
                    <p>
                    The successful implementation of the Diamond Lounge brandmark and colour palette has resulted in a strong, consistent visual identity. 
                    </p>

                    <p>
                    By addressing challenges with clear guidelines and strategic design choices, the brand effectively communicates its luxurious essence while ensuring brand integrity. 
                    </p>

                    <p>
                    This case demonstrates the importance of thoughtful branding in creating a lasting impression in a competitive market.
                    </p>
                    
                    {/* <p>For more details, visit the <Link href="https://nesma-injazat.com" target="_blank" rel="noopener noreferrer"><span style={{color:"#ff7425"}}> Nesma Injazat Website</span></Link>.</p> */}
                  </section>

                </div>
            </div>
             
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

export default ProjectBrandingCaseStudy3;





