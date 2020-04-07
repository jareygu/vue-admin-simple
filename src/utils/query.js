// 生成url参数的方法
export default function (options) {
  const query = options instanceof Object ? options : false
  if (!query || Object.keys(query).length == 0) return ''

  let queryList = []
  Object.keys(query).forEach(key => {
    queryList.push(`${key}=${query[key]}`)
  });

  return '?' + queryList.join('&')
}