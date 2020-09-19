import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heart, Quotes } from "../Icons";
import TestimonialsData from "../../Data/TestimonialsData.json";

function Testimonials() {
  const CONTENT = TestimonialsData.content,
    TESTIMONIALCONTENT = TestimonialsData.testimonials;

  let settings = {
    arrows: false,
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const carouselItems = TESTIMONIALCONTENT.map((item, index) => {
    return (
      <div className="carousel__testimonials" key={index}>
        <div className="browser browser--testimonial">
          <div className="browser__window">
            <h3 className="carousel__testimonials-project mb-2">{item.projectName}</h3>
            <p className="carousel__testimonials-author">{item.author}</p>
            {item.text.map(function (paragraph, i) {
              return <p className="carousel__testimonials-text" key={i}>{paragraph}</p>;
            })}
          </div>
          <div className="browser--background"></div>
        </div>
      </div>
    );
  });

  return (
    <section className="testimonials background--black" id="testimonials" name="#testimonials">
      <div className="testimonials__background"></div>
      <div className="container text-center">
        <h2>{CONTENT[0].title}</h2>
        {Quotes}

        <Slider {...settings} className="carousel">
          {carouselItems}
        </Slider>

        {Heart}
      </div>
    </section>
  );
}

export default Testimonials;
