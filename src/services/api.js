import axios from 'axios'

const apiDevburger = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiDevburger
