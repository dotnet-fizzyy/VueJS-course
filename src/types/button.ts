import { FontSize, FontStyle } from '@/enums/styles';

export interface BaseButtonProps {
    title: string;
    fontStyle?: FontStyle;
    fontSize?: FontSize;
    click: () => void;
}
