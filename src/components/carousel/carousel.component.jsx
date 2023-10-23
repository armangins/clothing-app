import Slide from "./slide/slide.component";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { CategoriesContext } from "../../contexts/categories.context";
import { Fragment, useContext } from "react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./carousel.styles.jsx";
import "swiper/css/navigation";
import { Contanier, Title } from "./carousel.styles.jsx";

/**
 * Carousel component.
 * @component
 * @returns {JSX.Element} A React JSX element.
 */

const Carousel = () => {
  const { categoriesAndProducts } = useContext(CategoriesContext); // object
  return (
    <Contanier className="carousel_container">
      <Title>
        New Collections
      </Title>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {Object.keys(categoriesAndProducts).map((title) => {
          return (
            <Fragment key={title}>
              {categoriesAndProducts[title].map((product) => {
                return (
                  <SwiperSlide
                    key={product.id + "crousel"}
                  >
                    <Slide product={product}></Slide>
                  </SwiperSlide>
                );
              })}
            </Fragment>
          );
        })}
      </Swiper>
    </Contanier>
  );
};

export default Carousel;
