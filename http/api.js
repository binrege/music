//封装所有的请求
import fly from "./index"
export default {
    //获取轮播图
    getBanner() {
        return fly.get('banner')
    },
    //登陆
    // login(params){
    //     return fly.post('login',parmas)
    // }
    login({ username, password }) {
        return fly.post('login', {
            username,
            password
        })
    }
}