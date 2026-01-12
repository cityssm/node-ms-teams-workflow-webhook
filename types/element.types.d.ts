import type { AdaptiveCardColor, AdaptiveCardContainerStyle, AdaptiveCardFontSize, AdaptiveCardFontType, AdaptiveCardFontWeight, AdaptiveCardHeight, AdaptiveCardHorizontalAlignment, AdaptiveCardImageSize, AdaptiveCardSpacing, AdaptiveCardVerticalContentAlignment, AdaptiveCardWidth, SizeInPixels } from './value.types.js';
/**
 * TextBlock Element
 * - Displays text.
 * @see https://adaptivecards.io/explorer/TextBlock.html
 */
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
 * Image Element
 * - Displays an image.
 * - Acceptable formats are PNG, JPEG, and GIF
 * @see https://adaptivecards.io/explorer/Image.html
 */
export interface ImageElement extends Omit<AdaptiveElement, 'height'> {
    type: 'Image';
    url: string;
    altText?: string;
    backgroundColor?: string;
    height?: SizeInPixels | AdaptiveCardHeight;
    horizontalAlignment?: AdaptiveCardHorizontalAlignment;
    size?: AdaptiveCardImageSize;
    width?: SizeInPixels;
}
export interface AdaptiveElement {
    height?: AdaptiveCardHeight;
    separator?: boolean;
    spacing?: AdaptiveCardSpacing;
    id?: string;
    isVisible?: boolean;
}
/**
 * ColumnSet Container
 * - Divides a region into Columns, allowing elements to sit side-by-side.
 * @see https://adaptivecards.io/explorer/ColumnSet.html
 */
export interface ColumnSetContainer extends AdaptiveElement {
    type: 'ColumnSet';
    columns: ColumnContainer[];
    style?: AdaptiveCardContainerStyle;
    bleed?: boolean;
    minHeight?: `${number}px`;
    horizontalAlignment?: AdaptiveCardHorizontalAlignment;
}
export interface ColumnContainer extends Pick<AdaptiveElement, 'id' | 'isVisible'> {
    type: 'Column';
    items: AdaptiveCardElement[];
    bleed?: boolean;
    minHeight?: SizeInPixels;
    rtl?: boolean;
    separator?: boolean;
    spacing?: AdaptiveCardSpacing;
    style?: AdaptiveCardContainerStyle;
    verticalContentAlignment?: AdaptiveCardVerticalContentAlignment;
    width?: AdaptiveCardWidth | SizeInPixels;
}
/**
 * FactSet Container
 * - Displays a set of facts (name/value pairs)
 * @see https://adaptivecards.io/explorer/FactSet.html
 */
export interface FactSetContainer extends AdaptiveElement {
    type: 'FactSet';
    facts: Array<{
        title: string;
        value: string;
    }>;
}
export interface ActionSetContainer extends AdaptiveElement {
    type: 'ActionSet';
    actions: AdaptiveCardAction[];
}
export type AdaptiveCardContainer = ColumnSetContainer | FactSetContainer | ActionSetContainer;
export type AdaptiveCardElement = ImageElement | TextBlockElement | AdaptiveCardContainer;
/**
 * ACTIONS
 */
/**
 * OpenUrl Action
 * - When invoked, show the given url either by launching it in an external web browser.
 */
export interface OpenUrlAction extends Action {
    type: 'Action.OpenUrl';
    url: string;
}
export interface Action {
    title: string;
    iconUrl?: string;
    id?: string;
    style?: ActionStyle;
    tooltip?: string;
}
export type ActionStyle = 'default' | 'positive' | 'destructive';
export type AdaptiveCardAction = OpenUrlAction;
