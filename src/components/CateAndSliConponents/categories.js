import React, { Component } from 'react';
import CategoryService from '../../Services/CategoryService';
import { Link } from 'react-router-dom';

class categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            url: '/products'
        }
    }

    componentDidMount() {
        CategoryService.getAllCategories().then((response) => {
            this.setState({
                categories: response.data
            })
        });
    }

    render() {
        var { categories, url } = this.state;
        var items = categories.map((category) => {
            return <li key={category.id}>
                        <Link to={`${url}?cateId=${category.id}`}>{category.name}</Link>
                    </li>
        });
        return (
            <div className="categories">
                <ul>
                    <h3>Categories</h3>
                    {items}
                </ul>
            </div>
        );
    }
}

export default categories;