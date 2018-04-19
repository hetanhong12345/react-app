// author: DELL
// created:2018/4/19 13:33
/**
 * Created by hekk on 2017/5/28.
 */
import axios from 'axios';
let serverUrl = 'http://127.0.0.1:3000';

axios.defaults.baseURL = serverUrl;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let query = data => {
    let str = [];
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (typeof data[key] != 'object') {
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent((data[key])));
            } else {
                str.push(encodeURIComponent(key) + '=' + encodeURIComponent((JSON.stringify(data[key]))));
            }
        }
    }
    return str.join('&');
};
let get = (path, data = {}) => {
    data.t = new Date().getTime();
    return axios({
        url: path,
        method: 'get',
        params: data,
    }).then(response => {
        if (response.status == 200) {
            return response.data;
        }
        if (response.status == 503) {
            return {};
        }
        return {};
    }).then(data => {
        console.log(path);
        console.log(data);
        return data;

    }).catch(err => {
        console.error('error,--->', err);
    });
};

let post = (path, data = {}) => {
    return axios({
        url: path,
        method: 'post',
        params: {
            t: new Date().getTime()
        },
        data:  query(data)
    }).then(response => {
        if (response.status == 200) {
            return response.data
        }
        if (response.status == 503) {
            return {};
        }
        return {};
    }).then(data => {
        console.log(path);
        console.log(data);
        return data;
    }).catch(err => {
        console.error('error,--->', err);
    });
};
const $api = {
    get,
    post,
    serverUrl
};
export default $api;

