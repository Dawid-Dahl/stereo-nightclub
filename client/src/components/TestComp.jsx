import React from "react";
import styled from "styled-components";

export const TestComp = () => {
	return (
		<>
			<h1>Hello world from Django!</h1>
			<Ptag>TEST</Ptag>
		</>
	);
};

const Ptag = styled.p`
	color: red;
`;
