import SplideAutoScroll from "@/components/splide/SplideAutoScroll";
import SplideGroup from "@/components/splide/SplideGroup";
import SplideNormal from "@/components/splide/SplideNormal";
import SplideShowNextSlide from "@/components/splide/SplideShowNextSlide";
import styles from "@/styles/splide.module.css";

const SplidePage = () => {
  return (
    <div className={styles.splide}>
      <SplideNormal />
      <SplideGroup />
      <SplideShowNextSlide />
      <SplideAutoScroll />
    </div>
  );
};

export default SplidePage;
