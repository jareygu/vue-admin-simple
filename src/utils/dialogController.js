import store from '../store'

export default {
  // 打开弹框
  open: function (option) {
    return new Promise((resolve, reject) => {
      store.dispatch('openDialog', option)
      // 保存promise到store
      store.commit('SAVE_PROMISE', { resolve, reject })
    })
  },
  // 取消
  close: function (_o) {
    store.dispatch('closeDialog', _o);
  },
}

