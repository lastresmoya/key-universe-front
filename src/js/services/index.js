import axios from 'axios';
import ApiService from './api';
import ProductInfoService from './productInfo';

const apiService = ApiService(axios);
const productInfoService = ProductInfoService(apiService);

export {
    apiService,
    productInfoService
};
