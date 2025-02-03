export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    'assets/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    host: 'localhost',  // Use 'localhost' here
    port: 3002          // Specify the port number
  },
  // app:{
  //   baseURL:"/Maan/"
  // },
  alias: {
    "~": "/<srcDir>",
    "@": "/<srcDir>",
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    "#shared": "/<rootDir>/shared",
    "assets": "/assets/css",
    "image": "/assets/img"
  },
  modules:[
    "@pinia/nuxt"
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  // pinia:{
  //   stores:['/stores**']
  // },
  runtimeConfig:{
    secretKey : 'VUpDFpH2oNabJR2xeaHIiAphXrQVo8c5',
    public:{
      // 'apiBase' : process.env.MY_ENV_VARIABLE,
      base_url : process.env.BASE_URL,
      server_url: process.env.BASE_URL,
      store_id: process.env.STORE_ID,
      blogs_imgs_url: process.env.BUCKET_BASE_URL && process.env.STORE_ID ? `${process.env.BUCKET_BASE_URL}${process.env?.STORE_ID}/blog/`: '',      
      store_configure: process.env.BUCKET_BASE_URL && process.env.STORE_ID  ? `${process.env.BUCKET_BASE_URL}${process.env.STORE_ID}/storeConfiguration/`:'',
      product_category : process.env.BUCKET_BASE_URL&&process.env.STORE_ID?`${process.env.BUCKET_BASE_URL}${process.env.STORE_ID}/category/`:'',
      product  : process.env.BUCKET_BASE_URL&&process.env.STORE_ID?`${process.env.BUCKET_BASE_URL}${process.env.STORE_ID}/product/`:'',      
      theme_blocks : process.env.THEME_BASE_URL,
      // secretKey: 'VUpDFpH2oNabJR2xeaHIiAphXrQVo8c5'
    }

  }
})
