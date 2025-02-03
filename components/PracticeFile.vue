<template>
    <div>
        <!-- <button @click="postiveNum">TEst</button> -->
            <!-- <p>Computed:{{ testing }}</p> -->
            <!-- <p>Props:{{ props_name.name }}</p> -->
            <!-- <p>State count:{{ stateStore.conunter }}</p> -->
            <!-- <input type="text" v-model="my_value"> -->
            <!-- <p>{{ my_value }}</p> -->            
            <!-- <h1>Address : {{ storeData?.address }}</h1> -->
    </div>
</template>
<script setup>
import { ref , onMounted , reactive , computed , watch , nextTick } from 'vue';
// handle props
// const props_name = defineProps(['name']);
// V-modal
// const my_value = ref('');
// console.log(props_name.name , 'check props');
    // // const config = useRuntimeConfig();    
    // const config = useRuntimeConfig()
    // const store_id = config.public.store_id
    // const id = ref(1);
    // const params = ref('value1')
    // const baseUrl = 'https://api.sellfront.co/api/store/getConfigure'
    // let option={
    // headers:{
    //     'X-Store-Id':store_id
    // },
    // method: 'Get',
    // onResponse({request,response}){
    //     console.log(response , 'check response here')        
    // },
    // lazy:true,
    // server:false,               
    // }  
    // how to work watch in useFetch api
    // const watcherEffect = async()=>{
    // try {
    //     const res = await useAsyncData( 'result' ,()=>$fetch(baseUrl , {
    //         ...option,            
    //     }
    // ))
    //     console.log(res , 'here check console work')
    // } catch (error) {
    //     console.log(error , 'check error here')
    // }
    // }
    // watcherEffect();
    // computed
    // const testing = computed(()=>{
    //     return id.value * 2;
    // })
    // Watch effect
    // watchEffect(()=>{        
    //     if(my_value.value == 'usman'){
    //         console.log('true watch');
    //     }else{
    //         return
    //     }

    //     console.log('computed:' , testing.value)
    // })
    //////////////////////  Fucntions ///////////////////
    /////////////////////             //////////////////
    // function postiveNum(){
    //     id.value++;
    //     console.log(id.value , 'check id');        
    // }    
    //////////////////// watch if you want to check the old and the newValue ////////////////////
    ////////////////////                                                    ////////////////////
    // watch(my_value, (newVal, oldVal) => {        
    //     console.log('New:', newVal, '| Old:', oldVal);
    // });    
        
    //////////////////// Async data with $Fetch ////////////////////
    ////////////////////                            ////////////////////
    // try {    
    //     const res =  await useAsyncData('result' , ()=>$fetch(baseUrl , option));
    //     console.log(res.data._value.store , 'check res here');
    //     // const res = await useAsyncData(result , ()=>$fetch(url , {
    //     //     ...option,
    //     //     // onResponse({request,response}){
    //     //     //     console.log(response , 'check response here')                
    //     //     //         // data.value = response?.data.store                
    //     //     // }
    //     // }))   

    //     // console.log(res , 'check res data here')        

    // } catch (error) {
    //     console.log(error);        
    // }
    // const {data , error} = await useFetchData('result' , baseUrl , option)
    // try {
    //     useFetchData(baseUrl , option);    
    // } catch (error) {
    //     console.log(error , 'cehck')
    // }
    
    // console.log(data , 'final data storefsdfdsf');

    // onMounted(()=>{
    //     useFetchData('https://api.sellfront.co/api/store/getConfigures',option)
    // })
    
     // console.log(data.value , 'check data herefdsfdsfdsfsdfsdfsdfsdf')
        // const storeData = ref({});
        // const store_id = config.public.store_id;
        // console.log(store_id , "test itsfsfdfdffdsfdsffdsfdfdfdfddfdsfdsfdfdsfdf")
        // try {
        //     const res = await $fetch('https://api.sellfront.co/api/store/getConfigure', {
        //     method: 'GET',  
        //     headers: {
        //         'X-Store-Id': '16107c86-5100-4b6f-8c0d-05888f3337db', // Fix: Correctly format headers inside options
        //     },
        //     });
        //     console.log(res , 'check res here')

        //     if (res.status_code == '1026') {
        //     console.log(res.store, 'check res data'); // Handle API fetch console.error();
        //     storeData.value =  res.store
            
        //     } 
        //     // else {
        //     //     storeData.value = data.value.store;                
        //     // console.log(storeData, 'API response store data'); // Use API response
        //     // }
        // } catch (err) {
        //     console.log(err, 'Unexpected error'); // Handle unexpected errors
        // }
            // let options={
            //     method: 'GET',  
            //     headers: {
            //         'X-Store-Id': store_id, // Fix: Correctly format headers inside options
            //     },       
            //     onResponse({request,response}){
            //         console.log(response , 'check response hereeee')                
            //         console.log(request , 'check request here')                
            //     },
            //     onResponseError({request,response}){
            //         console.log(response , 'check error here')                
            //         console.log(request , 'check request here')                
            //     }
            // }
            // try {
            //     await useFetch('https://api.sellfront.co/api/store/getConfigures',options);
            // } catch (error) {
            //     console.log('catch error ',error);
                
            // }
            //////////////////// Reactive property ////////////////////                
// reactive property
// const obj = reactive({name: 'usman' , age: 27});
// const  mutatedObj = ref({})            
// const changeObj = ()=>{
//     return{
//         ...obj,
//         name2: 'Muhammad Usman'
//     }                
// }
// setTimeout(()=>{                                                 
//     mutatedObj.value =  changeObj();
//     console.log(mutatedObj , 'check it')
// }, 500)
</script>