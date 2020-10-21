import BaseAPI from './base-api.js'
import Request from '../common/request/index';
const request = Request();

export default class AuthAPI extends BaseAPI {
    constructor(arg) {
        super(arg);
        this.pathURL = '/lk-truck-webfront/auth';
    }
    
    getRequest() {
        return request;
    }
}
