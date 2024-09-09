import React from "react";
import Image from "next/image";
import Link from "next/link";
import hrone from "public/images/projects/hr-one.png";
import hrtwo from "public/images/projects/hr-two.png";
import hrthree from "public/images/projects/hr-three.png";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import hrsix from "public/images/projects/hr-six.png";




const ProjectMain: React.FC = () => {
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
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      columnGap: '10rem',
      rowGap:'4rem',
    },
    item: {
      background: '#111', // Slightly lighter black for item background
      // borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Darker shadow for black theme
      display: 'flex',
      flexDirection: 'column' as 'column', 
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
        <Link href="project-one">
          <div style={styles.item}>
              {/* <Image src={hrone} alt="Brand Development" style={styles.image} /> */}
              <div style={styles.content}>
                <h2 style={styles.title}>Branding</h2>
                <p style={styles.text}>
                Welcome to Spearhead Creativity's Brand Development page, where we transform visions into iconic brands. In the bustling marketplace, a distinct and memorable brand identity is essential. Our experts at Spearhead Creativity craft and 
                refine brand stories that captivate and connect. Whether it’s designing impactful logos or creating a cohesive brand voice, we ensure your business stands out and resonates with your audience. Embark on a branding journey with us and position your company as a leader in your industry.
                </p>
              </div>
          </div>
        </Link>
        <Link href="project-single">
          <div style={styles.item}>
              {/* <Image src={hrone} alt="Brand Development" style={styles.image} /> */}
              <div style={styles.content}>
                <h2 style={styles.title}>PR</h2>
                <p style={styles.text}>
                 PR Case Studies page, where we spotlight our innovative approach and successful projects that have captivated audiences and driven results.
                </p>
              </div>
          </div>
        </Link>
        <Link href="project-single">
          <div style={styles.item}>
              {/* <Image src={hrtwo} alt="Social Media" style={styles.image} /> */}
              <div style={styles.content}>
                <h2 style={styles.title}>Social Media</h2>
                <p style={styles.text}>
                Discover the power of social engagement with Spearhead Creativity's Social Media services. We excel in harnessing the dynamic potential of social platforms to amplify your brand’s presence and drive interaction. Our team develops strategic, creative campaigns tailored to platforms like Facebook, Instagram, LinkedIn, and more, ensuring your message is seen by the right audience. Let Spearhead Creativity 
                help you connect, engage, and convert followers into brand advocates through innovative social strategies.
                </p>
              </div>
            </div>
        </Link>
        
        <Link href="project-single">
        <div style={styles.item}>
            {/* <Image src={hrthree} alt="Marketing" style={styles.image} /> */}
            <div style={styles.content}>
              <h2 style={styles.title}>Marketing</h2>
              <p style={styles.text}>
              At Spearhead Creativity, we redefine success with cutting-edge Marketing solutions tailored for growth. Effective marketing is key to your business’s flourishing journey. Our expertise spans digital marketing, SEO, content creation, and PPC campaigns, all crafted with precision to meet your unique goals. With a blend of creativity and data-driven strategies, we ensure your marketing efforts lead to tangible results. 
              Partner with Spearhead Creativity and achieve unparalleled success in today’s competitive digital landscape.
              </p>
            </div>
          </div>
        </Link>

        {/* <Link href="project-single">
        <div style={styles.item}>
            
            <div style={styles.content}>
              <h2 style={styles.title}>Strategy</h2>
              <p style={styles.text}>
                Learn about our custom strategies designed to meet your business objectives and ensure a competitive edge. Our case studies showcase strategic planning and execution that result in sustainable success and measurable results.
              </p>
            </div>
          </div>
        </Link> */}
         
        {/* <Link href="project-single">
        <div style={styles.item}>
            
            <div style={styles.content}>
              <h2 style={styles.title}>Testimonials</h2>
              <p style={styles.text}>
                Hear directly from our satisfied clients about their experiences working with us. Our testimonials illustrate our commitment to excellence and show how we deliver exceptional results and client satisfaction.
              </p>
            </div>
          </div>
        </Link> */}
         
        {/* <Link href="project-single">
        <div style={styles.item}>
            <Image src={hrsix} alt="Events" style={styles.image} />
            <div style={styles.content}>
              <h2 style={styles.title}>Events</h2>
              <p style={styles.text}>
                Experience our event management expertise from planning to execution. Our examples highlight how we create immersive and memorable events that effectively connect brands with their audiences and leave a lasting impression.
              </p>
            </div>
          </div>
        </Link> */}
        
        </div>
      </div>
    </section>
  );
};


export default ProjectMain;
