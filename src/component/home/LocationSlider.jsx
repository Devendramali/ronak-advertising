import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import img1 from "../../assets/imgs/location/1.png";
import img2 from "../../assets/imgs/location/2.png";
import img3 from "../../assets/imgs/location/3.png";
import img4 from "../../assets/imgs/location/4.png";
import img5 from "../../assets/imgs/location/1.png";
import img6 from "../../assets/imgs/location/2.png";
import img7 from "../../assets/imgs/location/3.png";
import img8 from "../../assets/imgs/location/4.png";

const locations = [
  { title: "PANVEL", image: img1 },
  { title: "KHARGHAR", image: img2 },
  { title: "SANPADA", image: img3 },
  { title: "JUINAGAR", image: img4 },
  { title: "NERUL", image: img5 },
  { title: "VASHI", image: img6 },
  { title: "BELAPUR", image: img7 },
  { title: "AIROLI", image: img8 },
];

// Create groups of 4
const slides = [];
for (let i = 0; i < locations.length; i += 4) {
  slides.push(locations.slice(i, i + 4));
}

export default function LocationSlider() {
  return (
    <div className="locationslider p-70">

   
    <div className="container" data-gsap>

   
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="location-slider"
    >
      {slides.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="location-grid">
            {group.map((item, i) => (
              <div className="location-card" key={i}>
                <img src={item.image} alt={item.title} />

                <div className="overlay"></div>

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
     </div>
      </div>
  );
}