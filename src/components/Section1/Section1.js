import cn from "classnames";
import { useRef } from "react";
import { useIsVisible } from "../../hooks";

import { images } from "../../assets/images";
import styles from "./Section1.module.scss";

export const Section1 = () => {
  const scrollRef = useRef(null);
  const isOnDiv = useIsVisible(scrollRef);

  return (
    <section
      className={cn(styles.section, {
        [styles.section__scrolled]: isOnDiv,
      })}
    >
      <div className={cn(styles.section__img, styles.section__img1)}>
        <img src={images.Section1Img1} alt="Sectin 1" />
      </div>
      <div className={`${styles.section__inner} container`}>
        <p className={styles.section__info} ref={scrollRef}>
          Expertise and personalized attention: Our company has over 20 years of
          experience in crafting customized travel experiences, and our team of
          experts will work with you to create a personalized itinerary that
          meets your specific interests and needs.
        </p>
      </div>
      <div className={cn(styles.section__img, styles.section__img2)}>
        <img src={images.Section1Img2} alt="Sectin 2" />
      </div>
    </section>
  );
};
