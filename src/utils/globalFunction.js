import Vue from 'vue'

import dialog from './dialogController'
import query from './query'
import dayjs from 'dayjs'

export function initGlobalFunction() {
  Object.defineProperties(Vue.prototype, {
    '$dayjs': { value: dayjs },
    '$dialog': { value: dialog },
    '$query': { value: query }
  })
}