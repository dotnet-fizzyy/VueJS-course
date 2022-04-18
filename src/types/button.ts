import { FontStyle } from '@/enums/styles';

export interface BaseButtonProps {
    title: string;
    fontStyle?: FontStyle;
    fontSize?: number;
    click: () => void;
}
