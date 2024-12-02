import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductItem from "./ProductItem";
import ImageView from "./ImageView";
import Modal from "./Modal";
import ProductOverview from "./ProductOverview";

const API_URL = "https://dummyjson.com";

const Product = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  const showImg = (pro) => {
    console.log(pro)
    setModalData(pro);
  }

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_URL}/products`)
        .then((res) => (console.log(res.data), setData(res.data.products)))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
      
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <>
      <h2 className="hidden" id="marketplace">Products</h2>
      {loading && <p className="text-center text-3xl"> Loading...</p>}
      <div className="container grid grid-cols-4 gap-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-auto px-10">
        <ProductItem data={data} func={showImg}></ProductItem>
      </div>
      {modalData && (
        <Modal close={() => setModalData(null)}>
          {/* <ImageView data={modalData} /> */}
          <ProductOverview data={modalData}/>
        </Modal>
      )}
    </>
  );
};

export default Product;
