import axios from 'axios'

const TOKEN = process.env.CLOUD_SECRET_TOKEN
export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const CLOUD_API_URL = process.env.NEXT_PUBLIC_CLOUD_API_URL

export const api = axios.create({
  baseURL: API_URL,
})

export const cloudApi = axios.create({
  baseURL: CLOUD_API_URL,
  params: {
    token: TOKEN,
  },
})
