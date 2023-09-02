import axios, { AxiosResponse } from 'axios'

const API_URL = 'http://localhost:3000/api'

export type ApiResponse<T = unknown> = AxiosResponse<T>

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: false
})
