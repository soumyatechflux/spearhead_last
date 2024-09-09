import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/white-logo.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderThree = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar tertiary--navbar";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                  <Link href="/" aria-label="go to home">
                      <Image src={logo} priority alt="Image" style={{height : '100px', width: '100px', borderRadius:"50%"}} />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade">
                        <Link href="tel:+971 566121551">
                          <i className="fa-sharp fa-solid fa-phone-volume"></i>
                          +971 566121551
                        </Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="mailto:ceo@spearheadcreativity.com ">
                          <i className="fa-sharp fa-solid fa-envelope"></i>
                          ceo@spearheadcreativity.com 
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                      Menu
                    </button>
                    <div className="tertiary-cta d-none d-sm-flex">
                      <div className="navbar__mobile-options">
                        <Link href="contact-us" className="btn btn--secondary">
                          Let&apos;s Talk
                        </Link>
                      </div>
                    </div>

                    <div className="navbar__options1">
                    <button 
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    ></button>
                  </div>

                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderThree;