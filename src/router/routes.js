import store from '@/state/store'

export default [
  {
    path: '/',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/project/project-list'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/account/login'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'default' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('./views/account/register'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'default' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: () => import('./views/account/forgot-password'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'default' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch('auth/logOut')
        } else {
          store.dispatch('authfack/logout')
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some(
          (route) => route.push('/login')
        )
        // Navigate back to previous page, or home as a fallback
        next(authRequiredOnPreviousRoute ? { name: 'default' } : { ...routeFrom })
      },
    },
  },
  {
    path: '/what-is-fms',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/background/what-is-fms'),
  },
  {
    path: '/why-shanta',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/background/why-shanta'),
  },
  {
    path: '/policies/building-manual',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/policies/building-manual'),
  },
  {
    path: '/policies/by-laws',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/policies/by-laws'),
  },
  {
    path: '/policies/do-donts',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/policies/do-donts'),
  },
  {
    path: '/policies/maintainance',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/policies/maintainance'),
  },
  {
    path: '/supplier/fm-service',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/supplier/fm-service'),
  },
  {
    path: '/supplier/mep-service',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/supplier/mep-service'),
  },
  {
    path: '/supplier/others',
    name: 'default',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/supplier/others'),
  },
  {
    path: '/task/list',
    name: 'taskList',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/task/task-list'),
  },
  {
    path: '/task/create',
    name: 'taskCreate',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/task/create-task'),
  },
  // project
  {
    path: '/project/single',
    name: 'projectSingle',
    meta: {
      authRequired: true,
    },
    component: () => import('./views/project/project-single'),
  },
]
