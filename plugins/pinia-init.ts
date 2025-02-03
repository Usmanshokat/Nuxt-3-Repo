export default defineNuxtPlugin(async(nuxtApp)=>{
    const configureStore = useConfigureStore();
    await Promise.all([
        useAsyncData('getConfigureStore' , async()=>{
            await configureStore.getConfigureStore();
            return {}
        })
    ])
}) 