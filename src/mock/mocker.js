import Mock from 'mockjs'

// 创建一个字符串mock
export function stringFunction() {
  return Mock.mock({
    "str|1-10": '#$@'
  })
}
const templete = {
  'data|1-4': [{
    'title': '@title',
    'article': '@article'
  }]
}
export default Mock.mock('http://www.zhangfeng.com/api/mockData', templete)

