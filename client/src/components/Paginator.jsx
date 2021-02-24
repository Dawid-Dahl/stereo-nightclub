import React from "react";
import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Paginator = ({pageCount, setPageNumber}) => {
	const changePage = ({selected}) => setPageNumber(selected);

	return (
		<>
			<ReactPaginate
				previousLabel={"Previous"}
				nextLabel={"Next"}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={"paginator-container"}
				previousLinkClassName={"previous-btns"}
				nextLinkClassName={"next-btn"}
				disabledClassName={"pagination-disabled"}
				activeClassName={"pagination-active"}
			/>
		</>
	);
};

Paginator.propTypes = {
	pageCount: PropTypes.number.isRequired,
	setPageNumber: PropTypes.number.isRequired,
};

export default Paginator;
