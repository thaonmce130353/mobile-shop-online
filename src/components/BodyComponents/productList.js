import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductService from '../../Services/ProductService';

import ProductItem from './productItem';
import Categories from '../CateAndSliConponents/categories';
import Search from '../HeaderComponents/search';
import Pagination from './pagination';

ProductList.propTypes = {

};

function ProductList(props) {
    const [currentPage, setCurrentPage] = useState({
        page: 0,
        totalPage: 0,
        products: []
    });

    const [filters, setFilters] = useState({
        keyword: ''
    });

    useEffect(() => {
        requestGetProducts(currentPage.page, filters.keyword);
    }, []);

    useEffect(() => {
        console.log("AAAAAAAA")
        requestGetProducts(currentPage.page, filters.keyword);
    }, [filters]);

    var { products } = currentPage;
    var elements = products.map(product => {
        return <ProductItem key={product.id} product={product} />
    });

    return (
        <div>
            <div className="header_slide">
                <div className="header_bottom_left">
                    <Categories />
                </div>
                <div className="search_form">
                    <Search onSubmit={handleSearch} />
                </div>
                <div className="header_bottom_right">
                    {elements}
                </div>
                <Pagination
                    currentPage={currentPage}
                    onPageChange={handlePageClick}
                />
                <div className="clear" />
            </div>

        </div>
    );

    function requestGetProducts(page, keyword) {
        ProductService.getListProduct(page, keyword).then((response) => {
            setCurrentPage(response.data)
        });
    }
    function handlePageClick(pageClick) {
        var { keyword } = filters;
        ProductService.getListProduct(pageClick, keyword).then((response) => {
            setCurrentPage(response.data)
        });
    }

    function handleSearch(formValues) {
        setFilters({
            keyword: formValues.keyword,
        })
    }
}

export default ProductList;