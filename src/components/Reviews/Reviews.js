import styles from "./Reviews.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewItem } from "./ReviewItem/ReviewItem";
import Slider from "react-slick";

export const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.reviews}>
      <div className="container">
        <h2 className={styles.reviews__title}>reviews</h2>
        <h3 className={styles.reviews__subtitle}>
          what our clients say about us
        </h3>
        <div className={styles.reviews__slider}>
          <Slider {...settings}>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
          </Slider>
        </div>
      </div>
    </section>
  );
};
