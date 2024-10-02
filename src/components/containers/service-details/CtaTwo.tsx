import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CtaTwo = () => {
  const router = useRouter();

  // Define topics for each route
  const getTopic = () => {
    switch (router.pathname) {
      case '/about-us':
        return "About Us";
      case '/our-services':
        return "Core Capabilities";
      case '/service-single':
        return "Scope of Services";
      case '/project-branding':
        return "Branding";
      case '/project-branding-case-study':
        return "Branding";
      case '/project-PR':
        return "PR";
      case '/project-PR-case-study':
        return "PR";
      case '/project-social-media':
        return "Social Media";
      case '/project-social-media-case-study':
        return "Social Media";
      case '/project-marketing':
        return "Marketing";
      case '/more-advisaory':
        return "Advisory Services";
      case '/monymind-investment':
        return "Moneymind Investment";
      case '/sakal-family-office':
        return "Sakal Family Office";
      case '/more-training-dev':
        return "Training and Development";
      case '/client-feedback':
        return "Testimonials";
      case '/contact':
        return "Contact Us";
      default:
        return "Our Offerings";
    }
  };

  return (
    <section className="cta-two my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11 ">
            <div
              className="cta-two-wrapper bg-img"
              style={{ backgroundImage: "url('/images/cta-two-bg.png')" }}
            >
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-two__content">
                    {/* <span>Hello !</span> */}
                    <h2 className="title-anim">
                      More about <span style={{color:"#ff7425"}}>{getTopic()}</span>  please get in touch  
                    </h2>
                    {/* <h5>
                      <Link href="tel:19-3265-003-420">
                        Call: +19 3265 003 420
                      </Link>
                    </h5> */}
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-start text-lg-end">
                    <Link 
                      href="https://wa.me/971566121551" // Replace with your WhatsApp number
                      className="btn btn--tertiary px-5 py-3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      get in touch 
                      <i className="fa-brands fa-whatsapp" style={{ marginLeft: '8px',fontSize:"30px" }}></i>
                    </Link>
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

export default CtaTwo;
