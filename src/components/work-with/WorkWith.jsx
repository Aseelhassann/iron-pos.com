import { useEffect, useState } from "react";
import CardsCarousel from "../cards-carousel/EmblaCarousel";
import "./workWithStyle.css";
import { useTranslation } from "react-i18next";

const WorkWith = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 769px)");
    setIsMobile(mediaQuery.matches);
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <section className="work-with-us-container">
      <h3>{t("workWithUs")}</h3>

      {isMobile ? (
        <CardsCarousel
          slides={[
            <div className="work-image-container">
              <img
                className="work-with-us-image work-image-container"
                src="../../assets/Najma_Logo.png"
              />
            </div>,
            <div className="work-image-container">
              <img
                className="work-with-us-image"
                src="../../assets/shawatina-black-logo.png"
              />
            </div>,
            <div className="work-image-container">
              <img
                className="work-with-us-image"
                src="../../assets/taxi-logo.png"
              />
            </div>,
            <div className="work-image-container">
              <img
                className="work-with-us-image"
                src="../../assets/eataliano-logo.png"
              />
            </div>,
            <div className="work-image-container">
              <img
                className="work-with-us-image"
                src="../../assets/papa-rony-logo.png"
              />
            </div>,
          ]}
        />
      ) : (
        <div className="images-container">
          <div className="work-image-container">
            <img
              className="work-with-us-image work-image-container"
              src="../../assets/Najma_Logo.png"
            />
          </div>
          <div className="work-image-container">
            <img
              className="work-with-us-image"
              src="../../assets/shawatina-black-logo.png"
            />
          </div>
          <div className="work-image-container">
            <img
              className="work-with-us-image"
              src="../../assets/taxi-logo.png"
            />
          </div>
          <div className="work-image-container">
            <img
              className="work-with-us-image"
              src="../../assets/eataliano-logo.png"
            />
          </div>
          <div className="work-image-container">
            <img
              className="work-with-us-image"
              src="../../assets/papa-rony-logo.png"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkWith;
