import AboutUs from "../components/about-us/AboutUs";
import WorkWith from "../components/work-with/WorkWith";
import Services from "../components/services/Services";
import Products from "../components/products/Products";
import ContactUs from "../components/contact-us/ContactUs";

export const HomePage = () => {
  return (
    <>
      <a id="home"></a>
      <a id="about"></a>
      <AboutUs />
      <WorkWith />
      <a id="services"></a>
      <Services />
      <Products />
      <a id="contact"></a>
      <ContactUs />
    </>
  );
};
