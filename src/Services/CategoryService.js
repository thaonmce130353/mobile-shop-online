import axios from "axios";
import * as API from '../constants/API';

class CategoryService {
    getAllCategories() {
        return axios.get(API.ALL_CATEGORIES);
    }
}

export default new CategoryService();