"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import styles from "@/styles/splide-show-next-slide.module.css";
import Image from "next/image";
import { animals } from "../../../public/animals";

const SplideShowNextSlide = () => {
  const options = {
    type: "loop",
    speed: 700,
    padding: { right: "30%" },
    gap: 32,
    autoplay: true,
    interval: 3000,
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
        <div className="splide__arrows">
          <button
            className={`splide__arrow splide__arrow--prev ${styles["arrow-left"]}`}
          >
            &larr;
          </button>
          <button
            className={`splide__arrow splide__arrow--next ${styles["arrow-right"]}`}
          >
            &rarr;
          </button>
        </div>
        <ul className={`splide__pagination ${styles.normal}`} />
      </Splide>
    </div>
  );
};

export default SplideShowNextSlide;
