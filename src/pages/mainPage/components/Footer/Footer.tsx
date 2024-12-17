import { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__caption}>
        Мы гибки, адаптивны, молоды, стремительны, ответственны, эффективны,
        инновационны, вдохновляющи, интеллектуальны, компетентны и уникальны. Мы
        - твой лучший партнер.
      </p>
      <button className={styles.footer__btn}>Сотрудничать с нами</button>
      <aside className={styles.footer__links}>
        <a
          className={`${styles.footer__link} ${styles.footer__link_vk}`}
          href=""
        ></a>
        <a
          className={`${styles.footer__link} ${styles.footer__link_hh}`}
          href=""
        ></a>
        <a
          className={`${styles.footer__link} ${styles.footer__link_habr}`}
          href=""
        ></a>
        <button className={styles.footer__btn_lang}>RU</button>
      </aside>
    </footer>
  );
};

export default Footer;
