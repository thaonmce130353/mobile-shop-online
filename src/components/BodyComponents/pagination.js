import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

Pagination.propTypes = {
    onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null,
}
function Pagination(props) {
    const { onPageChange, currentPage } = props;
    return (
        <div>
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={currentPage.totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName={'content-pagenation'}
                nextClassName={'next-page'}
                previousClassName={'previous-page'}
                pageClassName={'page-element'}
                activeClassName={'active'}
            />
        </div>
    );

    function handlePageClick(pageClick) {
        var page = pageClick.selected;
        if (onPageChange) {
            onPageChange(page);
        }
    }
}

export default Pagination;