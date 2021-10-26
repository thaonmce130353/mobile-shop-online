import axios from "axios";
import * as API from '../constants/API';
import * as paginationSetting from '../constants/Pagination';

class ProductService {
    getListProduct(page, keyword) {
        return axios.get(API.ALL_PRODUCT + "?keyword=" + keyword + "&page=" + page + "&limit=" + paginationSetting.PAGE_LIMIT);
    }
}

export default new ProductService();