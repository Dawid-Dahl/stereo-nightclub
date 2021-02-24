import React, {useState, useEffect} from "react";
import Header from "./Header";
import ProductGrid from "./ProductGrid";
import Paginator from "./Paginator";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import styled from "styled-components";
import Product from "./Product";

const range = (s, e) => (e <= s ? [e] : [...range(s, e - 1), e]);

const dummyProduct = (id, title, image, description, price) => ({
	id,
	title,
	image,
	description,
	price,
});

const dummyData = range(1, 50).map((x, i) =>
	dummyProduct(
		i,
		"The best drink",
		"https://bit.ly/3kb2nPg",
		"Information about the drink",
		15.99
	)
);

const ProductsPage = () => {
	const [products, setProducts] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);

	useEffect(() => {
		setProducts(dummyData);
	}, []);

	const productsPerPage = 9;
	const pagesVisited = pageNumber * productsPerPage;
	const pageCount = Math.ceil(products.length / productsPerPage);

	const displayProducts = products =>
		products
			.slice(pagesVisited, pagesVisited + productsPerPage)
			.map(({id, title, image, description, price}) => (
				<Product
					key={id}
					title={title}
					image={image}
					description={description}
					price={price}
				/>
			));

	return (
		<Wrapper>
			<Header />
			<ProductGrid displayProducts={displayProducts} products={products} />
			<Paginator pageCount={pageCount} setPageNumber={setPageNumber} />
			<GetInTouch />
			<Footer />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--main-color);
	height: 100%;
`;

export default ProductsPage;
