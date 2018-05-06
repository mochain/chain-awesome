import Vue from 'vue'

// initial state
// shape: [{ id, quantity }]
const state = {
  navs: []
}

// getters
const getters = {
  navs: state => state.navs
}

// actions
const actions = {
  fetchNavs: function ({commit, state}) {
    return new Promise((resolve, reject) => {
      // 加载导航信息
      const navURL = '/static/nav/cn.json'
      Vue.http.get(navURL)
        .then(response => response.json())
        .then((data) => {
          commit('setNavRes', {data})
          resolve()
        })
        .catch(function (err) {
          var msg = err.status + ':' + err.statusText
          reject(msg)
        })
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
