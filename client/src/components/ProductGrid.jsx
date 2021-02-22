import React from "react";
import Product from "./Product";

const range = (s, e) => (e <= s ? [e] : [...range(s, e - 1), e]);

const dummyProduct = {image: "https://bit.ly/3kb2nPg", title: "Title", information: "Information"};

const dummyData = range(1, 20).map(x => dummyProduct);

export const ProductGrid = () => {
	return <></>;
};

export default ProductGrid;
