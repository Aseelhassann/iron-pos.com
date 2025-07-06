import { useTranslation } from "react-i18next";
import "./footerStyle.css";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToContact = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-upper">
        <div className="footer-upper-first">
          <a className="footer-logo" href="#">
            <span>Iron Pos </span>
            dining done right
          </a>
          <p className="footer-logo-p">{t("footer.p")}</p>
        </div>
        <div className="footer-both-columns">
          <div className="footer-upper-first">
            <p className="footer-header">{t("footer.menu")}</p>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="footer-navigation-buttons"
              onClick={() => scrollToContact("home")}
            >
              {t("footer.home")}
            </motion.a>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="footer-navigation-buttons"
              onClick={() => scrollToContact("about")}
            >
              {t("footer.aboutUs")}
            </motion.a>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
              className="footer-navigation-buttons"
              onClick={() => scrollToContact("solutions")}
            >
              {t("footer.solutions")}
            </motion.a>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="footer-navigation-buttons"
              onClick={() => scrollToContact("services")}
            >
              {t("footer.services")}
            </motion.a>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="footer-navigation-buttons"
              onClick={() => scrollToContact("products")}
            >
              {t("footer.products")}
            </motion.a>
          </div>
          <div className="footer-upper-first">
            <p className="footer-header">{t("footer.products")}</p>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Iron Screens
            </motion.a>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Iron Payment Reader
            </motion.a>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              Iron Tablets
            </motion.a>
          </div>

          <div className="footer-upper-first second-row">
            <p className="footer-header">{t("footer.contact")}</p>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="footer-navigation-buttons"
              href="tel:+972542442074"
            >
              +972 54 244 2074
            </motion.a>
            <motion.a
              initial={{ x: "5%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              viewport={{ once: true, amount: 0.2 }}
              className="footer-navigation-buttons"
              href="mailto:Info@iron-pos.com"
            >
              Info@iron-pos.com
            </motion.a>
          </div>
        </div>
      </div>
      <div className="footer-social-media">
        <a
          href="https://wa.me/+97251-558-3826"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={30} color="green" className="social-icon" />
        </a>
        <a
          href="https://facebook.com/yourPage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF size={30} color="green" className="social-icon" />
        </a>
        <a
          href="https://instagram.com/yourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={30} color="green" className="social-icon" />
        </a>
        <a
          href="https://linkedin.com/in/yourProfile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn size={30} color="green" className="social-icon" />
        </a>
      </div>
      <div className="footer-bottom">
        <p>Powered By BoldBrandz</p>
      </div>
    </footer>
  );
};

export default Footer;
