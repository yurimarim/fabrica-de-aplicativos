import axios from 'axios'

// https://economia.awesomeapi.com.br/json/all/USD-BRL
export const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/'
})
