import {defineStore} from 'pinia'
export const useConfigureStore = defineStore('configureStore' , {
    state:(()=>{
        storeDetail:{}
    }),
    getters:{
        productLength(state){
            return state.storeDetail.store
        }
    },
    actions:{
        storeDetial(){
            this.storeDetail;
        }
    }


})
