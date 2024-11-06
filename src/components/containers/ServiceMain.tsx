import React, { useEffect,useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLocation, useNavigate } from 'react-router-dom';
import one from "public/images/service/Strategy.png";
import two from "public/images/service/Branding & Creative.png";
import three from "public/images/service/Public Relations (PR).png";
import four from "public/images/service/Content & Digital.png";
import five from "public/images/service/Marketing.png";
import seven from "public/images/service/Advisory Service.jpg";
import eight from "public/images/service/Hospitality.jpg";
import six from "public/images/service/Event.png";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


interface ArticleData {
  id: string;
  title: string;
  alias: string;
  introtext_: string;
  fulltext_: string;
  images: {
    intro_image_link: string;
    intro_image_alt_text: string;
    full_image_link: string;
    full_image_alt_text: string;
  };
}


const ServiceMain = () => {
  const Strategy1 = useRef(null);
  // const Strategy1 = React.createRef();
  const router = useRouter();
  const hash = router.asPath.split("#")[1];
  const [article1, setArticle1] = useState<ArticleData | null>(null);
  const [article2, setArticle2] = useState<ArticleData | null>(null);
  const [article3, setArticle3] = useState<ArticleData | null>(null);
  const [article4, setArticle4] = useState<ArticleData | null>(null);
  const [article5, setArticle5] = useState<ArticleData | null>(null);
  const [article6, setArticle6] = useState<ArticleData | null>(null);
  const [article7, setArticle7] = useState<ArticleData | null>(null);
  const [article8, setArticle8] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);



  // const servicesData = [
  //   {
  //     id: 1,
  //     title: "Strategy",
  //     description: `
  //       - Brand Value Proposition
  //       - Brand Positioning Platforms
  //       - Brand Narrative & Content
  //       - Brand Creative Concept
  //       - Operation Models`,
  //     image: one,
  //     reverse: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Branding & Creative",
  //     description: `
  //       - Brand Creation
  //       - Brand Identity
  //       - Brand Visual Language
  //       - Visual Communications
  //       - Brand Voice & Key Messages`,
  //     image: two,
  //     reverse: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Public Relations (PR)",
  //     description: `
  //       - PR Strategy
  //       - Press Releases
  //       - Campaign Strategy
  //       - Media Relations
  //       - Press Kit`,
  //     image: three,
  //     reverse: false,
  //   },
  //   {
  //     id: 4,
  //     title: 'Content & Digital',
  //     description: `
  //       - Content Design & Creation
  //       - Website Design & Build
  //       - Digital Asset Design
  //       - Social Listening
  //       - Digital Production
  //       - Photography & Videography`,
  //     image: four,
  //     reverse: true,
  //   },
  //   {
  //     id: 5,
  //     title: 'Marketing',
  //     description: `
  //       - Sales & Marketing Strategy
  //       - Interim Sales & Marketing Management
  //       - Communications Strategy
  //       - Campaign Conceptualization & Implementation`,
  //     image: five,
  //     reverse: false,
  //   },
  //   {
  //     id: 6,
  //     title: 'Events',
  //     description: `
  //       - Activation Strategy
  //       - Activation Ideation
  //       - Project Management
  //       - Programming
  //       - Amplification & Implementation`,
  //     image: six,
  //     reverse: true,
  //   },
  //   {
  //     id: 7,
  //     title: 'Advisory Service',
  //     description: `
  //       - Identifying Problems & Opportunities
  //       - Developing Solutions
  //       - Providing Strategies to Improve Performance`,
  //     image: seven,
  //     reverse: false,
  //   },
  //   {
  //     id: 8,
  //     title: 'Hospitality Sales Representation',
  //     description: `
  //       - Identifying Potential Clients
  //       - Developing & Maintaining Client Relationships
  //       - Promoting & Selling Products/Services
  //       - Negotiating Deals & Contracts
  //       - Providing Ongoing Customer Support
  //       - Managing Sales Activities`,
  //     image: eight,
  //     reverse: true,
  //   }

  // ];

  useEffect(() => {
    const fetchArticle1 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=17');
        const articleData = response.data.data[0].article_data;
        setArticle1(articleData);
      } catch (err) {
        setError('Error fetching article 1 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle1();
  }, []);

  // Fetch the second article data (id=18)
  useEffect(() => {
    const fetchArticle2 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=18');
        const articleData = response.data.data[0].article_data;
        setArticle2(articleData);
      } catch (err) {
        setError('Error fetching article 2 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle2();
  }, []);
  useEffect(() => {
    const fetchArticle3 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=19');
        const articleData = response.data.data[0].article_data;
        setArticle3(articleData);
      } catch (err) {
        setError('Error fetching article 3 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle3();
  }, []);
  useEffect(() => {
    const fetchArticle4 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=20');
        const articleData = response.data.data[0].article_data;
        setArticle4(articleData);
      } catch (err) {
        setError('Error fetching article 4 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle4();
  }, []);
  useEffect(() => {
    const fetchArticle5 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=7');
        const articleData = response.data.data[0].article_data;
        setArticle5(articleData);
      } catch (err) {
        setError('Error fetching article 5 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle5();
  }, []);

  useEffect(() => {
    const fetchArticle6 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=21');
        const articleData = response.data.data[0].article_data;
        setArticle6(articleData);
      } catch (err) {
        setError('Error fetching article 6 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle6();
  }, []);

  useEffect(() => {
    const fetchArticle7 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=22');
        const articleData = response.data.data[0].article_data;
        setArticle7(articleData);
      } catch (err) {
        setError('Error fetching article 7 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle7();
  }, []);
  useEffect(() => {
    const fetchArticle8 = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://techfluxsolutions.com/web_shop/app/api_folder/articles.php?id=23');
        const articleData = response.data.data[0].article_data;
        setArticle8(articleData);
      } catch (err) {
        setError('Error fetching article 8 data');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle8();
  }, []);



  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

 
  return (
    <section className="section service-t">


      {/* first container */}

      <section className="image">
        <div className="container1" >
          <div className={`${"section1"} ${"section3"} ${"section23"}`}>
            <span className="head">1</span>
            <h3>
              {/* Strategy */}
              {article1?.introtext_}
              </h3>
            <p className="zx">- Brand Value Proposition <br />
              - Brand Positioning Platforms<br />
              - Brand Narrative & Content<br />
              - Brand Creative Concept<br />
              - Operation Models</p>
          </div>

          <div className={`${"section2"} ${"section23"}`}>
            <Image 
            // src={one}
            src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/Strategy.png" 
            width={400}
            height={400}
            alt="Example" 
            className="section-image1" />
          </div>
        </div>

        {/* second container */}

        <div className="container1" ref={Strategy1}>
          <div className={`${"section2"}  ${"section23"} ${"section1"}`}>
            <Image 
            // src={two} 
            src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/Branding-&-Creative.png"
            width={400}
            height={400}
            alt="Example" 
            className="section-image1" />
          </div>

          <div className={`${"section2"} ${"section3"}`}>
            <span className="head">2</span>
            <h3>
              {/* Branding & Creative */}
              {article2?.introtext_}
            </h3>
            <p className="zx">- Brand Creation<br />
              - Brand Identify<br />
              - Brand Visual Language<br />
              - Visual Communications<br />
              - Brand Voice & Key Messages</p>
          </div>
        </div>

        {/* third container */}

        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section3"}`}>
            <span className="head">3</span>
            <h3>
              {/* Public Relations (PR) */}
              {article3?.introtext_}
              </h3>
            <p className="zx">- PR Strategy<br />
              - Press Releases<br />
              - Campaign Strategy<br />
              - Media Relations<br />
              - Press Kit</p>
          </div>

          <div className={`${"section2"} ${"section23"}`}>
            <Image 
            // src={three}
            src="https:\/\/techfluxsolutions.com\/web_shop\/\/media\/spearhead_243435432\/\/Public-Relations-(PR).png" 
            width={400}
            height={400}
            alt="Example" 
            className="section-image1" />
          </div>
        </div>

        {/* fourth container */}

        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section23"}`}>
            <Image 
            // src={four}
            src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/Content-&-Digital.png" 
            alt="Example"
            width={400}
            height={400} 
            className="section-image1" />
          </div>

          <div className={`${"section2"} ${"section3"}`}>
            <span className="head">4</span>
            <h3>
              {/* Content & Digital */}
              {article4?.introtext_}
              </h3>
            <p className="zx">- Cotent Design & Creation<br />
              - Website Design & Build<br />
              - Digtal Asset Design<br />
              - Social Listening<br />
              -Digital Production<br />
              - Photography & Videography</p>
          </div>
        </div>

        {/* fifth container */}

        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section3"}`}>
            <span className="head">5</span>
            <h3>
              {/* Marketing */}
              {article5?.introtext_}
              </h3>
            <p className="zx">- Sales & Marketing Strategy<br />
              - Interin Sales & Marketing Management<br />
              - Communications Strategy<br />
              - Campaign Conceptualisation & Implemetation</p>
          </div>
          <div className={`${"section1"} ${"section2"} ${"section23"}`}>
            <Image 
            // src={five} 
            src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/Marketing.png"
            width={400}
            height={400}
            alt="Example" 
            className="section-image1" />
          </div>
        </div>

        {/* 6 */}


        <div className="container1">
          <div className={`${"section1"} ${"section2"} ${"section23"}`}>
            <Image 
            // src={six} 
            src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/Event.png"
            width={400}
            height={400}
            alt="Example" 
            className="section-image1" />
          </div>

          <div className={`${"section2"} ${"section3"}`}>
            <span className="head">6</span>
            <h3>
              {/* Events */}
              {article6?.introtext_}
            </h3>
            <p className="zx">-Activation Strategy<br />
              -Activation Ideation<br />
              -Project Management<br />
              -Programming<br />
              -Amplification & Implementation<br />
            </p>
          </div>
        </div>
      </section>

      {/* 7 */}


      <div className="container1">
        <div className={`${"section1"} ${"section2"} ${"section3"}`}>
        <span className="head">7</span>
          <h3>
            {/* Hospitality sales representation */}
            {article7?.introtext_}
            </h3>
          <p className="zx">- Identifying potential clients<br />
            - Developing and maintaining relationships with clients<br />
            - Promoting and selling products or services<br />
            - Negotiating deals and contracts<br />
            - Providing ongoing customer support and service<br />
            - Managing sales activities and tracking progress<br />
            towards goals
            - Attending industry events to network and gather<br />
            market intelligence</p>
        </div>

        <div className={`${"section2"} ${"section23"}`}>
          <Image 
          // src={eight}
          src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/Hospitality.jpg" 
          width={400}
          height={400}
          alt="Example" 
          className="section-image1" />
        </div>
      </div>



      {/* 8 */}

      <div className="container1">
        <div className={`${"section1"} ${"section2"} ${"section23"}`}>
          <Image 
          // src={seven}
          src="https:\/\/techfluxsolutions.com\/web_shop\/media\/spearhead_243435432\/\/Advisory-Service.jpg"
          width={400}
          height={400} 
          alt="Example" 
          className="section-image1" />
        </div>

        <div className={`${"section2"} ${"section3"}`}>
        <span className="head">8</span>
          <h3>
            {/* Advisory Service */}
            {article8?.introtext_}
            </h3>
          <p className="zx">-Identifying problems and opportunities<br />
            - Developing solutions<br />
            - Providing strategies to improve performance</p>
        </div>
      </div>

      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>

    </section>


  //   <section className="section service-t">
  //   {servicesData.map((service) => (
  //     <div className="container1" key={service.id}>
  //       {service.id % 2 === 1 ? (
  //         // Odd ID: Title and Description on the left, Image on the right
  //         <>
  //           <div className={`${"section1"} ${"section3"} ${"section23"}`}>
  //             <span className="head">{service.id}</span>
  //             <h3>{service.title}</h3>
  //             <p className="zx" dangerouslySetInnerHTML={{ __html: service.description }} />
  //           </div>
  //           <div className={`${"section2"} ${"section23"}`}>
  //             <Image src={service.image} alt="Example" className="section-image1" />
  //           </div>
  //         </>
  //       ) : (
  //         // Even ID: Image on the left, Title and Description on the right
  //         <>
  //           <div className={`${"section2"} ${"section23"}`}>
  //             <Image src={service.image} alt="Example" className="section-image1" />
  //           </div>
  //           <div className={`${"section1"} ${"section3"} ${"section23"}`}>
  //             <span className="head">{service.id}</span>
  //             <h3>{service.title}</h3>
  //             <p className="zx" dangerouslySetInnerHTML={{ __html: service.description }} />
  //           </div>
            
  //         </>
  //       )}
  //     </div>
  //   ))}

  //   <div className="slide-group">
  //     <button aria-label="previous item" className="slide-btn prev-service-t">
  //       <i className="fa-light fa-angle-left"></i>
  //     </button>
  //     <button aria-label="next item" className="slide-btn next-service-t">
  //       <i className="fa-light fa-angle-right"></i>
  //     </button>
  //   </div>
    
  // </section>
  );
};

export default ServiceMain;



