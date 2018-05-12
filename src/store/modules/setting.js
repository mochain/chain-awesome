// import Vue from 'vue'
import navs from '@/assets/nav/cn.json'
// initial state
// shape: [{ id, quantity }]
const state = {
  navs: navs
}

// getters
const getters = {
  navs: state => state.navs
}

// actions
const actions = {
  fetchNavs: function ({commit, state}) {
    return new Promise((resolve, reject) => {
      // 直接导入而不是异步加载，在分离资源文件后再近些异步加载
      resolve()
      // // 加载导航信息
      // const navURL = '/static/nav/cn.json'
      // Vue.http.get(navURL)
      //   .then(response => response.json())
      //   .then((data) => {
      //     commit('setNavRes', {data})
      //     resolve()
      //   })
      //   .catch(function (err) {
      //     var msg = err.status + ':' + err.statusText
      //     reject(msg)
      //   })
    })
  }
}

// mutations
const mutations = {
  setNavRes (state, {data}) {
    state.navs = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
