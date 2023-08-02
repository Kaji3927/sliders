"use client";

import Link from "next/link";
import { useActivePath } from "@/helper/useActivePath";
import styles from "@/styles/nav.module.css";

const Nav = () => {
  const checkActivePath = useActivePath();

  const paths = [
    { link: "/splide", name: "Splide", class: "splide" },
    { link: "/swiper", name: "Swiper", class: "swiper" },
  ];
  return (
    <nav>
      <ul>
        {paths.map((path) => (
          <li key={path.name}>
            <Link
              className={`${
                checkActivePath(path.link) ? styles.active : styles.link
              } ${path.name === "Splide" ? styles.splide : styles.swiper}`}
              href={path.link}
            >
              {path.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
