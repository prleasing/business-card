<template>
	<div class="business-card">
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
						<div class="contact-phone">
							<text-field-autosize
								v-model="phones[index - 1].phone"
								class="contact-phone"
								:name="`business-card-phone-${index}`"
								:autocomplete="`business-card-phone-${index}`"
								:placeholder="`Телефон №${index}`"
								:mask="{
									mask: [
										{
											mask: '{8}(000) 000-00-00'
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
										mask: /^[0-9]\d{0,5}$/
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
					<p>vkontakte, facebook, instagram</p>
				</div>
			</div>
		</div>
		<div class="card card--back">
			<div class="qr" >
				<img :src="svg">
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
								<path
									d="M0.21875 0.919616C0.21875 0.853355 0.272465 0.79964 0.338726 0.79964H1.89841C1.96467 0.79964 2.01839 0.853355 2.01839 0.919616C2.01839 0.985877 1.96467 1.03959 1.89841 1.03959H0.338726C0.272465 1.03959 0.21875 0.985877 0.21875 0.919616Z"
									fill="#403E4B"
								/>
								<path
									d="M1.11802 1.82308C1.05176 1.82308 0.998047 1.76936 0.998047 1.7031L0.998047 0.143414C0.998047 0.0771526 1.05176 0.0234375 1.11802 0.0234375C1.18428 0.0234375 1.238 0.0771526 1.238 0.143414V1.7031C1.238 1.76936 1.18428 1.82308 1.11802 1.82308Z"
									fill="#403E4B"
								/>
							</svg>
						</div>
						<span class="new-category__title">Новый пункт</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue';
import {
	AdrProperty,
	EmailProperty,
	FNProperty,
	IntegerType,
	LangProperty,
	LanguageTagType,
	NProperty,
	OrgProperty,
	PrefParameter,
	RoleProperty,
	SpecialValueType,
	TelProperty,
	TextListType,
	TextType,
	TypeParameter,
	URIType,
	URLProperty,
	ValueParameter,
	VCARD
} from 'vcard4';
import QRCode from 'qrcode';
import TextFieldAutosize from '@components/textfield-autosize.vue';
import TextareaAutosize from '@components/textarea-autosize.vue';

export default defineComponent({
	components: { TextFieldAutosize, TextareaAutosize },
	setup() {
		const state = reactive({
			fio: {
				firstname: '',
				name: '',
				middleName: ''
			},
			post: '',
			addresses: [''],
			phones: [
				{
					phone: '8(800) 250-25-31',
					extension: ''
				}
			],
			email: ''
		});

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

		const vCard = computed(() => {
			const { firstname, name, middleName } = state.fio;

			const fio = [firstname, name, middleName].join(' ');
			const fn = new FNProperty([], new TextType(fio));

			const org = new OrgProperty(
				[new TypeParameter(new TextType('work'), 'orgproperty')],
				new SpecialValueType([new TextType('Лизинговая компания "ПР-Лизинг"')], 'orgproperty')
			);

			const nArr = new Array(5);

			nArr[0] = new TextType(firstname);
			nArr[1] = new TextType(name);
			nArr[2] = new TextType(middleName);
			const n = new NProperty([], new SpecialValueType(nArr, 'nproperty'));

			const phones = state.phones
				.filter((item) => item.phone.length > 0)
				.map(({ phone, extension }) => {
					let value = phone;

					if (extension.length > 0) {
						value += `;${extension}`;
					}
					// const valueUri = new URIType(value);

					return new TelProperty(
						[
							// new ValueParameter(valueUri),
							new TypeParameter(new TextListType([new TextType('WORK')]), 'telproperty'),
							new PrefParameter(new IntegerType(2))
						],
						new TextType(value)
					);
				});
			const email = new EmailProperty(
				[new TypeParameter(new TextType('work'), 'emailproperty')],
				new TextType(state.email)
			);
			const url = new URLProperty(
				[new TypeParameter(new TextType('work'), 'urlproperty')],
				new URIType('https://pr-liz.ru/')
			);

			const role = new RoleProperty([], new TextType(state.post));

			const addresses = state.addresses
				.filter((item) => item.length > 0)
				.map((address) => {
					const aArr = new Array(7);

					aArr[1] = new TextType(address);
					return new AdrProperty(
						[new TypeParameter(new TextType('work'), 'adrproperty')],
						new SpecialValueType(aArr, 'adrproperty')
					);
				});

			const lang = new LangProperty([new PrefParameter(new IntegerType(2))], new LanguageTagType('ru'));

			return new VCARD([fn, lang, n, org, role, ...phones, ...addresses, email, url]).repr();
		});

		const svg = ref('');


		function debounce(f, ms) {

			let isCountdown = false;

			return function() {
				if (isCountdown) return;

				f.apply(this, arguments);

				isCountdown = true;

				setTimeout(() => isCountdown = false, ms);
			};

		}
		async function generateSvg() {
			svg.value = await QRCode.toDataURL(vCard.value.replace('VERSION:4.0', 'VERSION:3.0'), {
				type: String,
				margin: 0,
				// width: 1000
			});
		}

		const debounceGenerateSvg=  debounce(generateSvg, 2000)




		watch(vCard, () => {
			debounceGenerateSvg()
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
		return { ...toRefs(state), vCard, svg };
	}
});
</script>
