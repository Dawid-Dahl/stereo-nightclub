import React from "react";
import Product from "./Product";
import styled from "styled-components";

const range = (s, e) => (e <= s ? [e] : [...range(s, e - 1), e]);

const dummyProduct = (id, title, image, description, price) => ({
	id,
	title,
	image,
	description,
	price,
});

const dummyData = range(1, 9).map((x, i) =>
	dummyProduct(
		i,
		"The best drink",
		"https://bit.ly/3kb2nPg",
		"Information about the drink",
		15.99
	)
);

export const ProductGrid = () => {
	return (
		<Wrapper>
			<Grid>
				{dummyData.map(({id, title, image, description, price}) => {
					return (
						<Product
							key={id}
							title={title}
							image={image}
							description={description}
							price={price}
						/>
					);
				})}
			</Grid>
		</Wrapper>
	);
};

const Wrapper = styled.div``;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 0.5em;
	align-items: center;
	justify-content: center;
	margin: 1em 2em;
`;

export default ProductGrid;
