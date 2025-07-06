import React, { useEffect } from "react";
import { MoveRight, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./ProductModal.css";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2 },
  },
};

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orig;
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={onClose}
        variants={backdrop}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="product-modal"
          onClick={(e) => e.stopPropagation()}
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <XCircle className="modal-close-btn" onClick={onClose} />
          <div className="modal-body">
            <img
              className="modal-img"
              src="https://firebasestorage.googleapis.com/v0/b/general-ebf2c.firebasestorage.app/o/iron-pose%2Fproduct-1.png?alt=media&token=2cb6779a-48b8-47dc-9c98-56c1e9797eb3"
            />
            <div className="modal-content">
              <h3>
                trust word{" "}
                <span className="arrow-span">
                  <MoveRight />
                </span>
              </h3>
              <p className="modal-product-description">
                daksmkm lsdmg kmsafk malf,oek ingdksn gmdsa fk mgksdm gkmsa g
              </p>
              <div className="modal-product-details">
                <ul>
                  <li>Size: 12</li>
                  <li>Brand name: nothing </li>
                  <li>Color: red</li>
                  <li>Product line: EMS</li>
                  <li>Material: dasdasd</li>
                </ul>
              </div>
            </div>
            <button className="modal-bottom-btn">Request a Quote</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
