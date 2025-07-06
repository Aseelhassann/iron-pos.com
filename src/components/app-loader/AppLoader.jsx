import { motion } from "framer-motion";
import "./style.css";

const AppLoader = () => {
  return (
    <div className="app-loader">
      <motion.img
        src="../../assets/logo-no-background.png"
        alt="App Logo"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="app-logo"
      />
    </div>
  );
};

export default AppLoader;
