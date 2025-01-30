<template>
  <div>
    <ExploreCategory/>
    <!-- <nuxt-link
        :to="{
          name: 'collections-electronic-id',
          params: {
            electronic: 'electronic',
            id: 123,
          },
        }"
      >
        TEst
      </nuxt-link>
    <FooBarButton/>
    <h1 class="text-3xl font-bold underline bg-slate-600 myClass" >{{counter}}</h1> 
    <button @click="postive">+</button>
    <button @click="negative">-</button>
    
      <img src="image/cake-9bone1.png" alt="">
      <ClientOnly fallbackTag="span">    
      <h2 :style="{ color: themeColor.primaryColor }">Check it</h2>
      <template #fallback>      
        <p style="color: 'blue'">Loading comments...</p>
      </template>
    </ClientOnly>
    <div v-if="verfiedAge == true">
      <h2 >{{ profileUser }}fsfsfdf</h2>
      <p>This user is verfied</p>
    </div>
    <p v-else>This user is not verified</p>
    <button @click="verfiedFun">verfied User</button>     -->

       
  </div>
</template>
<script setup>
// import { ref , onMounted , reactive , computed } from 'vue';
// const appconfig=useAppConfig();
// const themeColor = reactive(appconfig.theme)
// console.log(themeColor.primaryColor)
// const config = useRuntimeConfig();
//   let counter = ref(0);
//   let key = ref(config.apiSecret)
//   let verfiedAge = ref(false)
//   let data = reactive({name:'usman' , age : 20});
//   // console.log(config.apiSecret);
//   const profileUser = computed(()=>{
//     return `My name is ${data.name} and my age is ${data.age}`
//   })
//   const verfiedFun = ()=>{
//     if(data.age > 18){
//       verfiedAge.value = true;
//     }else{
//       verfiedAge.value = false
//     }

    

//   }
//   function postive(){
//     counter.value++;
//     console.log(counter.value , 'check postive counter')
//   }
//   function negative(){
//     console.log(counter , 'check negative counter')
//     counter.value--;
//   }
//   onMounted(()=>{
//     console.log(process.env.store_id ,'check data')
//     console.log(profileUser.value ,'check data')
//     console.log(process.env.VUE_APP_NUXT_API_SECRET, 'api secret');
//     console.log(config.public.apiBase , 'api base')    

//     // console.log(key.value, 'yahoooooooooooo');
    
//   })      

</script>
