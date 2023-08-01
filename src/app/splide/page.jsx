import SplideGroup from "@/components/splide/SplideGroup";
import SplideNormal from "@/components/splide/SplideNormal";
import styles from "@/styles/splide.module.css";

const SplidePage = () => {
  return (
    <div className={styles.splide}>
      <SplideNormal />
      <SplideGroup />
    </div>
  );
};

export default SplidePage;
