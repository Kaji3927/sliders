import styles from "@/styles/feature.module.css";

const SwiperFeature = () => {
  return (
    <div className={styles.feature}>
      <h2>Swiperのメリット</h2>
      <ul>
        <li>カスタマイズ性が高い</li>
        <li>
          頻繁にアップデートされている
          <span>※Splideの最終更新履歴は2022年09月24日</span>
        </li>
        <li>
          Githubのスター数が多い(35,930stars)<span>※Splideは4,100stars</span>
        </li>
      </ul>
    </div>
  );
};

export default SwiperFeature;
