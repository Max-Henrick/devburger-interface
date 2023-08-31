import axios from 'axios'

const apiDevBurger = axios.create({
  baseURL: 'https://devburger-production.up.railway.app/'
})

apiDevBurger.interceptors.request.use(async config => {
  const userData = localStorage.getItem('devburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default apiDevBurger
