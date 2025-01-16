import axios, {
  type AxiosRequestConfig,
  type AxiosRequestHeaders,
  type AxiosResponse,
} from 'axios'

const instance = axios.create({
  baseURL: 'https://www.douyin.com',
})

const referers = [
  'https://www.douyin.com/root/search/%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%94%BB%E7%95%A5?aid=fde5f011-00ba-47e3-8dd0-50a6072e352b&type=general'
]

instance.interceptors.request.use((config) => {
  config.headers = {
    referer: referers[Math.floor(Math.random() * referers.length)],
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    ...config.headers,
  } as unknown as AxiosRequestHeaders
  return config
})

instance.interceptors.response.use((response) => {
  return response.data
})

const client = async <T>(config: AxiosRequestConfig) => {
  return instance(config) as Promise<T>
}

export default client
