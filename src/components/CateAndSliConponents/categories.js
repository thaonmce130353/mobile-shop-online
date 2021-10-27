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

    onClickCategory = (category) => {
        this.props.onHandleClickCategory(category);
    }

    render() {
        var { categories, url } = this.state;
        var items = categories.map((category) => {
            return <li key={category.id}>
                <Link
                    to={`${url}?category=${category.name}`}
                    onClick={() => this.onClickCategory(category)}
                >
                    {category.name}
                </Link>
            </li>
        });

        return (
            <div className="categories">
                <ul>
                    <h3>Categories</h3>
                    <li>
                        <Link
                            to={url}
                            onClick={() => this.onClickCategory({ id: -1 })}
                        >
                            All Categories
                        </Link>
                    </li>

                    {items}
                </ul>
            </div>
        );
    }
}

export default categories;