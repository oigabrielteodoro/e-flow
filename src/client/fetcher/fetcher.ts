import axios from 'axios'

const TOKEN = 'sk_894a767cfbde4e4cbfd94fd20094a042'

export const api = axios.create({
  baseURL: 'https://cloud.iexapis.com/stable',
  params: {
    token: TOKEN,
  },
})
