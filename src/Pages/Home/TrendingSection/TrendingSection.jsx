import React from "react";
import brand1 from "../../../assets/images/brand-1.png";
import brand2 from "../../../assets/images/brand-2.png";
import brand3 from "../../../assets/images/brand-3.png";
import brand4 from "../../../assets/images/brand-4.png";
import brand5 from "../../../assets/images/brand-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  { img: brand1 },
  { img: brand2 },
  { img: brand3 },
  { img: brand4 },
  { img: brand5 },
];

const TrendingSection = () => {
  return (
    <div className="px-5 mb-5 pt-5 pb-70 container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="section-title text-center mb-6">
            {/* <!-- Section ID -->	 */}
            <span className="section-id">Trending</span>
            {/* <!-- Title -->	 */}
            <h2 className="h2-title">TRENDING STYLE</h2>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1281: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="">
          {images.map((img, index) => (
            <SwiperSlide className="mb-5" key={index}>
              <img src={img.img} alt="" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TrendingSection;
