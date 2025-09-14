import React, { useEffect } from "react";
import "./Herosection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Herosection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const handleSlideChange = () => {
    AOS.refresh(); // re-check AOS animations
  };

  return (
    <div className="herosection_parent parent ">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide className="swiper-slide parent bg-img-cover">
          <div className="herosection_cont cont">
            <h1>
              <span data-aos="fade-down"  data-aos-delay="300">Lorem ipsum dolor sit amet.</span>
              <br />
              <span className="primary" data-aos="fade-up" data-aos-delay="300">
                Officiis, ipsa.
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              soluta labore, quibusdam accusamus commodi iste magnam qui ea
              necessitatibus quidem, debitis quisquam?
            </p>
            <div className="btn" data-aos="zoom-in" data-aos-delay="600">
              Know More
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide parent bg-img-cover">
          <div className="herosection_cont cont">
            <h1>
              <span data-aos="fade-down">Another slide headline</span>
              <br />
              <span className="primary" data-aos="fade-up">
                Slide subtitle
              </span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="btn" data-aos="zoom-in" data-aos-delay="600">
              Know More
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Herosection;
