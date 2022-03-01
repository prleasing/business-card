import { createApp } from 'vue';
import AppVue from '@components/app.vue';
import '@style/index.scss';

window.addEventListener('DOMContentLoaded', () => {
	createApp(AppVue).mount('#app');
});

window.addEventListener('keydown', (event) => {
	if (event.key === 'p' && (event.metaKey || event.ctrlKey)) {
		event.preventDefault();
	}
});
