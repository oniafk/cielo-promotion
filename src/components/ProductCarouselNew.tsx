import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "./ProductCarousel.css";

interface SwiperProgressSlide extends HTMLElement {
  progress?: number;
}

const ProductCarousel: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);

  // Product images from public folder
  const productImages = [
    "/350ml_cielo-1.webp",

    "/botella-2500-cielo2.png",
    "/cielo_20_lt.webp",
    "/cielo_3_785_l-scaled.webp",
    "/cielo_625ml-scaled.webp",
    "/cielo_alcalina_350_ml_1_1_.webp",
    "/cielo_kids.webp",
    "/cielo_sportcup_1l-scaled.webp",
    "/CIELO-625-PET_CON-GAS-peru2.png",
    "/cielo-7-litros2-1.png",
    "/render_cielo_alcalina.webp",
  ];

  useEffect(() => {
    // Initialize Swiper with a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }

      swiperRef.current = new Swiper(".carousel-slider", {
        grabCursor: true,
        watchSlidesProgress: true,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        initialSlide: 0,
        on: {
          progress: function (swiper) {
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i++) {
              const slide = slides[i] as SwiperProgressSlide;
              const slideProgress = slide.progress || 0;
              const absProgress = Math.abs(slideProgress);

              // Calculate transform values
              let modifier = 1;
              if (absProgress > 1) {
                modifier = 0.3 * (absProgress - 1) + 1;
              }

              const translateX = `${slideProgress * modifier * 50}%`;
              const scale = 1 - 0.2 * absProgress;
              const zIndex =
                slides.length - Math.abs(Math.round(slideProgress));
              const opacity = absProgress > 3 ? 0 : 1;

              // Apply styles
              slide.style.transform = `translateX(${translateX}) scale(${scale})`;
              slide.style.zIndex = zIndex.toString();
              slide.style.opacity = opacity.toString();

              // Apply styles to content
              const contents = slide.querySelectorAll(".item-content");
              contents.forEach((content) => {
                (content as HTMLElement).style.opacity = (
                  1 -
                  absProgress / 3
                ).toString();
              });
            }
          },

          setTransition: function (swiper, transitionDuration) {
            const slides = swiper.slides;
            for (let i = 0; i < slides.length; i++) {
              const slide = slides[i] as HTMLElement;
              slide.style.transitionDuration = `${transitionDuration}ms`;

              const contents = slide.querySelectorAll(".item-content");
              contents.forEach((content) => {
                (
                  content as HTMLElement
                ).style.transitionDuration = `${transitionDuration}ms`;
              });
            }
          },
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slider">
        <div className="swiper-wrapper">
          {productImages.map((image, index) => (
            <div key={index} className="swiper-slide">
              <div className="item-content">
                <img
                  src={image}
                  alt={`Cielo Product ${index + 1}`}
                  className="product-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
