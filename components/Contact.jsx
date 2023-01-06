import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <section className="contact  h-full md:px-5 px-2" id="contact">
        <div className="max-width">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="column left mb-56 md:mb-2">
              <div className="font-semibold text-3xl">Get in Touch</div>
              <p>
                LAC Global Limited is an international company engaged in a
                diverse investment: Civil Engineering, Digital Waste and
                Drainage Management (GO WASTE Project), Governmental/Private
                Sector Consultation, Broker Services (Food/Non-Food).
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <FaUser size={30} color="#228b22" />
                  <div className="info">
                    <div className="head"></div>
                    <div className="sub-title">LAC GLOBAL</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <FaMapMarkerAlt size={30} color="#228b22" />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">
                      45 Kipling Avenue, RM18 8HF, Tilbury, United Kingdom.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <FaEnvelope size={30} color="#228b22" />
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">info@lacgloballimited.com</div>
                  </div>
                </div>
                <div className="row">
                  <FaPhone size={30} color="#228b22" />
                  <div className="info">
                    <div className="head">Phone</div>
                    <div className="sub-title">
                      +44 7888586489 / +49 15205284562 / +233 552682208
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <form action="https://formspree.io/f/xayvdvdb" method="post">
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                    />
                  </div>

                  <div className="field email">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="field textarea">
                  <textarea
                    cold="30"
                    row="10"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="socials my-5 text-lg text-[#228b22] space-x-5">
          <a
            href="https://twitter.com/Gowaste_App"
            target="blank"
            className="hover:text-black transition-all duration-150 hover:transition-all hover:duration-100"
          >
            {" "}
            <i className="fa fa-twitter"></i>
            <FaTwitter size={35} />
          </a>
          <a
            href="https://www.instagram.com/gowaste_app/"
            target="blank"
            className="hover:text-black transition-all duration-150 hover:transition-all hover:duration-100"
          >
            <i className="fa fa-instagram"></i>
            <FaInstagram size={35} />
          </a>
          <a
            href="https://web.facebook.com/gowasteapp"
            target="blank"
            className="hover:text-black transition-all duration-150 hover:transition-all hover:duration-100"
          >
            {" "}
            <i className="fa fa-facebook"></i>
            <FaFacebook size={35} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCicujWA30ncwWJUzVPN-03Q"
            target="blank"
            className="hover:text-black transition-all duration-150 hover:transition-all hover:duration-100"
          >
            {" "}
            <i className="fa fa-youtube"></i>
            <FaYoutube size={35} />
          </a>
        </div>
      </section>

      <footer>
        <span>Lac Global &copy;2022 All rights Reserved</span>
      </footer>
    </div>
  );
};

export default Contact;
