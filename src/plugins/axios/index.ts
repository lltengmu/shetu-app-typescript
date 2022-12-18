import Axios from "./Axios";

//初始化请求实例
const Http = new Axios({
    baseURL:"http://localhost:8000/api/",
    timeout:10000,
})
export default Http;