<template>
    <div>
        <section class="bg-brownish pt-2 pb-2">
            <div class="container">
                <div class="flex justify-between items-center">
                    <ul class="flex items-center">
                        <li class="pr-16 mr-16 border-r">
                            <a href="#" class="inline-flex gap-4 items-center">
                                <svg class="w-7 h-7"  viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.55399 5.36929L6.17099 1.457C5.78099 1.00616 5.06599 1.00816 4.61299 1.46301L1.83099 4.25521C1.00299 5.08576 0.765988 6.31906 1.24499 7.3079C4.10661 13.2439 8.88503 18.038 14.806 20.9133C15.792 21.3932 17.022 21.1557 17.85 20.3252L20.658 17.5069C21.113 17.0511 21.114 16.3307 20.66 15.94L16.74 12.5687C16.33 12.2161 15.693 12.2621 15.282 12.6749L13.918 14.0435C13.8482 14.1168 13.7562 14.1651 13.6563 14.181C13.5564 14.197 13.4541 14.1796 13.365 14.1316C11.1354 12.8453 9.28598 10.99 8.00499 8.7546C7.95702 8.66519 7.93964 8.56247 7.95554 8.46221C7.97144 8.36195 8.01972 8.26969 8.09299 8.19957L9.45299 6.83602C9.86499 6.42125 9.90999 5.78006 9.55399 5.36829V5.36929Z"
                                        stroke="#2D2D2D" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                <span class="font-creatoRegular text-black text-base leading-none">03057613418</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="inline-flex gap-4 items-center">
                                <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 18" fill="none">
                                    <path
                                        d="M19.6667 17.823H2.33341C1.75878 17.823 1.20768 17.5943 0.80135 17.1872C0.395021 16.7801 0.166748 16.228 0.166748 15.6523V2.53356C0.19105 1.97438 0.430008 1.44621 0.833733 1.05932C1.23746 0.67244 1.77474 0.456747 2.33341 0.457276H19.6667C20.2414 0.457276 20.7925 0.685976 21.1988 1.09306C21.6051 1.50015 21.8334 2.05228 21.8334 2.62799V15.6523C21.8334 16.228 21.6051 16.7801 21.1988 17.1872C20.7925 17.5943 20.2414 17.823 19.6667 17.823ZM2.33341 4.65544V15.6523H19.6667V4.65544L11.0001 10.4426L2.33341 4.65544ZM3.20008 2.62799L11.0001 7.8377L18.8001 2.62799H3.20008Z"
                                        fill="#2D2D2D" />
                                </svg>
                                <span class="font-creatoRegular text-black text-base leading-none">m.usman@nextscrum.dev</span>                                
                            </a>
                        </li>
                    </ul>
                    <ul class="flex items-center">
                        <li class="pr-16 mr-16 border-r">
                            <a href="#" class="inline-flex gap-4 items-center">                                
                                <span class="font-creatoRegular text-black text-base leading-none">Login</span>
                            </a>
                        </li>
                        <li class="pr-16 mr-16 border-r">
                            <a href="#" class="inline-flex gap-4 items-center">                                
                                <span class="font-creatoRegular text-black text-base leading-none">Blog</span>                                
                            </a>
                        </li>
                        <li>
                            <a href="#" class="inline-flex gap-4 md:items-center">                                
                                <span class="font-creatoRegular text-black text-base leading-none">Shop</span>                                
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import {onMounted} from 'vue'
import {useConfigureStore} from './stores/configureStore'
const getConfigureStore =  useConfigureStore();
const {configureStoreData , configurePending} =  storeToRefs(getConfigureStore);
onMounted(()=>{
    console.log(configureStoreData , 'check data here configuresfdsfdf')
    console.log(configurePending , 'store pending')
})

</script>
