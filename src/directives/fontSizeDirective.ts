import { DirectiveBinding } from 'vue/types/options';
import { DirectiveFunction, DirectiveOptions } from 'vue';
import { FontSizeDefaultValue } from '@/constants/styles';

const FontSizeDirectiveOptions: DirectiveOptions | DirectiveFunction = {
    bind(el: HTMLElement, binding: DirectiveBinding) {
        let fontSize: number = FontSizeDefaultValue;

        if (binding.value) {
            if (binding.value === typeof 'number') {
                fontSize = binding.value;
            } else {
                fontSize = Number(binding.value);
            }
        }

        el.style.fontSize = `${fontSize}px`;
    },
};

export default FontSizeDirectiveOptions;
