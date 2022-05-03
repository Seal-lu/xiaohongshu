import axios from "axios";
// 配置axios
const http = axios.create({
    baseURL:'/api',
    timeout:1000
})
// 拦截器
// 请求拦截器
http.interceptors.request.use(config=>{
    return config
}, err =>{
    return Promise.reject(err)
})
// 响应拦截器
http.interceptors.response.use(res=>{
    return res.data
},err=>{
    return Promise.reject(err)
})

export default http