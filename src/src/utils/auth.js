

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // 获取token
    getToken() {
        return localStorage.getItem('token');
    },

    // 保存token
    setToken(Token) {
        return localStorage.setItem('token', Token);
    },

    // 判断是否登录
    isLogined() {
        if (this.getToken()) {
            return true;
        } else {
            return false;
        } 
    },

    // 清除token
    clearToken() {
        localStorage.removeItem('token');
    }
}
