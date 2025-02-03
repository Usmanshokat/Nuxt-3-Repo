<template>
    <div>
        <section class="pt-21 pb-21 bg-bg_secondary"> 
            <div class="container">
                <h2 class="text-center text-text_primary_color font-creatoBold leading-none text-5xl pb-9 mb-21">Explore Our Furniture Range</h2>            
                <div v-if="categoryPending">
                    <h2>loading......</h2>
                </div>
                <div class="w-59.5 m-auto" v-else>
                    <div class="flex items-center  -mr-21 -ml-21 flex-wrap gap-y-23">
                        <div class="pr-21 pl-21 w-1/5" v-for="category , index in data" :key="index">
                            <div class="h-22 w-23 mb-9">
                                <img class="w-full h-full object-cover" src="image/cake-9bone1.png" alt="">
                            </div>
                            <h2 class="font-creatoRegular text-2xl text-center">{{category.name}}</h2>
                        </div>
                        <!-- <div class="pr-21 pl-21 w-1/5">
                            <div class="h-22 w-23 mb-9">
                                <img class="w-full h-full object-cover" src="image/cake-9bone1.png" alt="">
                            </div>
                            <h2 class="font-creatoRegular text-2xl text-center">Category</h2>
                        </div>
                        <div class="pr-21 pl-21 w-1/5">
                            <div class="h-22 w-23 mb-9">
                                <img class="w-full h-full object-cover" src="image/cake-9bone1.png" alt="">
                            </div>
                            <h2 class="font-creatoRegular text-2xl text-center">Category</h2>
                        </div>
                        <div class="pr-21 pl-21 w-1/5">
                            <div class="h-22 w-23 mb-9">
                                <img class="w-full h-full object-cover" src="image/cake-9bone1.png" alt="">
                            </div>
                            <h2 class="font-creatoRegular text-2xl text-center">Category</h2>
                        </div>
                        <div class="pr-21 pl-21 w-1/5">
                            <div class="h-22 w-23 mb-9">
                                <img class="w-full h-full object-cover" src="image/cake-9bone1.png" alt="">
                            </div>
                            <h2 class="font-creatoRegular text-2xl text-center">Category</h2>
                        </div>
                        <div class="pr-21 pl-21 w-1/5">
                            <div class="h-22 w-23 mb-9">
                                <img class="w-full h-full object-cover" src="image/cake-9bone1.png" alt="">
                            </div>
                            <h2 class="font-creatoRegular text-2xl text-center">Category</h2>
                        </div> -->
                    </div>                    
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import { ref , onMounted , onBeforeMount, reactive , computed , watch , nextTick } from 'vue';
import {useAllCategory} from './stores/categoreis/all_categories'
const store = useAllCategory();
const { data, categoryPending } = storeToRefs(store)
onBeforeMount(()=>{
    store.getFetchCategoryApi();    
})
// const getterCats = ref({})
// const store = useAllCategory();
// const config = useRuntimeConfig();
// const storeId = config.public.store_id;
// const baseUrl = config.public.base_url + '/api/store/getCategories';
// // store.storeDetial({name:'usman'})
// let option = {
//     headers:{
//         'X-Store-Id':storeId
//     },
//     methods:'GET',
//     onResponse({request,response}){
//         store.getAllCategories(response);
//         console.log(response , 'check response here')                     
//     },
//     lazy:true,
//     server:false
// }
// onBeforeMount(()=>{
//     try {
//         console.log('check true')
//         useFetchData(baseUrl , option)
//     } catch (error) {
//         console.log(error , 'check error here')
//     }
// })
// getterCats.value =  store.displayAllCat;
// console.log(getterCats.value.data , 'check in geeter catsfdsfdsf')
// console.log(store.displayAllCat , 'check in geeter catsfdsfdsf')
 
</script>