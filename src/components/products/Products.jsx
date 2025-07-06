import { useTranslation } from "react-i18next";
import "./productsStyle.css";
import { useEffect, useState } from "react";
import CardsCarousel from "../cards-carousel/EmblaCarousel";
import { Link } from "react-router-dom";
import { MoveLeft, MoveRight } from "lucide-react";

export const products = [
  {
    title: "products.1.title",
    p: "products.1.p",
    img: "https://firebasestorage.googleapis.com/v0/b/general-ebf2c.firebasestorage.app/o/iron-pose%2Fproduct-1.png?alt=media&token=2cb6779a-48b8-47dc-9c98-56c1e9797eb3",
  },
  {
    title: "products.2.title",
    p: "products.2.p",
    img: "https://firebasestorage.googleapis.com/v0/b/general-ebf2c.firebasestorage.app/o/iron-pose%2Fproduct-2.png?alt=media&token=2b494c2b-4169-46de-af41-758b3937482f",
  },
  {
    title: "products.3.title",
    p: "products.3.p",
    img: "https://firebasestorage.googleapis.com/v0/b/general-ebf2c.firebasestorage.app/o/iron-pose%2Fproduct-3.png?alt=media&token=dc700b54-9dbb-415e-ba4b-775c69d3e26f",
  },
  {
    title: "products.4.title",
    p: "products.4.p",
    img: "https://firebasestorage.googleapis.com/v0/b/general-ebf2c.firebasestorage.app/o/iron-pose%2Fproduct-4.png?alt=media&token=4f9f1232-8453-40bf-adf8-db6f1130d4f5",
  },
];

const Products = () => {
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
    <section className="products-container">
      <h3>
        <h3>{t("products.title")}</h3>
      </h3>
      <p>{t("products.p")}</p>
      <div style={{ marginTop: 10, padding: 15 }}>
        {isMobile ? (
          <CardsCarousel
            width={"full"}
            slides={products.map((product, index) => (
              <Card content={product} t={t} key={index} />
            ))}
          />
        ) : (
          products.map((product, index) => (
            <Card content={product} t={t} key={index} />
          ))
        )}
      </div>
      <Link to={"/products"} className="show-all-btn">
        {t("products.btn")}
      </Link>
    </section>
  );
};

export const Card = ({ content, t, clickAble = false, onClick }) => (
  <div
    onClick={onClick}
    style={{ cursor: clickAble ? "pointer" : "default" }}
    className="products-card"
  >
    <img src={content.img} alt="img" />
    <div className="products-card-body">
      <h3>
        {t(content.title)}{" "}
        <span className="arrow-span">
          <MoveRight />
        </span>
      </h3>
      <p>{t(content.p)}</p>
    </div>
  </div>
);

export default Products;
