import SplideFeature from "@/components/home/SplideFeature";
import SwiperFeature from "@/components/home/SwiperFeature";
import styles from "@/styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <SplideFeature />
      <SwiperFeature />
    </div>
  );
};

export default Home;
