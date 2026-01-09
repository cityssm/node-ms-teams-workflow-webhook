import type { AdaptiveCardColor, AdaptiveCardFontSize, AdaptiveCardFontType, AdaptiveCardFontWeight, AdaptiveCardHeight, AdaptiveCardHorizontalAlignment, AdaptiveCardImageSize } from './value.types.js';
export interface TextBlockElement extends AdaptiveElement {
    type: 'TextBlock';
    text: string;
    color?: AdaptiveCardColor;
    fontType?: AdaptiveCardFontType;
    horizontalAlignment?: AdaptiveCardHorizontalAlignment;
    isSubtle?: boolean;
    maxLines?: number;
    size?: AdaptiveCardFontSize;
    weight?: AdaptiveCardFontWeight;
    wrap?: boolean;
    style?: 'default' | 'heading';
}
/**
 * Displays an image. Acceptable formats are PNG, JPEG, and GIF
 * @see https://adaptivecards.io/explorer/Image.html
 */
export interface ImageElement extends Omit<AdaptiveElement, 'height'> {
    type: 'Image';
    url: string;
    altText?: string;
    backgroundColor?: string;
    height?: `${number}px` | AdaptiveCardHeight;
    horizontalAlignment?: AdaptiveCardHorizontalAlignment;
    size?: AdaptiveCardImageSize;
    width?: `${number}px`;
}
export interface AdaptiveElement {
    height?: AdaptiveCardHeight;
    separator?: boolean;
    spacing?: 'none' | 'small' | 'default' | 'medium' | 'large' | 'extraLarge' | 'padding';
    id?: string;
    isVisible?: boolean;
}
export type AdaptiveCardElement = ImageElement | TextBlockElement;
