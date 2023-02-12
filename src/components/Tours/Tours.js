import cn from "classnames";
import { useState } from "react";

import styles from "./Tours.module.scss";
import { images } from "../../assets/images";

export const Tours = () => {
  const [activeTour, setActiveTour] = useState(0);

  const activeSlide = (id) => {
    setActiveTour(id);
  };

  return (
    <section className={`${styles.tours} container`}>
      <h2 className={styles.tours__title}>Tours</h2>
      <h3 className={styles.tours__subtitle}>tours of our agency</h3>
      <div className={styles.tours__slider}>
        <div className={styles.tours__inner}>
          <div
            className={cn(styles.tours__slide, {
              [styles.active_slide]: activeTour === 0,
            })}
          >
            <img src={images.TourSliderImage1} alt="Tour" />
            <div className={styles.tours__slider_image_info}>
              <h5 className={styles.tours__slider_image_title}>
                Tour for days
              </h5>
              <p className={styles.tours__slider_image_desc}>
                <span className={styles.tours__slider_image_date}>
                  <span className={styles.tours__slider_image_icon}>
                    <img src={images.DateIcon} alt="date icon" />
                  </span>
                  19/07
                </span>
                <span>$ 1500</span>
              </p>
            </div>
          </div>
          <div
            className={cn(styles.tours__slide, {
              [styles.active_slide]: activeTour === 1,
            })}
          >
            <img src={images.TourSliderImage2} alt="Tour" />
            <div className={styles.tours__slider_image_info}>
              <h5 className={styles.tours__slider_image_title}>
                Tour for days
              </h5>
              <p className={styles.tours__slider_image_desc}>
                <span className={styles.tours__slider_image_date}>
                  <span className={styles.tours__slider_image_icon}>
                    <img src={images.DateIcon} alt="date icon" />
                  </span>
                  24/08
                </span>
                <span>$ 1050</span>
              </p>
            </div>
          </div>
          <div
            className={cn(styles.tours__slide, {
              [styles.active_slide]: activeTour === 2,
            })}
          >
            <img src={images.TourSliderImage3} alt="Tour" />
            <div className={styles.tours__slider_image_info}>
              <h5 className={styles.tours__slider_image_title}>
                Tour for days
              </h5>
              <p className={styles.tours__slider_image_desc}>
                <span className={styles.tours__slider_image_date}>
                  <span className={styles.tours__slider_image_icon}>
                    <img src={images.DateIcon} alt="date icon" />
                  </span>
                  24 -31/08
                </span>
                <span>$ 1350</span>
              </p>
            </div>
          </div>
          <div
            className={cn(styles.tours__slide, {
              [styles.active_slide]: activeTour === 3,
            })}
          >
            <img src={images.TourSliderImage4} alt="Tour" />
            <div className={styles.tours__slider_image_info}>
              <h5 className={styles.tours__slider_image_title}>
                Tour for days
              </h5>
              <p className={styles.tours__slider_image_desc}>
                <span className={styles.tours__slider_image_date}>
                  <span className={styles.tours__slider_image_icon}>
                    <img src={images.DateIcon} alt="date icon" />
                  </span>
                  24/08
                </span>
                <span>$ 850</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.tours__slider_info}>
          <div
            className={cn(styles.tours__slider_info_item, {
              [styles.active]: activeTour === 0,
            })}
            onClick={() => activeSlide(0)}
          >
            <span className={styles.tours__slider_info_item_date}>19/07</span>
            <div className={styles.tours__slider_info_item_sub}>
              <h4 className={styles.tours__slider_info_item_title}>
                Tour for full day
              </h4>
              <p className={styles.tours__slider_info_item_desc}>
                Explore the address and Amazon Jungle
              </p>
            </div>
          </div>
          <div
            className={cn(styles.tours__slider_info_item, {
              [styles.active]: activeTour === 1,
            })}
            onClick={() => activeSlide(1)}
          >
            <span className={styles.tours__slider_info_item_date}>24/08</span>
            <div className={styles.tours__slider_info_item_sub}>
              <h4 className={styles.tours__slider_info_item_title}>
                Tour for full day
              </h4>
              <p className={styles.tours__slider_info_item_desc}>
                Explore the address and Amazon Jungle
              </p>
            </div>
          </div>
          <div
            className={cn(styles.tours__slider_info_item, {
              [styles.active]: activeTour === 2,
            })}
            onClick={() => activeSlide(2)}
          >
            <span className={styles.tours__slider_info_item_date}>
              24 -31/08
            </span>
            <div className={styles.tours__slider_info_item_sub}>
              <h4 className={styles.tours__slider_info_item_title}>
                Tour for 7 days
              </h4>
              <p className={styles.tours__slider_info_item_desc}>
                Explore the address and Amazon Jungle
              </p>
            </div>
          </div>
          <div
            className={cn(styles.tours__slider_info_item, {
              [styles.active]: activeTour === 3,
            })}
            onClick={() => activeSlide(3)}
          >
            <span className={styles.tours__slider_info_item_date}>24/08</span>
            <div className={styles.tours__slider_info_item_sub}>
              <h4 className={styles.tours__slider_info_item_title}>
                Tour for full day
              </h4>
              <p className={styles.tours__slider_info_item_desc}>
                Explore the address and Amazon Jungle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
