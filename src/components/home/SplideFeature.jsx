import styles from "@/styles/feature.module.css";

const SplideFeature = () => {
  return (
    <div className={styles.feature}>
      <h2>
        <span className={styles.splide}>Splide</span>のメリット
      </h2>
      <ul>
        <li>日本人が開発しているためドキュメントが日本語</li>
        <li>
          相対単位(remや%など)が使用できる<span>※swiperはpxのみ</span>
        </li>
        <li>ファイルサイズがほかのスライダーと比べ軽い</li>
        <li>アクセシビリティに配慮されている</li>
      </ul>
    </div>
  );
};

export default SplideFeature;
