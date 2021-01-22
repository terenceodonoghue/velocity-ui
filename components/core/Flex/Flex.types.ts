import { HTMLAttributes, ReactText } from 'react';

type AlignItemsProperty =
  // Basic keywords
  | 'normal'
  | 'stretch'
  // Position alignment
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  // Baseline alignment
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  // Global values
  | 'inherit'
  | 'initial'
  | 'unset';

type JustifyContentProperty =
  // Basic keywords
  | 'normal'
  | 'stretch'
  // Position alignment
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  // Distributed alignment
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  // Overflow alignment
  | 'safe center'
  | 'unsafe center'
  // Global values
  | 'inherit'
  | 'initial'
  | 'unset';

type FlexBasisProperty = ReactText;

type FlexDirectionProperty = 'column' | 'row';

type FlexWrapProperty = 'nowrap' | 'wrap' | 'wrap-reverse' | true;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  alignItems?: AlignItemsProperty;
  basis?: FlexBasisProperty;
  direction?: FlexDirectionProperty;
  grow?: number;
  justifyContent?: JustifyContentProperty;
  shrink?: number;
  wrap?: FlexWrapProperty;
}
