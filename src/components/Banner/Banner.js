import cn from "classnames";
import { useEffect, useState } from "react";

import styles from "./Banner.module.scss";
import { images } from "../../assets/images";

export const Banner = () => {
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    setIsloaded(true);
  }, []);

  return (
    <section className={styles.banner}>
      <div
        className={cn(styles.banner__image_wrap, {
          [styles.banner__image_loaded]: isLoaded,
        })}
      >
        <img
          className={styles.banner__image}
          src={images.Banner}
          alt="Experience the best trip of your life."
        />
      </div>
      <div className={`${styles.banner__inner} container`}>
        <div
          className={cn(styles.banner__title_wrap, {
            [styles.banner__title_wrap_loaded]: isLoaded,
          })}
        >
          <h1
            className={cn(styles.banner__title, {
              [styles.banner__title_loaded]: isLoaded,
            })}
          >
            Experience the best trip of your life.
          </h1>
        </div>
      </div>
      <section
        className={cn(styles.banner__nav, {
          [styles.banner__nav_loaded]: isLoaded,
        })}
      >
        <div className={`${styles.banner__nav_inner} container`}>
          <h2 className={styles.banner__nav_title}>Reasons</h2>
          <h3 className={styles.banner__nav_subtitle}>
            five reasons why choose us
          </h3>
          <div className={styles.banner__nav_info_wrap}>
            <div className={styles.banner__nav_info}>
              <div className={styles.banner__nav_item}>
                <h4 className={styles.banner__nav_item_title}>
                  Expertise and personalized attention: Our company has over 20
                  years of experience in crafting ...
                </h4>
              </div>
              <div className={styles.banner__nav_item}>
                <h4 className={styles.banner__nav_item_title}>
                  Access to exclusive events and experiences: We offer access to
                  exclusive tickets to...
                </h4>
              </div>
              <div className={styles.banner__nav_item}>
                <h4 className={styles.banner__nav_item_title}>
                  Luxury accommodations and dining: We provide access to the
                  finest hotels, resorts and ...
                </h4>
              </div>
              <div className={styles.banner__nav_item}>
                <h4 className={styles.banner__nav_item_title}>
                  Exceptional customer service: Our commitment to providing
                  exceptional customer
                </h4>
              </div>
              <div className={styles.banner__nav_item}>
                <h4 className={styles.banner__nav_item_title}>
                  Seamless travel experience: We take care of all the details,
                  from transportation ...
                </h4>
              </div>
            </div>
            <h4 className={styles.banner__scroll}>SCROLL DOWN</h4>
          </div>
        </div>
      </section>
    </section>
  );
};
