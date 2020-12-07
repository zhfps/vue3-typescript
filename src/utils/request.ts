import axios from 'axios'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 3000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) =>
    // do something before request is sent
  // if (store.getters.token) {
  // let each request carry token
  // please modify it according to the actual situation
    //  config.headers['AccessToken'] = getToken()
  // }
    config,
  (error) =>
    // do something with request error
    Promise.reject(error)

)

// response interceptor
service.interceptors.response.use(
  (response) => {
    // dataAxios 是 axios 返回数据中的 data
    return response
    const dataAxios = response.data
    const { success } = dataAxios
    // 根据 code 进行判断
    if (success) {
      // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 admin 请求最新版本
      return dataAxios
    }
    // if (dataAxios.error.validationErrors != null) {
    //   Notification({
    //     message: dataAxios.error.validationErrors[0].message,
    //     type: 'error',
    //     position: 'bottom-right',
    //     duration: 3 * 1000
    //   })
    // } else {
    //   Notification({
    //     message: dataAxios.error.message,
    //     type: 'error',
    //     position: 'bottom-right',
    //     duration: 3 * 1000
    //   })
    // }
  },
  (error) =>
  // if (error.response.data.error.validationErrors != null) {
  //   Notification({
  //     message: error.response.data.error.validationErrors[0].message,
  //     type: 'error',
  //     position: 'bottom-right',
  //     duration: 3 * 1000
  //   })
  // } else if (error.response.status === 401) {
  //   store.dispatch('user/resetToken').then(() => {
  //     router.push('/')
  //   })
  // } else {
  //   const message = 'error' in error.response.data ? error.response.data.error.message : '未知错误'
  //   Notification({
  //     message: message,
  //     type: 'error',
  //     position: 'bottom-right',
  //     duration: 3 * 1000
  //   })
  // }

    Promise.reject(error)

)

export default service
