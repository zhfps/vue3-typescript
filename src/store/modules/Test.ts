interface State {
  test: string;
  id: number;
}

const Test: State = {
  test: 'test',
  id: 0
}

const getters = {
  test: (state: State) => state.test,
  id: (state: State) => state.id
}

const mutations = {
  TEST(state: State, payload: string) {
    state.test = payload
  },
  ID(state: State, payload: number) {
    state.id = payload
  }
}

const actions = {
  setTest(context: any, payload: string) {
    context.commit('TEST', payload)
  },
  addId(context: any, payload: number) {
    context.commit('ID', payload)
  }
}

export default {
  namespaced: true,
  state: Test,
  getters,
  mutations,
  actions
}
