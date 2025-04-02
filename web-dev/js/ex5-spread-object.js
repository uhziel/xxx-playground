// 试验 ... 这个展开操作符
const config = {
  headers: {
    Path: '/',
  }
}
console.log({
  headers: {
    'Content-Type': 'application/json',
  },
  ...config
})
