declare global {
  /* eslint-disable no-unused-vars */
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_CLOUD_API_URL: string
      CLOUD_SECRET_TOKEN: string
    }
  }
}
export {}
