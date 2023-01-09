/* eslint-disable @next/next/no-img-element */
import React from "react";

import { urlFor } from "../sanity";

function Gallery({ gallery }) {
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
