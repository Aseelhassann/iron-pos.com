import "./aboutUs.style.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const AboutUsPage = () => {
  const { t } = useTranslation();

  const imageAnimation = {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 60, duration: 1, delay: 0.2 },
  };

  const textAnimation = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 60, duration: 1 },
  };

  return (
    <div className="aboutuspage-container">
      <h3>{t("aboutUsPage.title1")}</h3>
      <section className="aboutUsPage-section">
        <motion.img
          style={{ width: 300, height: 300 }}
          src="../../assets/about-us-1.svg"
          alt="About Us Illustration 1"
          {...imageAnimation}
        />
        <motion.p {...textAnimation}>{t("aboutUsPage.p1")}</motion.p>
      </section>

      <section className="aboutUsPage-section">
        <motion.p {...textAnimation}>{t("aboutUsPage.p2")}</motion.p>
        <motion.img
          style={{ width: 300, height: 300 }}
          src="../../assets/about-us-2.svg"
          alt="About Us Illustration 2"
          {...imageAnimation}
        />
      </section>

      <h3>{t("aboutUsPage.title2")}</h3>

      <section className="aboutUsPage-section">
        <motion.img
          style={{ width: 300, height: 300 }}
          src="../../assets/about-us-3.svg"
          alt="About Us Illustration 3"
          {...imageAnimation}
        />
        <motion.p {...textAnimation}>{t("aboutUsPage.p3")}</motion.p>
      </section>

      <section className="aboutUsPage-section col-section">
        <motion.p
          style={{
            minWidth: 400,
            textAlign: "center",
            maxWidth: "70%",
          }}
          {...textAnimation}
        >
          {t("aboutUsPage.p4")}
        </motion.p>
        <motion.img
          className="larger-image"
          src="../../assets/about-us-4.svg"
          alt="About Us Illustration 4"
          {...imageAnimation}
        />
      </section>
    </div>
  );
};
