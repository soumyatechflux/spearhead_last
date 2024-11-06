import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Constructing mailto link
    const mailtoLink = `mailto:ceo@spearheadcreativity.com?subject=${encodeURIComponent(
      subject
    )}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0AMessage: ${encodeURIComponent(message)}`;

    // Opening mail client with pre-filled data
    window.location.href = mailtoLink;
  };

  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row">
          {/* First Column - Four Boxes */}
          <div className="col-12 col-lg-6 contact-main-box">
            <div className="row contact-box">
              <div className="col-6">
                <div className="contact-m__single topy-tilt fade-top">
                  <div className="thumb">
                    <Image src={phone} alt="Phone Icon" />
                  </div>
                  <div className="content">
                    <h4>Phone & Fax</h4>
                    <p>
                      <Link href="tel:197-90-56-780">
                        Mobile : +197-90-56-780
                      </Link>
                    </p>
                    <p>
                      <Link href="tel:197-90-56-780">
                        Fax : +44-208-1234567
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="contact-m__single topy-tilt fade-top">
                  <div className="thumb">
                    <Image src={mail} alt="Mail Icon" />
                  </div>
                  <div className="content">
                    <h4>Mail Address</h4>
                    <p>
                      <Link href="mailto:ceo@spearheadcreativity.com">
                        ceo@spearheadcreativity.com
                      </Link>
                    </p>
                    <p>
                      <Link href="mailto:ceo@spearheadcreativity.com">
                        ceo@spearheadcreativity.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="contact-m__single topy-tilt fade-top">
                  <div className="thumb">
                    <Image src={location} alt="Location Icon" />
                  </div>
                  <div className="content">
                    <h4>Our Location</h4>
                    <p>
                      <Link
                        href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                        target="_blank"
                      >
                        85 Ketch Harbour Road Bensalem, PA 19020
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="contact-m__single topy-tilt fade-top">
                  <div className="thumb">
                    <Image src={time} alt="Time Icon" />
                  </div>
                  <div className="content">
                    <h4>Office Hour</h4>
                    <p>Sun - Thu 09 am - 06 pm</p>
                    <p>Fri - Sat 4 pm - 10 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - Form */}
          <div className="col-12 col-lg-6 contact-main-box">
            <div className="contact-main__form fade-top">
              <h3>Leave A Message</h3>
              <form onSubmit={handleSubmit} className="section__content-cta">
                <div className="group-wrapper">
                  <div className="group-input">
                    <input
                      type="text"
                      name="name"
                      id="contactName"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="group-input">
                    <input
                      type="email"
                      name="email"
                      id="contactEmail"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="group-input drt">
                  <select
                    className="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option data-display="Subject">Subject</option>
                    <option value="Account">Account</option>
                    <option value="Service">Service</option>
                    <option value="Pricing">Pricing</option>
                    <option value="Support">Support</option>
                  </select>
                </div>
                <div className="group-input">
                  <textarea
                    name="message"
                    id="contactMessage"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="form-cta justify-content-start">
                  <button type="submit" className="btn btn--primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
