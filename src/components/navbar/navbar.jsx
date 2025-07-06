import { useTranslation } from "react-i18next";
import {
  ContactBtn,
  LinksContainer,
  Nav,
  NavActions,
  NavContent,
  NavLinks,
  NavLogo,
  HamburgerWrapper,
} from "./styled";
import { Select } from "antd";
import { useState, useEffect } from "react";
import { HamburgerMenu } from "../hamburger/Hamburger";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const { t, i18n } = useTranslation();
  const [lan, setLan] = useState(localStorage.getItem("lan") ?? "EN");
  const [scrolled, setScrolled] = useState(false);
  const [navExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const deviceLanguage = navigator.language || navigator.userLanguage;
    const languageCode = deviceLanguage.split("-")[0];
    setLan(languageCode.toUpperCase());
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsExpanded(false);
    }
  };

  const handleLanChange = (lng) => {
    setLan(lng === "he" ? "Hebrew" : "English");
    i18n
      .changeLanguage(lng)
      .then(() => {
        localStorage.setItem("lan", lng);
        console.log(`Language changed to: ${lng}`);
      })
      .catch((err) => console.error("Language change error:", err));
  };

  return (
    <Nav
      className={`${scrolled ? "blurred" : ""} ${
        navExpanded ? "expanded" : ""
      }`}
    >
      <NavContent>
        <NavLogo to="/">
          <span>Iron Pos </span>
          dining done right
        </NavLogo>
        <NavLinks className={navExpanded ? "expanded" : ""}>
          <LinksContainer>
            <NavItem
              handleIsExpanded={() => setIsExpanded(false)}
              text={t("Home")}
              targetId={"home"}
              to="/"
            />
            <NavItem
              handleIsExpanded={() => setIsExpanded(false)}
              text={t("About Us")}
              targetId={"about"}
              to="/about-us"
            />
            <NavItem
              handleIsExpanded={() => setIsExpanded(false)}
              text={t("Services")}
              targetId={"services"}
            />
            <NavItem
              handleIsExpanded={() => setIsExpanded(false)}
              text={t("Products")}
              targetId={"products"}
              to="/products"
            />
            <ContactBtn
              style={{ display: "none" }}
              className="mobile-btn"
              onClick={scrollToContact}
            >
              {t("Contact Us")}
            </ContactBtn>
            <Select
              className="mobile-select"
              defaultValue={lan}
              style={{ display: "none" }}
              onChange={handleLanChange}
              options={[
                { value: "en", label: "EN" },
                { value: "he", label: "HE" },
              ]}
            />
          </LinksContainer>
        </NavLinks>
        <NavActions>
          <ContactBtn onClick={scrollToContact}>{t("Contact Us")}</ContactBtn>
          <Select
            style={{ zIndex: 99999 }}
            defaultValue={lan}
            onChange={handleLanChange}
            options={[
              { value: "en", label: "EN" },
              { value: "he", label: "HE" },
            ]}
          />
          <HamburgerWrapper>
            <HamburgerMenu
              isOpen={navExpanded}
              isExpanded={(expanded) => setIsExpanded(expanded)}
            />
          </HamburgerWrapper>
        </NavActions>
      </NavContent>
    </Nav>
  );
};

const NavItem = ({ text, targetId, handleIsExpanded, to = "" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      handleIsExpanded(false);
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === "/products" || pathname === "/about-us") {
      navigate("/");
      setTimeout(handleNavigate, 200);
    } else {
      handleNavigate();
    }
  };

  return (
    <li>
      {to ? (
        <Link onClick={handleIsExpanded} to={to}>
          {text}
        </Link>
      ) : (
        <a className="nav-link" href={`#${targetId}`} onClick={handleClick}>
          {text}
        </a>
      )}
    </li>
  );
};

export default Navbar2;
