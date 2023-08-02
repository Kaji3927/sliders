"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import styles from "@/styles/splide-autoscroll.module.css";
import Image from "next/image";
import { animals } from "../../../public/animals";

const SplideAutoScroll = () => {
  const options = {
    focus: "center",
    perPage: 5,
    gap: "2rem",
    type: "loop",
    autoScroll: {
      pauseOnHover: false,
      speed: 0.6,
    },
  };
  return (
    <div className={styles.slider}>
      <Splide hasTrack={false} options={options} extensions={{ AutoScroll }}>
        <SplideTrack>
          {animals.map((animal) => (
            <SplideSlide key={animal.id}>
              <div className={styles.slide}>
                <Image src={animal.image} fill alt={animal.name} />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
        <ul className={`splide__pagination ${styles.normal}`} />
      </Splide>
    </div>
  );
};

export default SplideAutoScroll;
