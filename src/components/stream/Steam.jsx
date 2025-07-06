import { useTranslation } from "react-i18next";
import "./streamStyle.css";
import CardsCarousel from "../cards-carousel/EmblaCarousel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "stream.1.title",
    img: "../../assets/stream-1.png",
    p: "stream.1.p",
  },
  {
    title: "stream.2.title",
    img: "../../assets/stream-2.png",
    p: "stream.2.p",
  },
  {
    title: "stream.3.title",
    img: "../../assets/stream-3.png",
    p: "stream.3.p",
  },
  {
    title: "stream.4.title",
    img: "../../assets/stream-4.png",
    p: "stream.4.p",
  },
];

const Stream = () => {
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
    <section className="stream-container">
      <h3>{t("stream.header")}</h3>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="stream-cards-container"
      >
        {isMobile ? (
          <CardsCarousel
            slides={cards.map((card, index) => (
              <Card content={card} key={index} t={t} />
            ))}
          />
        ) : (
          cards.map((card, index) => <Card content={card} key={index} t={t} />)
        )}
      </motion.div>
    </section>
  );
};

const Card = ({ content, t }) => (
  <div className="stream-card">
    <img src={content.img} alt={`stream-${content.title}`} />
    <h5>{t(content.title)}</h5>
    <p>{t(content.p)}</p>
  </div>
);

export default Stream;
