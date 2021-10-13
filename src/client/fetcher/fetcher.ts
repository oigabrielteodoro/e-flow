import axios from 'axios'

const TOKEN = 'sk_f4eadba611de4e8ea64580c551b1de38'
export const API_URL = 'https://cloud.iexapis.com/stable'

export const api = axios.create({
  baseURL: API_URL,
  params: {
    token: TOKEN,
  },
})
