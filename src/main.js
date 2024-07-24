import { createApp } from 'vue';
import App from './App';

const app = createApp(App); //initialize app
app.mount('#app') //tells where to look to start up app - refers to index.html which refers to App.vue