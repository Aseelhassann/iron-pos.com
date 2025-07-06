import { useTranslation } from "react-i18next";
import "./servicesStyle.css";
import Stream from "../stream/Steam";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const servicesUpper = [
  {
    title: "services.1.title",
    p: "services.1.p",
  },
  {
    title: "services.2.title",
    p: "services.2.p",
  },
  {
    title: "services.3.title",
    p: "services.3.p",
  },
  {
    title: "services.4.title",
    p: "services.4.p",
  },
  {
    title: "services.5.title",
    p: "services.5.p",
  },
  {
    title: "services.6.title",
    p: "services.6.p",
  },
  {
    title: "services.7.title",
    p: "services.7.p",
  },
];

const centralized = [
  {
    title: "centralized.1.title",
    p: "centralized.1.p",
  },
  {
    title: "centralized.2.title",
    p: "centralized.2.p",
  },
  {
    title: "centralized.3.title",
    p: "centralized.3.p",
  },
];

const tailored = [
  {
    title: "tailored.1.title",
    p: "tailored.1.p",
  },
  {
    title: "tailored.2.title",
    p: "tailored.2.p",
  },
  {
    title: "tailored.3.title",
    p: "tailored.3.p",
  },
];

const Services = () => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="services-container">
      <div className="service-upper">
        <h3 className="mobile-header">{t("services.title")}</h3>
        <motion.img
          initial={{ x: "-5%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          src="../../assets/service-upper.png"
          alt="Service Upper"
        />
        <div>
          <h3 className="desktop-header">{t("services.title")}</h3>
          {servicesUpper.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ overflowX: "hidden" }}
            >
              <Card content={service} t={t} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="service-second">
        <h3 className="mobile-header">{t("services.title2")}</h3>
        <div className="second-left">
          <h3 className="desktop-header">{t("services.title2")}</h3>
          <p>{t("services.p2")}</p>
        </div>
        <img src="../../assets/service-second.png" />
      </div>

      <Stream />

      <div className="service-upper">
        <h3 className="mobile-header">{t("centralized.title")}</h3>
        <img src="../../assets/centralized.png" />
        <div style={{ alignSelf: "center" }}>
          <h3 className="desktop-header">{t("centralized.title")}</h3>
          {centralized.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ overflowX: "hidden" }}
            >
              <Card key={index} content={service} t={t} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="service-upper">
        <h3 className="mobile-header">{t("tailored.title")}</h3>
        <div className="order-reverse">
          <h3 className="desktop-header">{t("tailored.title")}</h3>
          {tailored.map((service, index) => (
            <motion.div
              key={index}
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ overflowX: "hidden" }}
            >
              <Card key={index} content={service} t={t} />
            </motion.div>
          ))}
        </div>
        <img src="../../assets/tailored.png" />
      </div>

      <div className="service-second">
        <h3 className="mobile-header">{t("connected.title")}</h3>
        <img src="../../assets/connected.png" />
        <div className="second-left">
          <h3 className="desktop-header">{t("connected.title")}</h3>
          <p>{t("connected.p")}</p>
        </div>
      </div>
    </section>
  );
};

const Card = ({ content, t }) => (
  <div className="service-card">
    <div>
      <div className="bullet-point" />
    </div>
    <div className="services-body">
      <h5>{t(content.title)}</h5>
      <p>{t(content.p)}</p>
    </div>
  </div>
);

export default Services;
