import styles from "./Ourteam.module.scss";
import { images } from "../../assets/images";

export const Ourteam = () => {
  return (
    <section className={`${styles.ourteam} container`}>
      <h2 className={styles.ourteam__title}>our team</h2>
      <p className={styles.ourteam__desc}>
        We are happy to create for you an unforgettable adventure that you will
        remember for a lifetime
      </p>
      <div className={styles.ourteam__inner}>
        <div className={styles.ourteam__item}>
          <div className={styles.ourteam__img}>
            <img src={images.TeamImg1} className={styles.ourteam__image} alt="Tour Guide" />
          </div>
          <div className={styles.ourteam__info}>
            <h3 className={styles.ourteam__name}>Anita Veta</h3>
            <h4 className={styles.ourteam__info_desc}>Tour Guide</h4>
          </div>
        </div>
        <div className={`${styles.ourteam__item} ${styles.ourteam__item_bottom}`}>
          <div className={styles.ourteam__img}>
            <img src={images.TeamImg2} className={styles.ourteam__image} alt="Instructor Tour Guide" />
          </div>
          <div className={styles.ourteam__info}>
            <h3 className={styles.ourteam__name}>David Smith</h3>
            <h4 className={styles.ourteam__info_desc}>Instructor Tour Guide</h4>
          </div>
        </div>
        <div className={styles.ourteam__item}>
          <div className={styles.ourteam__img}>
            <img src={images.TeamImg3} className={styles.ourteam__image} alt="Tour Guide" />
          </div>
          <div className={styles.ourteam__info}>
            <h3 className={styles.ourteam__name}>Ann Smith</h3>
            <h4 className={styles.ourteam__info_desc}>Tour Guide</h4>
          </div>
        </div> 
      </div>
    </section>
  );
};
