import cn from "classnames";
import { useRef } from "react";
import { useIsVisible } from "../../hooks";

import { images } from "../../assets/images";
import styles from "./Section4.module.scss";

export const Section4 = () => {
  const scrollRef = useRef(null);
  const isOnDiv = useIsVisible(scrollRef);

  return (
    <section
      className={cn(styles.section, {
        [styles.section__scrolled]: isOnDiv,
      })}
    >
      <div className={cn(styles.section__img, styles.section__img1)}>
        <img src={images.Section4Img1} alt="Sectin 1" />
      </div>
      <div className={`${styles.section__inner} container`}>
        <p className={styles.section__info} ref={scrollRef}>
          Seamless travel experience: We take care of all the details, from
          transportation and visas to local guides and insider access, so that
          you can focus on enjoying your trip without any hassl
        </p>
      </div>
      <div className={cn(styles.section__img, styles.section__img2)}>
        <img src={images.Section4Img2} alt="Sectin 2" />
      </div>
    </section>
  );
};
