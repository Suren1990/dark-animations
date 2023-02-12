import cn from "classnames";
import { useRef } from "react";
import { useIsVisible } from "../../hooks";

import { images } from "../../assets/images";
import styles from "./Section2.module.scss";

export const Section2 = () => {
  const scrollRef = useRef(null);
  const isOnDiv = useIsVisible(scrollRef);

  return (
    <section
      className={cn(styles.section, {
        [styles.section__scrolled]: isOnDiv,
      })}
    >
      <div className={cn(styles.section__img, styles.section__img1)}>
        <img src={images.Section2Img1} alt="Sectin 1" />
      </div>
      <div className={`${styles.section__inner} container`}>
        <p className={styles.section__info} ref={scrollRef}>
          Access to exclusive events and experiences: We offer access to
          exclusive tickets to celebrity after-parties, extreme mountaineering
          experiences, and other unique and unforgettable events.
        </p>
      </div>
      <div className={cn(styles.section__img, styles.section__img2)}>
        <img src={images.Section2Img2} alt="Sectin 2" />
      </div>
    </section>
  );
};
