import "./aboutUsStyle.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="container">
      {/* Animate the left side content */}
      <motion.div
        className="left-side"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, duration: 1 }}
      >
        <h3>{t("aboutus.header")}</h3>
        <p>{t("aboutus.para")}</p>
      </motion.div>

      {/* Animate the image */}
      <motion.img
        className="about-us-image"
        src={"../../assets/about-us.png"}
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, duration: 1, delay: 0.2 }}
      />
    </section>
  );
};

export default AboutUs;
