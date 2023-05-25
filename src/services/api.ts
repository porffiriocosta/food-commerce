import axios from 'axios'

import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('/v1/api/Snacks/burgers')
export const getPizzas = () => api.get<SnackData[]>('/v1/api/Snacks/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/v1/api/Snacks/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/v1/api/Snacks/ice-creams')

export default api
