import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Product = ({title, image, description, price, ingredients}) => {
	return (
		<Wrapper>
			<Image src={image} />
			<h1>{title.toUpperCase()}</h1>
			<p>{description}</p>
		</Wrapper>
	);
};

Product.propTypes = {
	title: PropTypes.string.isRequired,
	image: PropTypes.string,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	ingredients: PropTypes.array.isRequired,
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		margin: 0.4em 0 0.2em 0;
		font-size: 0.65em;
		text-align: center;
		cursor: pointer;
	}

	p {
		margin: 0;
		text-align: center;
		color: var(--text-color-dark);
		font-size: var(--font-size-small);
	}
`;
const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
	cursor: pointer;
`;

export default Product;
