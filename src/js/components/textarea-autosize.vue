<template>
	<textarea
		v-bind="$attrs"
		ref="textarea"
		rows="1"
		:value="textareaValue"
		@input="setValue"
		@keydown="setValue"
		v-html="textareaValue"
	/>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, PropType, ref, watch } from 'vue';

export default defineComponent({
	name: 'TextareaAutosize',
	props: {
		modelValue: {
			type: String as PropType<string>,
			default: ''
		}
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const textareaValue = ref<string>(props.modelValue);
		const textarea = ref<HTMLTextAreaElement | undefined>(undefined);

		function resize() {
			if (textarea.value !== undefined) {
				const { font, width, padding, border, lineHeight } = window.getComputedStyle(textarea.value);

				const fakeTextarea = document.createElement('div');

				const value = textarea.value.value.length < 1 ? ' ' : textarea.value.value;

				fakeTextarea.innerHTML = value.replace(/\n$/g, '\n ').replace(/\n/g, '<br>').replace(/\s/g, '>');

				Object.assign(fakeTextarea.style, {
					font,
					width,
					padding,
					border,
					lineHeight
				});
				document.body.append(fakeTextarea);
				const { height } = fakeTextarea.getBoundingClientRect();

				fakeTextarea.remove();

				textarea.value.style.height = `${height}px`;
			}
		}
		function setValue(event: Event) {
			const target = event.target as HTMLTextAreaElement;

			textareaValue.value = target.value;
			emit('update:modelValue', target.value);
			resize();
		}
		onMounted(() => {
			resize();
		});
		watch(
			() => props.modelValue,
			() => {
				textareaValue.value = props.modelValue;
			}
		);

		return { textareaValue, setValue, textarea };
	}
});
</script>
