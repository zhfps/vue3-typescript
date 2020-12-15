import Mock from 'mockjs'
const listData = function () {
  const data = {
    code: 200,
    data: '测试数据',
    error: null
  }

  return data
}
// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('http://localhost:2345/test', 'post', listData())
