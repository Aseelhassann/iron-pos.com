import React, { useEffect, useState } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

const CardsCarousel = (props) => {
  const { slides, options, width } = props;

  const [direction, setDirection] = useState(
    document.documentElement.getAttribute("dir") || "ltr"
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    direction,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi]);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "dir"
        ) {
          const newDir = document.documentElement.getAttribute("dir") || "ltr";
          setDirection(newDir);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit({ ...options, direction });
    }
  }, [emblaApi, direction, options]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // Swap button actions for RTL
  const isRtl = direction === "rtl";
  const prevClickHandler = isRtl ? onNextButtonClick : onPrevButtonClick;
  const nextClickHandler = isRtl ? onPrevButtonClick : onNextButtonClick;

  const prevDisabled = isRtl ? nextBtnDisabled : prevBtnDisabled;
  const nextDisabled = isRtl ? prevBtnDisabled : nextBtnDisabled;

  return (
    <section className={`embla2 ${width === "full" ? "full" : ""}`}>
      <div className="embla__viewport2" ref={emblaRef}>
        <div className="embla__container2">
          {slides.map((node, index) => (
            <div
              className={`embla__slide2 ${
                index === selectedIndex ? "is-active" : ""
              }`}
              key={index}
            >
              <div className="embla__slide__number2">{node}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          {direction === "rtl" ? (
            <>
              <NextButton onClick={nextClickHandler} disabled={nextDisabled} />
              <PrevButton onClick={prevClickHandler} disabled={prevDisabled} />
            </>
          ) : (
            <>
              <PrevButton onClick={prevClickHandler} disabled={prevDisabled} />
              <NextButton onClick={nextClickHandler} disabled={nextDisabled} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardsCarousel;
