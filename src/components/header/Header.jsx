import "./headerStyle.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const text = t("header.h1");

  const isRtl = i18n.dir() === "rtl"; // Check if the direction is RTL

  return (
    <header className="page-header">
      <div>
        <h1
          className={`${isRtl ? "animated-text-left" : "animated-text-right"}`}
          dangerouslySetInnerHTML={{ __html: text }}
        ></h1>
        <h2 dangerouslySetInnerHTML={{ __html: t("header.h2") }}></h2>
      </div>
    </header>
  );
};

export default Header;
