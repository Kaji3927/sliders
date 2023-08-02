import SwiperAutoScroll from "@/components/swiper/SwiperAutoScroll";
import SwiperGroup from "@/components/swiper/SwiperGroup";
import SwiperNormal from "@/components/swiper/SwiperNormal";
import SwiperViewAuto from "@/components/swiper/SwiperViewAuto";
import styles from "@/styles/swiper.module.css";

const SwiperPage = () => {
  return (
    <div className={styles.swiper}>
      <SwiperNormal />
      <SwiperGroup />
      <SwiperViewAuto />
      <SwiperAutoScroll />
    </div>
  );
};

export default SwiperPage;
