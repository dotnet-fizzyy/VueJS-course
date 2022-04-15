import Vue from 'vue';
import { FontSize, FontStyle } from '@/enums/styles';
import { RecordPropsDefinition } from 'vue/types/options';

export default {
    props: {
        fontSize: {
            type: String,
            default: FontSize.Medium,
        },
        fontStyle: {
            type: String,
            default: FontStyle.Normal,
        },
    } as RecordPropsDefinition<{ fontSize: FontSize; fontStyle: FontStyle }>,
    methods: {
        click() {
            (this as Vue).$emit('on-click');
        },
    },
};
