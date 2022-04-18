import { DefaultFontSize } from '@/constants/styles';
import { DirectiveBinding } from 'vue/types/options';
import { DirectiveFunction, DirectiveOptions } from 'vue';
import { getAppSettings } from '@/utils/appSettings';

export const FontSizeDirectiveName: string = 'font-size';

export const FontSizeDirective: DirectiveOptions | DirectiveFunction = {
    bind(el: HTMLElement, binding: DirectiveBinding) {
        let fontSize: number = DefaultFontSize;

        if (binding.value) {
            if (binding.value === typeof 'number') {
                fontSize = binding.value;
            } else if (!Number.isNaN(binding.value)) {
                fontSize = Number(binding.value);
            } else {
                if (getAppSettings().isDevelopmentMode) {
                    console.warn(`FontSizeDirective::bind: ${binding.value} cannot be converted to number`);
                }
            }
        }

        el.style.fontSize = `${fontSize}px`;
    },
};
