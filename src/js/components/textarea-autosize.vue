<template>
	<textarea
		v-bind="$attrs"
		ref="textarea"
		rows="1"
		wrap="hard"
		@input="setValue"
		@keydown="setValue"
		v-html="textareaValue"
	/>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from 'vue';

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
				textarea.value.style.height = 'auto';
				textarea.value.style.height = `${textarea.value.scrollHeight}px`;
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
