import FontDirective from '@/directives/fontSizeDirective';
import Vue from 'vue';
import { FontSizeDefaultValue, FontSizeDirectiveName } from '@/constants/styles';
import { FontStyle } from '@/enums/styles';
import { RecordPropsDefinition } from 'vue/types/options';

export default {
    directives: {
        [FontSizeDirectiveName]: FontDirective,
    },
    props: {
        fontSize: {
            type: Number,
            default: FontSizeDefaultValue,
        },
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
    } as RecordPropsDefinition<{ fontSize: number; fontStyle: FontStyle }>,
    methods: {
        click(): void {
            (this as Vue).$emit('click');
        },
    },
};
