import cn from "classnames";
import { useState } from "react";

import styles from "./Excursion.module.scss";
import { images } from "../../assets/images";

export const Excursion = () => {
  const [activeItem, setActiveItem] = useState(0);

  const activeSlide = (nextPrev) => {
    if (nextPrev) {
      setActiveItem((prev) => {
        if (prev < 4) {
          return prev + 1;
        } else {
          return 4;
        }
      });
    } else {
      setActiveItem((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return 0;
        }
      });
    }
  };

  return (
    <section className={`${styles.excursion} container`}>
      <h2 className={styles.excursion__title}>EXCURSION ROUT</h2>
      <h3 className={styles.excursion__subtitle}>CLASSIC TOUR 4 DAY</h3>
      <div className={styles.excursion__inner}>
        <div className={styles.excursion__info}>
          <div className={styles.excursion__info_inner}>
            <div
              className={cn(styles.excursion__info_wrap, {
                [styles.activeSlideText]: activeItem === 0,
              })}
            >
              <span className={styles.excursion__about_day}>DAY 1</span>
              <h4 className={styles.excursion__info_title}>ALPS MOUNTAINS</h4>
              <p className={styles.excursion__desc}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,Ipsum is that it has a
                more-or-less normal distribution of letters,
              </p>
            </div>
            <div
              className={cn(styles.excursion__info_wrap, {
                [styles.activeSlideText]: activeItem === 1,
              })}
            >
              <span className={styles.excursion__about_day}>DAY 1</span>
              <h4 className={styles.excursion__info_title}>ALPS MOUNTAINS</h4>
              <p className={styles.excursion__desc}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,Ipsum is that it has a
                more-or-less normal distribution of letters,
              </p>
            </div>
            <div
              className={cn(styles.excursion__info_wrap, {
                [styles.activeSlideText]: activeItem === 2,
              })}
            >
              <span className={styles.excursion__about_day}>DAY 1</span>
              <h4 className={styles.excursion__info_title}>ALPS MOUNTAINS</h4>
              <p className={styles.excursion__desc}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,Ipsum is that it has a
                more-or-less normal distribution of letters,
              </p>
            </div>
            <div
              className={cn(styles.excursion__info_wrap, {
                [styles.activeSlideText]: activeItem === 3,
              })}
            >
              <span className={styles.excursion__about_day}>DAY 1</span>
              <h4 className={styles.excursion__info_title}>ALPS MOUNTAINS</h4>
              <p className={styles.excursion__desc}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,Ipsum is that it has a
                more-or-less normal distribution of letters,
              </p>
            </div>
            <div
              className={cn(styles.excursion__info_wrap, {
                [styles.activeSlideText]: activeItem === 4,
              })}
            >
              <span className={styles.excursion__about_day}>DAY 1</span>
              <h4 className={styles.excursion__info_title}>ALPS MOUNTAINS</h4>
              <p className={styles.excursion__desc}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,Ipsum is that it has a
                more-or-less normal distribution of letters,
              </p>
            </div>
          </div>
          <div className={styles.excursion__days_event}>
            <div
              className={cn(styles.excursion__day_item, {
                [styles.active]: activeItem === 0,
              })}
            >
              day 1
            </div>
            <div
              className={cn(styles.excursion__day_item, {
                [styles.active]: activeItem === 1,
              })}
            >
              day 2
            </div>
            <div
              className={cn(styles.excursion__day_item, {
                [styles.active]: activeItem === 2,
              })}
            >
              day 3
            </div>
            <div
              className={cn(styles.excursion__day_item, {
                [styles.active]: activeItem === 3,
              })}
            >
              day 4
            </div>
            <div
              className={cn(styles.excursion__day_item, {
                [styles.active]: activeItem === 4,
              })}
            >
              day 5
            </div>
          </div>
        </div>
        <div className={styles.excursion__slides}>
          <div
            className={cn(styles.excursion__slide_item, {
              [styles.active_slide]: activeItem === 0,
            })}
          >
            <img src={images.ExcursionImg1} alt="Tour 1" />
          </div>
          <div
            className={cn(styles.excursion__slide_item, {
              [styles.active_slide]: activeItem === 1,
            })}
          >
            <img src={images.ExcursionImg2} alt="excursion 2" />
          </div>
          <div
            className={cn(styles.excursion__slide_item, {
              [styles.active_slide]: activeItem === 2,
            })}
          >
            <img src={images.ExcursionImg3} alt="excursion 3" />
          </div>
          <div
            className={cn(styles.excursion__slide_item, {
              [styles.active_slide]: activeItem === 3,
            })}
          >
            <img src={images.ExcursionImg4} alt="excursion 4" />
          </div>
          <div
            className={cn(styles.excursion__slide_item, {
              [styles.active_slide]: activeItem === 4,
            })}
          >
            <img src={images.ExcursionImg5} alt="excursion 5" />
          </div>
          <div className={styles.excursion__nav}>
            <span
              className={cn(styles.excursion__nav_arrow, {
                [styles.active]: activeItem > 0 && activeItem < 5,
              })}
              onClick={() => activeSlide(false)}
            >
              <img src={images.ArrowLeft} alt="Arrow icon" />
            </span>
            <span className={styles.excursion__nav_count}>
              {activeItem + 1}/5
            </span>
            <span
              className={cn(styles.excursion__nav_arrow, {
                [styles.active]: activeItem < 4,
              })}
              onClick={() => activeSlide(true)}
            >
              <img src={images.ArrowRight} alt="Arrow icon" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
