import cn from "classnames";
import { useRef } from "react";

import { images } from "../../assets/images";
import { useIsVisible } from "../../hooks";
import styles from "./Section5.module.scss";

export const Section5 = () => {
  const scrollRef = useRef(null);
  const isOnDiv = useIsVisible(scrollRef);

  return (
    <section
      className={cn(styles.section, {
        [styles.section__scrolled]: isOnDiv,
      })}
    >
      <div className={cn(styles.section__img, styles.section__img1)}>
        <img src={images.Section5Img1} alt="Sectin 1" />
      </div>
      <div className={`${styles.section__inner} container`}>
        <p className={styles.section__info} ref={scrollRef}>
          Exceptional customer service: Our commitment to providing exceptional
          customer service means that you can travel with peace of mind, knowing
          that we are available 24/7 to assist you with any needs or concerns
          that may arise
        </p>
      </div>
      <div className={cn(styles.section__img, styles.section__img2)}>
        <img src={images.Section5Img2} alt="Sectin 2" />
      </div>
    </section>
  );
};
