const state = {
  visible: false,
  title: '',
  component: null,
  props: null,
  promise: null,
  option: null
}

const mutations = {
  CLOSE_DIALOG: state => {
    state.visible = false;
  },
  OPEN_DIALOG: (state, titleName) => {
    state.title = titleName;
    state.visible = true;
  },
  IMPORT_COMPONENT: (state, c) => {
    state.component = c
  },
  DESTROY_COMPONENT: state => {
    state.component = null;
  },
  TRANSFER_PROPS: (state, props) => {
    state.props = props;
  },
  SAVE_PROMISE: (state, resolve) => {
    state.promise = resolve;
  },
  FINISH_PROMISE: (state, confirmed) => {
    state.promise.resolve(confirmed)
  },
  SET_OPTION: (state, option) => {
    state.option = option;
  }
}

const actions = {
  closeDialog({ commit }, confirmed = false) {
    commit('CLOSE_DIALOG');
    commit('FINISH_PROMISE', confirmed);
  },
  openDialog({ commit }, option) {
    const { title, component, props, ...opt } = option
    commit('OPEN_DIALOG', title || '')
    commit('IMPORT_COMPONENT', component)
    commit('TRANSFER_PROPS', props)
    commit('SET_OPTION', opt)
  },
  destroyComponent({ commit }) {
    commit('DESTROY_COMPONENT')
  }
}

export default {
  state,
  mutations,
  actions
}

