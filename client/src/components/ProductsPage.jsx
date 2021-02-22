import React from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import PageSelector from "./PageSelector";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import styled from "styled-components";

const ProductsPage = () => {
	return (
		<Wrapper>
			<Header />
			<ProductGrid />
			<PageSelector />
			<GetInTouch />
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--main-color);
	height: 100vh;
`;

export default ProductsPage;
