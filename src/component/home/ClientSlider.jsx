import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Logos
import logo1 from "../../assets/imgs/logos/logo-1.png";
import logo2 from "../../assets/imgs/logos/logo-2.png";
import logo3 from "../../assets/imgs/logos/logo-3.png";
import logo4 from "../../assets/imgs/logos/logo-4.png";
import logo5 from "../../assets/imgs/logos/logo-5.png";
import logo6 from "../../assets/imgs/logos/logo-6.png";
import logo7 from "../../assets/imgs/logos/logo-7.png";
import logo8 from "../../assets/imgs/logos/logo-8.png";
import logo9 from "../../assets/imgs/logos/logo-9.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
    logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];

const sliderSettings = (reverse = false) => ({
  modules: [Autoplay],
  loop: true,
  speed: 5000,
  spaceBetween: 40,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: reverse,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 35,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 40,
    },
  },
});

export default function ClientSlider() {
  return (
    <section className="client-section p-70 pb-0" data-gsap>
        <p>Join the 150+ companies trusting maxline company</p>

      {/* Left → Right */}
      <Swiper {...sliderSettings(true)}>
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="logo-box">
              <img src={logo} alt={`Logo ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right → Left */}
      <Swiper {...sliderSettings(false)} className="secondslider">
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="logo-box">
              <img src={logo} alt={`Logo ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}