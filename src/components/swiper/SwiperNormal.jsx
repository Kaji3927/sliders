"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { animals } from "../../../public/animals";
import Image from "next/image";
import styles from "@/styles/swiper-normal.module.css";

const SwiperNormal = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        loop={true}
        pagination={{ el: ".pagination" }}
        navigation={true}
        modules={[Pagination, Navigation]}
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

export default SwiperNormal;
