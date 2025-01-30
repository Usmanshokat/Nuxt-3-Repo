/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './src/**/*.{html,js,vue,jsx,ts,tsx}'
  ],
  theme: {        
    screens: {
      sm: '767px',
      md: '991px',
      lg: '1024px',
      xl: '1560px',
    },
    colors: {
      'bg_primary':'#F3EEE8',
      'bg_secondary':'#F5F5F5',
      'bg_brwon':'#423731',
      'btn_background':'#EB7B55',
      'text_primary_color':'#2D2D2D',      
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'brownish':'#F3EEE8',
      "dark-lava":{
        100: '#1fb6ff',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#423731',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      // 'display': ['creato_displayblack']
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    container:{
      padding: {
        DEFAULT: '15px', // Apply for all screen sizes
        sm: '15px',
        md: '15px',
        lg: '15px',
        xl: '15px',
      }      
    },
    spacing: {
      '1': '8px',
      '2': '12px',      
      '3': '14px',      
      '4': '15px',
      '5': '16px',
      '6': '18px',
      '7': '20px',
      '8': '22px',
      '9': '24px',
      '10': '28px',
      '11': '30px',
      '12': '32px',
      '13': '34px',
      '14': '36px',
      '15': '38px',
      '16': '40px',
      '17': '42px',
      '18': '44px',
      '19': '46px',
      '20': '48px',
      '21': '50px',
      '22':'56px',
      '23':'80px',
      '24': '100px'
    },
    borderRadius: {
      '4xl': '2rem',
    },
    extend: {
      container:{
        center:true
      },
      fontFamily: {
        creatoRegular:['creato_displayregular'],
        creatoLight:['creato_displaymedium'],
        creatoBold: ['creato_displaybold'],
        creatoExtraBold: ['creato_displayextrabold'],
        creatoThin:['creato_displaythin'],
        creatoBlack: ['creato_displayblack'],
      },
      width: {
        '1': '16px', // Ensure this is defined
        '59': '944px', // Ensure this is defined
        '59.5': '944.55px', // Ensure this is defined
        '1/5': '20%',        

      },
    }
       
        
      
    
  },
 
  plugins: [],
}

