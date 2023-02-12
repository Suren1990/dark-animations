import cn from "classnames";

import styles from "./Places.module.scss";
import { images } from "../../assets/images";

export const Places = () => {
  return (
    <section className={styles.places}>
      <div className={styles.places__wrap}>
        <h2 className={styles.places__title}>places for tours</h2>
        <p className={styles.places__desc}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
        <div className={`${styles.places__inner} container`}>
          <div className={styles.places__item_wrap}>
            <div
              className={cn(styles.places__item, styles.places__item_bottom)}
            >
              <div className={styles.places__img}>
                <img src={images.PlaceImg1} alt="maras moray" />
              </div>
              <h4 className={styles.places__info}>maras moray</h4>
            </div>
            <div className={cn(styles.places__item, styles.places__item_top)}>
              <h4 className={styles.places__info}>rainbow mountain</h4>
              <div className={styles.places__img}>
                <img src={images.PlaceImg2} alt="rainbow mountain" />
              </div>
            </div>
          </div>
          <div className={cn(styles.places__item, styles.places__item_center)}>
            <div className={styles.places__img}>
              <img src={images.PlaceImg3} alt="sacred valley" />
            </div>
            <h4 className={styles.places__info}>sacred valley</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
