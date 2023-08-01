"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import styles from "@/styles/splide-normal.module.css";
import Image from "next/image";
import { animals } from "../../../public/animals";

const SplideNormal = () => {
  const options = {
    rewind: true,
    rewindSpeed: 1000,
    speed: 2000,
    type: "loop",
    padding: "20%",
    gap: "1rem",
    autoScroll: {
      speed: 0.8,
      rewind: true,
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

export default SplideNormal;
