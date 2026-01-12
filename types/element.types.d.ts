import type { AdaptiveCardColor, AdaptiveCardContainerStyle, AdaptiveCardFontSize, AdaptiveCardFontType, AdaptiveCardFontWeight, AdaptiveCardHeight, AdaptiveCardHorizontalAlignment, AdaptiveCardImageSize, AdaptiveCardSpacing, AdaptiveCardVerticalContentAlignment, AdaptiveCardWidth, SizeInPixels } from './value.types.js';
/**
 * TextBlock Element
 * - Displays text.
 * @see https://adaptivecards.io/explorer/TextBlock.html
 */
export interface TextBlockElement extends AdaptiveElement {
    type: 'TextBlock';
    /** Text to display. A subset of markdown is supported (https://aka.ms/ACTextFeatures) */
    text: string;
    /** Controls the color of `TextBlock` elements. */
    color?: AdaptiveCardColor;
    /** Type of font to use for rendering. */
    fontType?: AdaptiveCardFontType;
    /** Controls the horizontal text alignment. When not specified, the value of horizontalAlignment is inherited from the parent container. If no parent container has horizontalAlignment set, it defaults to Left. */
    horizontalAlignment?: AdaptiveCardHorizontalAlignment;
    /**  	If `true`, displays text slightly toned down to appear less prominent. */
    isSubtle?: boolean;
    /** Specifies the maximum number of lines to display. */
    maxLines?: number;
    /** Controls size of text. */
    size?: AdaptiveCardFontSize;
    /** Controls the weight of `TextBlock` elements. */
    weight?: AdaptiveCardFontWeight;
    /** If `true`, allow text to wrap. Otherwise, text is clipped. */
    wrap?: boolean;
    /** The style of this TextBlock for accessibility purposes. */
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
    /** The URL to the image. Supports data URI. */
    url: string;
    /** Alternate text describing the image. */
    altText?: string;
    /** Applies a background to a transparent image. */
    backgroundColor?: string;
    /** The desired height of the image. If specified as a pixel value, ending in ‘px’, E.g., 50px, the image will distort to fit that exact height. This overrides the `size` property. */
    height?: SizeInPixels | AdaptiveCardHeight;
    /** Controls how this element is horizontally positioned within its parent. When not specified, the value of `horizontalAlignment` is inherited from the parent container. If no parent container has horizontalAlignment set, it defaults to Left. */
    horizontalAlignment?: AdaptiveCardHorizontalAlignment;
    /** Controls the approximate size of the image. The physical dimensions will vary per host. */
    size?: AdaptiveCardImageSize;
    /** The desired on-screen width of the image, ending in ‘px’. E.g., 50px. This overrides the `size` property. */
    width?: SizeInPixels;
}
export interface AdaptiveElement {
    /** Specifies the height of the element. */
    height?: AdaptiveCardHeight;
    /** When `true`, draw a separating line at the top of the element. */
    separator?: boolean;
    /** Controls the amount of spacing between this element and the preceding element. */
    spacing?: AdaptiveCardSpacing;
    /** A unique identifier associated with the item. */
    id?: string;
    /** If `false`, this item will be removed from the visual tree. */
    isVisible?: boolean;
}
/**
 * ColumnSet Container
 * - Divides a region into Columns, allowing elements to sit side-by-side.
 * @see https://adaptivecards.io/explorer/ColumnSet.html
 */
export interface ColumnSetContainer extends AdaptiveElement {
    type: 'ColumnSet';
    /** The array of `Columns` to divide the region into. */
    columns: ColumnContainer[];
    /** Style hint for `ColumnSet`. */
    style?: AdaptiveCardContainerStyle;
    /** Determines whether the element should bleed through its parent’s padding. */
    bleed?: boolean;
    /** Specifies the minimum height of the column set in pixels. */
    minHeight?: SizeInPixels;
    /** Controls the horizontal alignment of the `ColumnSet`. When not specified, the value of `horizontalAlignment` is inherited from the parent container. If no parent container has `horizontalAlignment` set, it defaults to Left. */
    horizontalAlignment?: AdaptiveCardHorizontalAlignment;
}
export interface ColumnContainer extends Pick<AdaptiveElement, 'id' | 'isVisible'> {
    type: 'Column';
    /** The card elements to render inside the `Column`. */
    items: AdaptiveCardElement[];
    /** Determines whether the column should bleed through its parent’s padding. */
    bleed?: boolean;
    /** Specifies the minimum height of the column in pixels. */
    minHeight?: SizeInPixels;
    /** When `true` content in this column should be presented right to left. When ‘false’ content in this column should be presented left to right. When unset layout direction will inherit from parent container or column. If unset in all ancestors, the default platform behavior will apply. */
    rtl?: boolean;
    /** When `true`, draw a separating line between this column and the previous column. */
    separator?: boolean;
    /** Controls the amount of spacing between this column and the preceding column. */
    spacing?: AdaptiveCardSpacing;
    /** An Action that will be invoked when the `Column` is tapped or selected. */
    selectAction?: AdaptiveCardAction;
    /** Style hint for `Column`. */
    style?: AdaptiveCardContainerStyle;
    /** Defines how the content should be aligned vertically within the column. When not specified, the value of `verticalContentAlignment` is inherited from the parent container. If no parent container has `verticalContentAlignment` set, it defaults to Top. */
    verticalContentAlignment?: AdaptiveCardVerticalContentAlignment;
    /** `"auto"`, `"stretch"`, a number representing relative width of the column in the column group, or a specific pixel width. */
    width?: AdaptiveCardWidth | SizeInPixels | number;
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
