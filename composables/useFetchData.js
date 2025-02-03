export const useFetchData = async (url , option)=>{  
    const config = useRuntimeConfig();    
    const base_url = config.public.base_url;
    let defaults={
        base_url,        
    }
    

    return await $fetch(url , option);
    // return {data , error}
    // const data = ref(null);
    // const error = ref(null);
   
    // try {        
    //     let res = await useFetch(url , option)
    //     console.log(res , 'check res data here')        

    // } catch (error) {
    //     error.value = error
    // }
    // // use async data
    // // try {            
    // //     const res = await useAsyncData(result , async ()=>{
    // //         console.log('1')
    // //         return await $fetch(url , option);
    // //     },
        
    // //     )     
    // //     if(import.meta.env.SSR === false){
    // //        console.log(res , 'check client data here')        
    // //     }else{
    // //         console.log(res , 'check server data here')        
    // //     }

    // // } catch (error) {
    // //     console.log(error , 'check error her')
    // //     error.value = error
    // // }
    // // // console.log(data.value , 'check data here')
    // return {data:data.value , error}
}