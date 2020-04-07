import router from './routes'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getRoles } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: true })

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  if (whiteList.includes(to.path)) {
    next()
    NProgress.done()
    return
  }
  let roles = store.getters.roles;
  if (roles && roles.length > 0) {
    next()
  } else {
    let roles = getRoles()
    if (!roles || roles.length == 0) {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
      return
    }
    await store.commit('user/SET_ROLES', [roles])
    const accessRoutes = await store.dispatch("permission/generateRoutes", [roles]);
    router.addRoutes(accessRoutes);
    next({ ...to, replace: true })
  }
})

router.afterEach(() => {
  NProgress.done()
})