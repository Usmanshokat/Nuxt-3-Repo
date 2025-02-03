import {defineStore} from 'pinia'
// export const useConfigureStore = defineStore('configureStore' , {
//     state:()=>({
//         storeData:{},
//         message:''
//     }),
//     getters:{
//         getStoreData(state){
//             return state.storeData
//         }
//     },
//     actions:{
//         storeDetial(result){
//             console.log('test pass')
//             this.storeData=result; 
//            console.log(result , 'check result')
//            console.log(this.storeData , 'check result')
//         }
//     }


// })
export const useConfigureStore = defineStore('configureStore' , ()=>{
    const config = useRuntimeConfig();
    const configureStoreData = ref({});
    const configurePending =  ref(false);
    const store_id = config.public.store_id
    const base_url = config.public.base_url+'/api/store/getConfigure';

    // storeAction call
    async function getConfigureStore(){
        try {
            configurePending.value = true;        
            let option = {
                headers:{
                    'X-Store-Id':store_id
                },
                method:'GET',
                onResponse({request,response}){    
                    if(response && response._data && response._data.status_code == '1026'){
                        configureStoreData.value =  response._data.store;
                        configurePending.value = false;
                    }                       
                },   
            }
            await useFetchData(base_url , option)
        } catch (error) {
            console.log(error,'error')
            
        }

    }
    return{
        configureStoreData,
        configurePending,
        getConfigureStore
    }

})