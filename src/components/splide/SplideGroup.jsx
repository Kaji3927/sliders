"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "@/styles/splide-normal.module.css";
import Image from "next/image";
import { animals } from "../../../public/animals";

const SplideGroup = () => {
  const options = {
    perPage: 3,
    gap: "2rem",
    type: "loop",
  };
  return (
    <div className={styles.slider}>
      <Splide hasTrack={false} options={options}>
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

export default SplideGroup;
