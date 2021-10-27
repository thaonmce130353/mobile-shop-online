import axios from "axios";
import * as API from '../constants/API';
import * as paginationSetting from '../constants/Pagination';

class ProductService {
    getListProduct(page, keyword, categoryId) {
        return axios.get(API.ALL_PRODUCT + "?categoryId=" + categoryId + "&keyword=" + keyword + "&page=" + page + "&limit=" + paginationSetting.PAGE_LIMIT);
    }
}

export default new ProductService();