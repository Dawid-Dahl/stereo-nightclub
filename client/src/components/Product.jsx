import React from "react";
import styled from "styled-components";

const Product = () => {
	return (
		<Wrapper>
			<Image />
			<h1>Title</h1>
			<p>Information</p>
		</Wrapper>
	);
};

const Wrapper = styled.div``;
const Image = styled.img``;

export default Product;
