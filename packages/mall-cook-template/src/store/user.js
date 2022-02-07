/*
 * @Description: What's this for
 * @Autor: WangYuan
 * @Date: 2022-02-07 09:50:30
 * @LastEditors: WangYuan
 * @LastEditTime: 2022-02-07 10:00:20
 */
export default {
  state: {
    token: '', // 模拟真实登录
  },
  getters: {
    token: state => state.token,
    isLogin: state => state.token == undefined
  },
  mutations: {
    // 设置token
    setToken (state, token) {
      state.token = token
    }
  }
}
