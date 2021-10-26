import React, { Component } from 'react';

import Categories from '../CateAndSliConponents/categories';
import ProductItem from './productItem';
import ProductService from '../../Services/ProductService';
import Pagination from './pagination';

class products extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentPage: {
                page: 0,
                totalPage: 0,
                products: []
            },
            filters: {
                keyword: ''
            }
        }
    }

    componentDidMount() {
        var { page } = this.state.currentPage;
        var { keyword } = this.state.filters;
        ProductService.getListProduct(page, keyword).then((response) => {
            this.setState({
                currentPage: response.data
            })
        });
    }

    handlePageClick = (pageClick) => {
        var { keyword } = this.state.filters;
        ProductService.getListProduct(pageClick, keyword).then((response) => {
            this.setState({
                currentPage: response.data
            })
        });
    }

    render() {
        var { currentPage } = this.state;
        var products = currentPage.products;
        var elements = products.map(product => {
            return <ProductItem key={product.id} product={product} />
        });
        return (
            <div>
                <div className="header_slide">
                    <div className="header_bottom_left">
                        <Categories />
                    </div>
                    <div className="header_bottom_right">
                        {elements}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        onPageChange={this.handlePageClick}
                    />
                    <div className="clear" />
                </div>

            </div>
        );
    }
}

export default products;