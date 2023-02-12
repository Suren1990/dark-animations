import styles from "./ReviewItem.module.scss";
import { images } from "../../../assets/images";

export const ReviewItem = () => {
  return (
    <article className={styles.reviewitem}>
      <div className={styles.reviewitem__img}>
        <img src={images.ReviewImg} className={styles.reviewitem__image} alt="lora jonson" />
      </div>
      <div className={styles.reviewitem__info}>
        <h4 className={styles.reviewitem__info_name}>lora jonson</h4>
        <div className={styles.rating}>
            <span className={styles.rating__title}>USA, 24 years old</span>
            <div className={styles.rating__items_wrap}>
                <span className={`${styles.rating__item} ${styles.active}`}></span>
                <span className={`${styles.rating__item} ${styles.active}`}></span>
                <span className={`${styles.rating__item} ${styles.active}`}></span>
                <span className={`${styles.rating__item} ${styles.active}`}></span>
                <span className={styles.rating__item}></span>
            </div>
        </div>
        <p className={styles.reviewitem__info_desc}>
          "I recently used this luxury travel agency for a business trip, and I
          was completely blown away by the level of service and attention to
          detail. The staff was professional, knowledgeable, and made the entire
          process seamless. I would highly recommend this agency to anyone
          looking for a truly luxurious travel experience."
        </p>
      </div>
    </article>
  );
};
