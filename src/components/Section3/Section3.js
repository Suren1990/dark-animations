import cn from "classnames";
import { useRef } from "react";
import { useIsVisible } from "../../hooks";

import { images } from "../../assets/images";
import styles from "./Section3.module.scss";

export const Section3 = () => {
  const scrollRef = useRef(null);
  const isOnDiv = useIsVisible(scrollRef);

  return (
    <section
      className={cn(styles.section, {
        [styles.section__scrolled]: isOnDiv,
      })}
    >
      <div className={cn(styles.section__img, styles.section__img1)}>
        <img src={images.Section3Img1} alt="Sectin 1" />
      </div>
      <div className={`${styles.section__inner} container`}>
        <p className={styles.section__info} ref={scrollRef}>
          Luxury accommodations and dining: We provide access to the finest
          hotels, resorts and restaurants, ensuring that you will have a
          comfortable and luxurious stay while you travel.
        </p>
      </div>
      <div className={cn(styles.section__img, styles.section__img2)}>
        <img src={images.Section3Img2} alt="Sectin 2" />
      </div>
    </section>
  );
};
