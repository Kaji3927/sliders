import Link from "next/link";
import styles from "@/styles/header.module.css";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.home}>
        <h1 className={styles.title}>
          <span className={styles.splide}>Splide</span> vs{" "}
          <span className={styles.swiper}>Swiper</span>
        </h1>
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
