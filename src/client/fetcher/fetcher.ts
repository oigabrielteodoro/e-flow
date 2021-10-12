import axios from 'axios'

const TOKEN = 'sk_894a767cfbde4e4cbfd94fd20094a042'
export const API_URL = 'https://cloud.iexapis.com/stable'

export const api = axios.create({
  baseURL: API_URL,
  params: {
    token: TOKEN,
  },
})
