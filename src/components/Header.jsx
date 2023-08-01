import Link from "next/link";
import styles from "@/styles/header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>
          <span className={styles.splide}>Splide </span>vs
          <span className={styles.swiper}> Swiper</span>
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/splide">Splide</Link>
          </li>
          <li>
            <Link href="/swiper">Swiper</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
