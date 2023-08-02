"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { animals } from "../../../public/animals";
import Image from "next/image";
import styles from "@/styles/swiper-auto-scroll.module.css";

const SwiperAutoScroll = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={32}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        pagination={{ el: ".pagination" }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {animals.map((animal) => (
          <SwiperSlide key={animal.id}>
            <div className={styles.slide}>
              <Image src={animal.image} fill alt={animal.name} />
            </div>
          </SwiperSlide>
        ))}
        <div className="pagination" />
      </Swiper>
    </div>
  );
};

export default SwiperAutoScroll;
