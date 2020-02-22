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
    },
    //推荐歌单limit默认30条
    getRecommend(limit) {
        return fly.get(`personalized?limit=${limit}`)
    },
    //新歌新碟
    getNewsong() {
        return fly.get(`personalized/newsong`)
    },
    getNewAlbum() {
        return fly.get(`/top/album`)
    },
    //推荐电台
    getDjprogram() {
        return fly.get(`personalized/djprogram`)
    },
    //推荐节目
    getProgram() {
        return fly.get(`/program/recommend`)
    },

}