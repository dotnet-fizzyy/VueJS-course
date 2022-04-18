import Vue from 'vue';
import { DefaultFontSize, DefaultFontStyle } from '@/constants/styles';
import { FontSizeDirective, FontSizeDirectiveName } from '@/directives/fontSizeDirective';
import { FontStyle } from '@/enums/styles';
import { RecordPropsDefinition } from 'vue/types/options';

export default {
    directives: {
        [FontSizeDirectiveName]: FontSizeDirective,
    },
    props: {
        fontSize: {
            type: Number,
            default: DefaultFontSize,
        },
        fontStyle: {
            type: String,
            default: DefaultFontStyle,
        },
    } as RecordPropsDefinition<{ fontSize: number; fontStyle: FontStyle }>,
    methods: {
        click(): void {
            (this as Vue).$emit('click');
        },
    },
};
