import axios from 'axios'


const $axios = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

$axios.interceptors.request.use(config => {
    // console.log(config)
    config.headers.token = window.localStorage.getItem('token')
    // 在最后必须 return config
    return config
})

// 添加响应拦截器
$axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default $axios