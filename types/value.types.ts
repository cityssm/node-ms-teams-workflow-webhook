// eslint-disable-next-line @eslint-community/eslint-comments/disable-enable-pair
/* eslint-disable perfectionist/sort-union-types */

export type AdaptiveCardColor =
  | 'default'
  | 'dark'
  | 'light'
  | 'accent'
  | 'good'
  | 'warning'
  | 'attention'

export type AdaptiveCardFontType = 'default' | 'monospace'

export type AdaptiveCardHorizontalAlignment = 'left' | 'center' | 'right'

export type AdaptiveCardVerticalContentAlignment = 'top' | 'center' | 'bottom'

export type AdaptiveCardFontSize =
  | 'small'
  | 'default'
  | 'medium'
  | 'large'
  | 'extraLarge'

export type AdaptiveCardFontWeight = 'lighter' | 'default' | 'bolder'

export type AdaptiveCardHeight = 'auto' | 'stretch'

export type AdaptiveCardWidth = 'auto' | 'stretch'

export type AdaptiveCardImageSize =
  | 'auto'
  | 'stretch'
  | 'small'
  | 'medium'
  | 'large'

export type SizeInPixels = `${number}px`

export type AdaptiveCardSpacing =
  | 'default'
  | 'none'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'padding'

  export type AdaptiveCardContainerStyle =
  | 'default'
  | 'emphasis'
  | 'good'
  | 'attention'
  | 'warning'
  | 'accent'