import {defineStore} from 'pinia';
import {ref} from 'vue'
// option api store syntax
// export const useAllCategory = defineStore('all_categories' , {    
//     state:()=>({
//         data:[],
//         pending:true,
//         message:'',
//         error:''
//     }),
//     actions:{
//         getAllCategories(data){
//             if(data){
//                 this.data = data?._data?.categories;
//                 this.message=data?._data?.message;
//                 this.pending = false;
//             }

//             console.log(data , 'check data here')      

//         }
//     },
//     getters:{
//         displayAllCat:(state)=>{
//             return{
//             data:state.data,
//             pending:state.pending,
//             message:state.message
//             }
//         }
//     }
// })
export const useAllCategory = defineStore('all-category' , ()=>{
    const config = useRuntimeConfig();
    const storeId = config.public.store_id;
    const baseUrl = config.public.base_url + '/api/store/getCategories';    
    const data = ref([]);
    const categoryPending = ref(true);
    const getFetchCategoryApi =()=>{
        categoryPending.value =  true;
        let option = {
            headers:{
                'X-Store-Id':storeId
            },
            methods:'GET',
            onResponse({request,response}){           
                if(response && response._data && response._data.status_code && response._data.status_code =='1003'){
                    data.value = response._data.categories;
                    categoryPending.value = false                    
                }                
            },
            lazy:true,
            server:false
        }        
        try {
            useFetchData(baseUrl , option);            
        } catch (error) {
            console.log(error , 'check error here')
        }

    }
    return {
        data,
        categoryPending,
        getFetchCategoryApi
    }
})