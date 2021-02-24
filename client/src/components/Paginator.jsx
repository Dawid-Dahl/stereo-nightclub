import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import styled from "styled-components";

const Paginator = ({pageCount, setPageNumber}) => {
	const changePage = ({selected}) => setPageNumber(selected);

	return (
		<Wrapper>
			<ReactPaginate
				previousLabel={"<  Previous"}
				nextLabel={"Next  >"}
				pageCount={pageCount}
				onPageChange={changePage}
				marginPagesDisplayed={1}
				containerClassName={"paginator-container"}
				previousLinkClassName={"previous-btn"}
				nextLinkClassName={"next-btn"}
				disabledClassName={"pagination-disabled"}
				activeClassName={"pagination-active"}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
`;

Paginator.propTypes = {
	pageCount: PropTypes.number.isRequired,
	setPageNumber: PropTypes.number.isRequired,
};

export default Paginator;
