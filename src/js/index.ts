import { createApp } from 'vue';
import LayoutGridHelper from 'layout-grid-helper';
import AppVue from '@components/app.vue';
import '@style/index.scss';
import '@style/style.css';

window.addEventListener('DOMContentLoaded', () => {
	createApp(AppVue).mount('#app-vue');

	if (process.env.NODE_ENV === 'development') {
		const layoutGridHelper = LayoutGridHelper({
			prefix: 'gh',
			sides: '0px',
			gutter: '30px',
			columns: 12,
			mobileFirst: false,
			container: '1200px'
		});

		layoutGridHelper.show();
	}
});
