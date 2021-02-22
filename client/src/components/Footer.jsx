import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<>
			<FooterWrapper>
				<FooterInfo>Copyright © 2021</FooterInfo>
				<FooterInfo>47 CHandos Place, London, WX2N 4HS</FooterInfo>
				<FooterInfo>020 7836 0221</FooterInfo>
				<FooterInfo>info@soundoflondon.com</FooterInfo>
			</FooterWrapper>
		</>
	);
};

const FooterWrapper = styled.footer``;
const FooterInfo = styled.p``;

export default Footer;
