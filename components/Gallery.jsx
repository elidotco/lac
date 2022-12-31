/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import sanityClient, { urlFor } from "../sanity";
import { Tip } from "./Tip";

// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
   *[_type == "gallery"]{
     ...,
   
     
   }`
      )
      .then((data) => {
        console.log(data);
        setGallery(data);
      });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 10,
  };
  return (
    <div className="relative">
      <section id="portfolio" class="portfolio">
        <div class="max-width">
          <div className="flex items-center justify-center text-4xl font-bold">
            <h2 class="mx-auto">Gallery</h2>
          </div>
          <div class="main">
            <div class="gallery" id="gallery">
              {gallery.map((im) => {
                return (
                  <div class="img" key={im.title}>
                    <a href={urlFor(im.mainImage).url()}>
                      <img
                        src={urlFor(im.mainImage).url()}
                        className="image"
                        alt=""
                      />
                    </a>
                  </div>
                );
              })}

              {/* <div class="img">
                <a href="assest/images/WhatsApp Image 2022-04-03 at 6.45.39 AM.jpeg">
                  <img
                    src="assest/images/WhatsApp Image 2022-04-03 at 6.45.39 AM.jpeg"
                    class="image"
                    alt=""
                  />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/gowaste.jpg">
                  <img src="assest/images/gowaste.jpg" class="image" alt="" />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/gowaste.jpg">
                  <img src="assest/images/gowaste.jpg" class="image" alt="" />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/image1 (3).jpeg">
                  <img
                    src="assest/images/image1 (3).jpeg"
                    class="image"
                    alt=""
                  />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/image1 (4).jpeg">
                  <img
                    src="assest/images/image1 (4).jpeg"
                    class="image"
                    alt=""
                  />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/image1 (5).jpeg">
                  <img
                    src="assest/images/image1 (5).jpeg"
                    class="image"
                    alt=""
                  />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/image1 (6).jpeg">
                  <img
                    src="assest/images/image1 (6).jpeg"
                    class="image"
                    alt=""
                  />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/gallery.jpeg">
                  <img src="assest/images/gallery.jpeg" class="image" alt="" />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/gallery1.jpeg">
                  <img src="assest/images/gallery1.jpeg" class="image" alt="" />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/gallery2.jpeg">
                  <img src="assest/images/gallery2.jpeg" class="image" alt="" />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/gallery3.jpeg">
                  <img src="assest/images/gallery3.jpeg" class="image" alt="" />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/galley4.jpeg">
                  <img src="assest/images/galley4.jpeg" class="image" alt="" />
                </a>
              </div>
              <div class="img">
                <a href="assest/images/gallery5.jpeg">
                  <img src="assest/images/gallery5.jpeg" class="image" alt="" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

// <!--Contact Section -->

// <section class="contact" id="contact">
//     <div class="max-width">
//         <h2 class="section-title">Contact</h2>
//         <div class="contact-content">
//             <div class="column left">
//             <div class="text">Get in Touch</div>
//             <p>LAC Global Limited is an international company engaged in a diverse investment: Civil Engineering, Digital Waste and Drainage Management (GO WASTE Project), Governmental/Private Sector Consultation, Broker Services (Food/Non-Food).</p>
//             <div class="icons">
//                 <div class="row">
//                     <i class="fas fa-user"></i>
//                     <div class="info">
//                         <div class="head"></div>
//                         <div class="sub-title">LAC GLOBAL</div>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <i class="fas fa-map-marker-alt"></i>
//                     <div class="info">
//                         <div class="head">Address</div>
//                         <div class="sub-title">45 Kipling Avenue, RM18 8HF, Tilbury, United Kingdom.</div>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <i class="fas fa-envelope"></i>
//                     <div class="info">
//                         <div class="head">Email</div>
//                         <div class="sub-title">info@lacgloballimited.com</div>
//                     </div>
//                 <div class="row">
//                     <i class="fas fa-telephone"></i>
//                     <div class="info">
//                         <div class="head">Phone</div>
//                         <div class="sub-title">+44 7888586489 / +49 15205284562 / +233 552682208</div>
//                     </div>
//                 </div>

//             </div>
//             </div>
//         </div>
//         <div class="column right">

//             <form action="https://formspree.io/f/xayvdvdb" method="post">
//                 <div class="fields">
//                     <div class="field name">
//                     <input type="text" name="name" required placeholder="Name">
//                     </div>

//                     <div class="field email">
//                         <input type="email" name="email"  required placeholder="Email">
//                         </div>
//                     </div>
//                         <div class="field">
//                             <input type="text" placeholder="Subject">
//                             </div>
//                             <div class="field textarea">
//                                 <textarea cold="30" row="10" placeholder ="Message" name="message"></textarea>
//                                 </div>
//                                 <div class="button">
//                                         <button type="submit">Send Message</button>
//                                     </div>

//             </form>
//         </div>
//         </div>
//     </div>

//                     <div class="socials">
//                     <a href="https://twitter.com/Gowaste_App" target="blank"> <i class="fa fa-twitter"></i></a>
//                     <a href="https://www.instagram.com/gowaste_app/" target=blank> <i class="fa fa-instagram"></i></a>
//                     <a href="https://web.facebook.com/gowasteapp" target="blank"> <i class="fa fa-facebook"></i></a>
//                     <a href="https://www.youtube.com/channel/UCicujWA30ncwWJUzVPN-03Q" target="blank"> <i class="fa fa-youtube"></i></a>
//                     </div>

// </section>

// <!--Footer Section -->
//     <footer>
//             <span>Lac Global <span class="far fa-copyright"></span>2022 All rights Reserved</span>
//         </footer>
