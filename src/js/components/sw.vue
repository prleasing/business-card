<script lang="ts">
import { Workbox } from 'workbox-window';
import { defineComponent, onMounted } from 'vue';
import Swal from 'sweetalert2';

export default defineComponent({
	name: 'ServiceWorker',
	setup() {
		let registration: ServiceWorkerRegistration | undefined;

		function hide() {
			Swal.close();
		}
		function skipWaiting() {
			navigator.serviceWorker.addEventListener('controllerchange', () => {
				window.location.reload();
			});
			if (registration && registration.waiting) {
				registration.waiting.postMessage('SKIP_WAITING');
			}
			hide();
		}

		async function question() {
			const result = await Swal.fire({
				icon: 'question',
				text: 'Мы только что обновили версию приложения! Чтобы получить обновления, нажмите на кнопку ниже',
				cancelButtonText: 'Отмена',
				confirmButtonText: 'Обновить'
			});

			if (result) {
				skipWaiting();
			}
		}
		onMounted(async () => {
			if (process.env.NODE_ENV === 'production') {
				const wb = new Workbox('/business-card/sw.js');

				registration = await wb.register();
				window.sw = await wb.getSW();
				if (registration) {
					if (registration.waiting) {
						question();
					}
					registration.addEventListener('updatefound', () => {
						if (registration && registration.installing) {
							registration.installing.addEventListener('statechange', () => {
								if (registration && registration.waiting) {
									if (navigator.serviceWorker.controller) {
										question();
									}
								}
							});
						}
					});
				}
			}
		});
	},
	render() {
		return '';
	}
});
</script>
