/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slider from "react-slick";
import sanityClient, { urlFor } from "../sanity";
import { Tip } from "./Tip";
import $ from "jquery";

function Gallery({ gallery }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 10,
  };
  return (
    <div className="">
      <section id="portfolio" class="portfolio ">
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
}

export default Gallery;
