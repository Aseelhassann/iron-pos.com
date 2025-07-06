import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "./contactUsStyle.css";

const initFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
  consent: false,
};

const ContactUs = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ ...initFormData });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        "service_v4oi66u",
        "template_3jnsslx",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          message: formData.message,
        },
        "u_YfIJ4PkpTUOGXon"
      )
      .then(
        (result) => {
          alert(t("contact.successMessage"));
          setFormData({ ...initFormData });
        },
        (error) => {
          alert(t("contact.errorMessage"));
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form className="contact-us-container" onSubmit={handleSubmit}>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h3>{t("contact.title")}</h3>
      </motion.div>
      <div className="contact-box">
        <div className="form-container">
          <div className="form-row">
            <div className="input-container">
              <label htmlFor="firstName">{t("contact.firstName")}</label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="lastName">{t("contact.lastName")}</label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-container">
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="phoneNumber">{t("contact.phoneNumber")}</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-container text-area">
              <label htmlFor="message">{t("contact.message")}</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          {/* <div className="form-row">
            <div className="input-container">
              <label htmlFor="consent">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  required
                />
                {t("contact.consent")}
              </label>
            </div>
          </div> */}
          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? t("contact.sending") : t("contact.button")}
          </button>
        </div>
        <img src="../../assets/contact-us.png" alt={"image"} />
      </div>
    </form>
  );
};

export default ContactUs;
