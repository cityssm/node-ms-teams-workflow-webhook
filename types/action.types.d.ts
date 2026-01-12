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
