<template>
	<div class="generator no-print">
		<div class="hints">
			<p><span>❗</span>Данные нужно вводить прям на визитке</p>
		</div>
	</div>
	<form class="business-card" @submit="print">
		<div class="card card--front">
			<div>
				<div class="card-persona">
					<div class="card-persona__fio">
						<input
							v-model="fio.firstname"
							pattern="([А-ЯA-Z])[a-za-яёйъ-]{1,100}"
							required
							placeholder="Фамилия"
							:name="`business-card-firstname`"
							:autocomplete="`business-card-firstname`"
							:class="{
								'no-print': fio.firstname.length < 1
							}"
						/>
						<input
							v-model="fio.name"
							pattern="([А-ЯA-Z])[a-za-яёйъ-]{1,100}"
							placeholder="Имя"
							:name="`business-card-name`"
							:autocomplete="`business-card-name`"
							:class="{
								'no-print': fio.name.length < 1
							}"
						/>
						<input
							v-model="fio.middleName"
							pattern="([А-ЯA-Z])[a-za-яёйъ-]{1,100}"
							placeholder="Отчество"
							:name="`business-card-middle-name`"
							:autocomplete="`business-card-middle-name`"
							:class="{
								'no-print': fio.middleName.length < 1
							}"
						/>
					</div>
					<label for="business-card-post">
						<span>Должность</span>
						<textarea
							id="business-card-post"
							v-model="post"
							:class="{
								'no-print': post.length < 1
							}"
							:name="`business-card-post`"
							:autocomplete="`business-card-post`"
							required
							rows="3"
							placeholder="Должность"
						></textarea>
					</label>
				</div>

				<img class="logo-company" src="@images/logo.svg" alt="логотип" />
			</div>
			<div class="card-contacts">
				<div>
					<div v-for="index in addresses.length" :key="index">
						<textarea-autosize
							v-model="addresses[index - 1]"
							:class="{
								'no-print': addresses[index - 1].length < 1
							}"
							:name="`business-card-address-${index}`"
							:autocomplete="`business-card-address-${index}`"
							class="contact-address"
							:placeholder="`Адрес №${index}`"
						></textarea-autosize>
					</div>

					<div
						v-for="index in phones.length"
						:key="index"
						:class="{
							'no-print': phones[index - 1].phone.length < 1
						}"
					>
						<div
							class="contact-phone"
							:class="{
								'no-print': phones[index - 1].phone.length < 1
							}"
						>
							<text-field-autosize
								v-model="phones[index - 1].phone"
								class="contact-phone"
								:name="`business-card-phone-${index}`"
								:autocomplete="`business-card-phone-${index}`"
								:placeholder="`Телефон №${index}`"
								:mask="{
									mask: [
										{
											mask: '{8} (000) 000-00-00'
										},
										{
											mask: '{+7} (000) 000-00-00'
										}
									]
								}"
							/>
							<div
								:class="{
									'no-print': phones[index - 1].extension.length < 1
								}"
							>
								&nbsp;(доб.&nbsp;
								<text-field-autosize
									v-model="phones[index - 1].extension"
									class="contact-phone"
									:name="`business-card-phone-extension-${index}`"
									:autocomplete="`business-card-phone-extension-${index}`"
									:placeholder="`000`"
									:mask="{
										mask: /^[0-9]{0,5}$/
									}"
								/>)
							</div>
						</div>
					</div>

					<text-field-autosize
						v-model="email"
						type="email"
						class="contact-email"
						name="business-card-email"
						autocomplete="business-card-email"
						placeholder="Электронная почта"
						:class="{
							'no-print': email.length < 1
						}"
						:mask="{
							mask: /^\S*@?\S*$/
						}"
					/>
				</div>
				<div>
					<p><span>pr-liz.ru</span></p>
					<p><span>8(800) 250-25-31</span></p>
					<p><span>prleasing/</span> — telegram, youtube,</p>
					<p>vkontakte, tenchat</p>
				</div>
			</div>
		</div>
		<ul class="no-print footnote">
			<li>
				Формат адреса <b>город, улица, дом/корпус, дополнительные данные </b> <br />Пример:
				<code>г. Уфа, ул. Карла Маркса, 15/2, офис 1</code>
			</li>
		</ul>
		<div class="card card--back">
			<div class="qr">
				<img v-if="svg" :src="svg" alt="qr" />
			</div>
			<div>
				<h2>Взять в ПР-Лизинг</h2>
				<div class="leasing-categories">
					<ul>
						<li>
							<label class="custom-checkbox"><input type="checkbox" checked /><span>Грузовой транспорт</span></label>
						</li>
						<li>
							<label class="custom-checkbox"><input type="checkbox" /><span>Легковой транспорт</span></label>
						</li>
						<li>
							<label class="custom-checkbox"><input type="checkbox" /><span>Недвижимость</span></label>
						</li>
						<li>
							<label class="custom-checkbox"><input type="checkbox" /><span>Оборудование</span></label>
						</li>
						<li>
							<label class="custom-checkbox"><input type="checkbox" /><span>Спецтехника</span></label>
						</li>
						<li>
							<label class="custom-checkbox"><input type="checkbox" /><span>Cуда</span></label>
						</li>
						<li>
							<label class="custom-checkbox"><input type="checkbox" /><span>Подвижной состав</span></label>
						</li>
						<li>
							<label class="custom-checkbox"><input type="checkbox" /><span>Сельхозтехника и скот</span></label>
						</li>
					</ul>

					<div class="new-category">
						<div class="new-category__icon">
							<svg width="3mm" height="3mm" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
								<!-- eslint-disable max-len -->
								<path
									d="M0.21875 0.919616C0.21875 0.853355 0.272465 0.79964 0.338726 0.79964H1.89841C1.96467 0.79964 2.01839 0.853355 2.01839 0.919616C2.01839 0.985877 1.96467 1.03959 1.89841 1.03959H0.338726C0.272465 1.03959 0.21875 0.985877 0.21875 0.919616Z"
									fill="#403E4B"
								/>
								<path
									d="M1.11802 1.82308C1.05176 1.82308 0.998047 1.76936 0.998047 1.7031L0.998047 0.143414C0.998047 0.0771526 1.05176 0.0234375 1.11802 0.0234375C1.18428 0.0234375 1.238 0.0771526 1.238 0.143414V1.7031C1.238 1.76936 1.18428 1.82308 1.11802 1.82308Z"
									fill="#403E4B"
								/>
								<!-- eslint-enable max-len -->
							</svg>
						</div>
						<span class="new-category__title">Новый пункт</span>
					</div>
				</div>
			</div>
		</div>
	</form>
	<button :disabled="!svg" class="print no-print" @click="print">Скачать</button>

	<service-worker />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
import Swal from 'sweetalert2';
import QRCode from 'qrcode';
import { debounce } from '@js/utility';
import { useVCard } from '@js/hook/v-card';
import TextFieldAutosize from '@components/textfield-autosize.vue';
import TextareaAutosize from '@components/textarea-autosize.vue';
import ServiceWorker from '@components/sw.vue';

export default defineComponent({
	components: { ServiceWorker, TextFieldAutosize, TextareaAutosize },
	setup() {
		function getInitialValue() {
			let data = {
				fio: {
					firstname: '',
					name: '',
					middleName: ''
				},
				post: '',
				addresses: [''],
				phones: [
					{
						phone: '8 (800) 250-25-31',
						extension: ''
					}
				],
				email: ''
			};

			if (window.localStorage) {
				try {
					data = { ...data, ...JSON.parse(localStorage.getItem('business-card') ?? '{}') };
				} catch (e) {}
			}

			return data;
		}

		const state = reactive(getInitialValue());

		function filterAddresses(items: string[]) {
			const newItems = items.filter((item) => item.length > 0);

			newItems.push('');

			if (state.addresses.length !== newItems.length && newItems.length < 3) {
				state.addresses.splice(0, state.addresses.length, ...newItems);
			}
		}

		function filterPhones(items: typeof state.phones) {
			const newItems = items.filter((item) => item.phone.length > 0);

			newItems.push({
				phone: '',
				extension: ''
			});
			if (state.phones.length !== newItems.length && newItems.length < 3) {
				state.phones.splice(0, state.phones.length, ...newItems);
			}
		}

		const vCard = computed<string>(() => {
			const { firstname, name, middleName } = state.fio;

			const phones = state.phones
				.filter((item) => item.phone.length > 0)
				.map(({ phone, extension }) => {
					let value = phone;

					if (extension.length > 0) {
						value += `;${extension}`;
					}
					return value;
				});

			const addresses = state.addresses.filter((item) => item.length > 0);

			return useVCard({
				firstname,
				name,
				middleName,
				post: state.post.length > 0 ? state.post : undefined,
				phones,
				email: state.email.length > 0 ? state.email : undefined,
				addresses
			});
		});

		const svg = ref<string | null>(null);

		async function generateSvg() {
			const value = vCard.value.replace('VERSION:4.0', 'VERSION:3.0');

			svg.value = await QRCode.toDataURL(value, {
				width: 1000,
				margin: 0,
				type: 'image/png',
				errorCorrectionLevel: 'low',
				color: {
					dark: '#403E4B'
				}
			});
		}

		const debounceGenerateSvg = debounce(generateSvg, 1000);

		watch(vCard, () => {
			svg.value = null;
			debounceGenerateSvg();
		});
		watch(state.addresses, (items) => {
			filterAddresses(items);
		});
		watch(state.phones, (items) => {
			filterPhones(items);
		});

		onMounted(() => {
			generateSvg().then();
		});

		function throwError(message: string): never {
			throw new Error(message);
		}
		function validation(): boolean {
			try {
				const nameRegExp = '^[А-ЯA-Z][a-zа-яёйъ-]{1,100}$';
				const {
					fio: { firstname, middleName, name },
					post,
					email,
					addresses,
					phones
				} = state;

				if (!firstname || firstname.length <= 2) {
					throwError('Отсутствует фамилия');
				} else if (!new RegExp(nameRegExp).test(firstname)) {
					throwError('Недопустимый формат фамилии');
				}
				if (!name || name.length <= 2) {
					throwError('Отсутствует имя');
				} else if (!new RegExp(nameRegExp).test(name)) {
					throwError('Недопустимый формат имени');
				}

				if (middleName && middleName.length >= 0) {
					if (!new RegExp(nameRegExp).test(middleName)) {
						throwError('Недопустимый формат отчества');
					}
				}

				if (!post || post.length <= 3) {
					throwError('Недопустимый формат должности');
				}

				if (email || email.length > 0) {
					if (!/^\S*@\S*$/.exec(email)) {
						throwError('Недопустимый формат email');
					}
				}
				addresses.forEach((address, index) => {
					if (address.length > 0) {
						if (
							!/^(г\.\s(?<sity>[А-яа-яёйъ\s-]+),\s(?<street>[А-яA-zА-Яа-яёйъ0-9- .]+),\s(?<house>[А-яA-zА-Яа-яёйъ0-9- ./,]+))$/.exec(
								address
							)
						) {
							throwError(`Недопустимый формат адреса №${index + 1}`);
						}
					}
				});
				phones.forEach(({ phone, extension }, index) => {
					if (phone.length > 0) {
						if (!/^(\+7|8)\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone)) {
							throwError(`Недопустимый формат номера телефона #${index + 1}`);
						} else if (extension.length > 0) {
							if (!/^[0-9]{1,5}$/.exec(extension)) {
								throwError(`Недопустимый формат добавочного номера #${index + 1}`);
							}
						}
					}
				});

				return true;
			} catch (e: any) {
				Swal.fire({
					icon: 'error',
					text: e.message,
					timer: 2000,
					timerProgressBar: true,
					showCloseButton: false,
					showConfirmButton: false
				});
				return false;
			}
		}

		function saveDataLocalStorage() {
			window.localStorage.setItem('business-card', JSON.stringify(state));
		}

		function print(): void {
			if (!svg.value) {
				return;
			}
			if (validation()) {
				if (window.localStorage) {
					saveDataLocalStorage();
				}
				window.print();
			}
		}
		return { ...toRefs(state), vCard, svg, print };
	}
});
</script>
