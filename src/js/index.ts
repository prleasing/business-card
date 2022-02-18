import { createApp } from 'vue';
import AppVue from '@components/app.vue';
import '@style/index.scss';

window.addEventListener('DOMContentLoaded', () => {
	createApp(AppVue).mount('#app');
});
