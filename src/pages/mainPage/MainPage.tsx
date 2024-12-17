import { FC, ReactNode } from "react";
import ParticlesBackground from "@src/pages/mainPage/components/ParticlesBackground/ParticlesBackground";
import styles from "./MainPage.module.css";
import Layout from "@src/shared/ui/layout/Layout";
import { A, D, E, F, G } from "@src/shared/ui/logo";
import Footer from "@src/pages/mainPage/components/Footer/Footer";

export const MainPage: FC = (): ReactNode => {
  return (
    <Layout>
      <div className={styles.container}>
        <ParticlesBackground />
        <header className={styles.header}>
          <div className={styles.logo}>
            <F width="32px" height="32px"></F>
            <E width="32px" height="32px"></E>
            <D width="32px" height="32px"></D>
            <A width="32px" height="32px"></A>
            <G width="32px" height="32px"></G>
          </div>
          <nav className={styles.nav}>
            <a className={styles.nav__link} href="">
              Кейсы
            </a>
            <a className={styles.nav__link} href="">
              Наши продукты
            </a>
            <a className={styles.nav__link} href="">
              Контакты
            </a>
            <a className={styles.nav__link} href="">
              Блог
            </a>
            <a className={styles.nav__link} href="">
              Карьера
            </a>
            <button className={styles.nav__btn}></button>
          </nav>
        </header>
        <div className={styles.description}>
          <h1 className={styles.title}>FedAG studio</h1>
          <p className={styles.subtitle}>
            C FedAG ваши идеи воплощаются в технологии. Мобильные приложения,
            веб-сайты, облачные системы – надежно, быстро, индивидуально.
          </p>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};
