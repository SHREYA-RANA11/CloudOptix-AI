import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const getCostData = () => API.get('/cost')
export const getRecommendations = () => API.get('/recommendations')
export const getAlerts = () => API.get('/alerts')