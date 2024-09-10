import React from "react";
import Image from "next/image";
import Link from "next/link";
import hrone from "public/images/projects/hr-one.png";
import hrtwo from "public/images/projects/hr-two.png";
import hrthree from "public/images/projects/hr-three.png";
import hrfour from "public/images/projects/hr-four.png";
import hrfive from "public/images/projects/hr-five.png";
import hrsix from "public/images/projects/hr-six.png";




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
 
        
        </div>
      </div>
    </section>
  );
};

export default ProjectBranding;
