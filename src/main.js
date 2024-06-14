// main scss code
import './assets/styles/main.scss'
// main scss code
import { createApp } from 'vue'
import App from './App.vue'

// particles link
import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";
// particles link

const app = createApp(App)

app.use(Particles, {
    init: async engine => {
        await loadSlim(engine);
    },
});


app.mount('#app')
