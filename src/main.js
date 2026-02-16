import "./assets/reset.css";
import "./assets/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)

app.directive('click-outside', {
    mounted(el, binding){
        el.clickOutsideEvent = (event) =>{
            if(!(el === event.target || el.contains(event.target))){
                binding.value();
            }
        }
        document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el){
        document.removeEventListener('click', el.clickOutsideEvent)
    }
})


app.mount("#app");