<template>
	<input v-bind="$attrs" ref="input" :value="fieldValue" :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, PropType, ref, watch } from 'vue';
import IMask from 'imask';
import FontFaceObserver from 'fontfaceobserver';

export default defineComponent({
	name: 'TextFieldAutosize',
	props: {
		modelValue: {
			type: String as PropType<string>,
			default: ''
		},
		placeholder: {
			type: String as PropType<string>,
			default: ''
		},
		mask: {
			type: Object as PropType<IMask.AnyMaskedOptions>,
			default: null
		}
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const fieldValue = ref<string>(props.modelValue);
		const input = ref<HTMLTextAreaElement | undefined>(undefined);
		let imask: IMask.InputMask<any> | undefined;

		async function resize() {
			if (input.value !== undefined) {
				const { font, height, padding, border, lineHeight, fontFamily } = window.getComputedStyle(input.value);

				const fakeField = document.createElement('div');

				const value = input.value.value.length < 1 ? `${props.placeholder}` : input.value.value;

				fakeField.innerHTML = value.replace(/\s/g, '>');

				await new FontFaceObserver(fontFamily.split(',')[0]).load();

				Object.assign(fakeField.style, {
					font,
					height,
					padding,
					border,
					lineHeight,
					display: 'inline'
				});
				document.body.append(fakeField);
				const { width } = fakeField.getBoundingClientRect();

				fakeField.remove();

				input.value.style.width = `${width}px`;
			}
		}

		onMounted(() => {
			resize();

			if (props.mask && input.value) {
				imask = IMask(input.value, props.mask);
				imask.on('accept', () => {
					resize();
					emit('update:modelValue', imask?.value);
				});
			}
		});
		watch(
			() => props.modelValue,
			() => {
				fieldValue.value = props.modelValue;
			}
		);

		onBeforeUnmount(() => {
			if (typeof imask !== 'undefined') {
				imask.destroy();
			}
		});
		return { fieldValue, input };
	}
});
</script>
