// initial state
// shape: [{ id, quantity }]
const state = {}

// getters
const getters = {
  rpc: state => state.rpc
}

// actions
const actions = {}

// mutations
const mutations = {
  setRPC (state, rpc) {
    state.rpc = rpc
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
