let BASE_URL: string
const TIME_OUT = 60000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api' // 配合webpack中proxy自动处理路径问题
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://vunbo.com/prod'
} else {
  BASE_URL = 'http://vunbo.com/test'
}

export { BASE_URL, TIME_OUT }
