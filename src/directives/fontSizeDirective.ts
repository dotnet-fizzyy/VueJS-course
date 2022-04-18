import { DefaultFontSize } from '@/constants/styles';
import { DirectiveBinding } from 'vue/types/options';
import { DirectiveFunction, DirectiveOptions } from 'vue';

export const FontSizeDirectiveName: string = 'font-size';

export const FontSizeDirective: DirectiveOptions | DirectiveFunction = {
    bind(el: HTMLElement, binding: DirectiveBinding) {
        let fontSize: number = DefaultFontSize;

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
