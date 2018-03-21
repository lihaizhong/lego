/**
 * @author Sky
 * @email 854323752@qq.com
 * @create date 2018-03-21 10:24:42
 * @modify date 2018-03-21 10:24:42
 * @desc 前后端交互配置文件
*/

/**
 * 请求前配置
 * @param {object} config
 */
// function _requestConfig (config) {
//   return config
// }

/**
 * 返回后配置
 * @param {object} response
 */
// function _responseConfig (response) {
//   return response
// }

/**
 * 默认的Axios请求配置
 */
function defaultAxios () {
  // axios.defaults.baseURL = '/api'

  //---- header ----//
  let headers = axios.defaults.headers
  //-- common
  headers.common['X-Requested-With'] = 'XMLHttpRequest'
  headers.common['Content-Type'] = 'application/x-www-form-urlencoded'

  //-- post
  headers.post['Content-Type'] = 'application/json'

  //---- interceptors ----//
  // axios.interceptors.request.use(_requestConfig, (err) => Promise.reject(err))
  // axios.interceptors.response.use(_responseConfig, (err) => Promise.reject(err))
}

export default () => {

  const configList = [defaultAxios]

  for (let config of configList) {
    config()
  }
}
