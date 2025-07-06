import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import Header from "./components/header/Header";
import Navbar from "./components/navbar/navbar";
import { useTranslation } from "react-i18next";
import Footer from "./components/footer/Footer";
import AppLoader from "./components/app-loader/AppLoader";
import { AboutUsPage } from "./pages/aboutUs.page";
import { HomePage } from "./pages/home.page";
import ScrollToTop from "./components/scrollTop.component";
import { ProductsPage } from "./pages/products.page";
import { Helmet } from "react-helmet";

function App() {
  const { i18n } = useTranslation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const dir = i18n.language === "he" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

function MetaPixel() {
  return (
    <Helmet>
      <script>{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '573384189084006');
        fbq('track', 'PageView');
      `}</script>
      <noscript>{`
        <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=573384189084006&ev=PageView&noscript=1"
        />
      `}</noscript>
    </Helmet>
  );
}

  return (
   
    <Router>
   <MetaPixel />
      <ScrollToTop />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 60,
        }}
      >
        {showLoader ? (
          <AppLoader />
        ) : (
          <>
            <Navbar />
            <a
              id="home"
              style={{
                display: "block",
                visibility: "hidden",
                height: 0,
                position: "absolute",
                top: -100,
              }}
            ></a>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
