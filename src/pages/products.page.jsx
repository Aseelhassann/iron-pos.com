import "./products.style.css";
import { useTranslation } from "react-i18next";
import { products } from "../components/products/Products";
import { Card } from "../components/products/Products";
import { useState } from "react";
import ProductModal from "../components/product-modal/ProductModal";

export const ProductsPage = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {openModal && (
        <ProductModal
          onClose={() => setOpenModal(false)}
          product={selectedProduct}
        />
      )}
      <div className="productspage-container">
        {products.map((product, index) => (
          <Card
            onClick={() => {
              setSelectedProduct(product);
              setOpenModal(true);
            }}
            clickAble
            content={product}
            t={t}
            key={index}
          />
        ))}
      </div>
    </>
  );
};
