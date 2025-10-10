export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    return {
        provide: {
            apiFetch: async (url: string, options: any = {}) => {
                const nuxtApp = useNuxtApp()

                // Определяем базовый URL: для SSR и клиента по-разному

                const base =
                    config.public.APP_ENV === 'local'
                        ? config.public.API_BASE_URL
                        : (nuxtApp.ssrContext ? config.public.API_BASE_URL : '/api')

                const fullUrl = `${base}${url}`
                console.log(options);
                // Проксируем вызов оригинального useFetch
                return await useFetch(fullUrl, options)
            }
        }
    }
})