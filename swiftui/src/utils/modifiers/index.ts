import React from 'react';
import { Color } from '../colors';
import { BlendMode, ClipShape } from '../filters';

export type LinearGradient = {
  linearGradient: {
    colors: Color[];
    startPoint:
      | 'top'
      | 'bottom'
      | 'leading'
      | 'trailing'
      | 'topLeading'
      | 'topTrailing'
      | 'bottomLeading'
      | 'bottomTrailing';
    endPoint:
      | 'top'
      | 'bottom'
      | 'leading'
      | 'trailing'
      | 'topLeading'
      | 'topTrailing'
      | 'bottomLeading'
      | 'bottomTrailing';
  };
};

export interface Modifiers {
  // View
  ignoresSafeArea?: boolean;
  padding?:
    | number
    | boolean
    | {
        leading?: number;
        top?: number;
        bottom?: number;
        trailing?: number;
        horizontal?: number;
        vertical?: number;
        all?: number;
      };
  border?: {
    color?: Color;
    width?: number;
  };
  foregroundStyle?: Color | Color[] | LinearGradient;
  rotationEffect?: {
    degrees?: number;
    radians?: number;
  };
  redacted?: 'privacy' | 'placeholder' | 'invalidated';
  scaleEffect?: number;
  shadow?: {
    color?: Color;
    x?: number;
    y?: number;
    radius?: number;
    opacity?: number;
  };
  background?: Color | LinearGradient;
  disabled?: boolean;
  hidden?: boolean;
  frame?:
    | {
        width?: number | string;
        height?: number | string;
      }
    | {
        minWidth?: number | 'infinity';
        minHeight?: number | 'infinity';
        maxWidth?: number | 'infinity';
        maxHeight?: number | 'infinity';
      };
  zIndex?: number;
  opacity?: number;
  tint?: Color;
  cornerRadius?: number;
  position?: { x: number; y: number };
  offset?: { x: number; y: number };
  fixedSize?: boolean | { horizontal?: boolean; vertical?: boolean };
  lineLimit?: number;
  animation?: {
    type:
      | 'spring'
      | 'easeIn'
      | 'easeOut'
      | 'easeInOut'
      | 'linear'
      | 'interpolatingSpring'
      | 'bouncy'
      | 'smooth'
      | 'default';
    value: any;
  };
  contentTransition?:
    | 'numericText'
    | 'opacity'
    | 'identity'
    | 'interpolate'
    | 'symbolEffect';
  labelIsHidden?: boolean;
  // Filter
  blur?: number;
  saturation?: number;
  grayscale?: number;
  brightness?: number;
  contrast?: number;
  compositingGroup?: boolean;
  blendMode?: BlendMode;
  mask?: string;
  clipShape?: ClipShape;
  fill?: Color;
  stroke?: {
    color: Color;
    lineWidth: number;
  };
  // Environment
  environment?: {
    colorScheme: 'light' | 'dark';
  };
  // TextField
  textContentType?:
    | 'name'
    | 'namePrefix'
    | 'givenName'
    | 'middleName'
    | 'familyName'
    | 'nameSuffix'
    | 'nickname'
    | 'jobTitle'
    | 'organizationName'
    | 'location'
    | 'fullStreetAddress'
    | 'streetAddressLine1'
    | 'streetAddressLine2'
    | 'addressCity'
    | 'addressState'
    | 'addressCityAndState'
    | 'sublocality'
    | 'countryName'
    | 'postalCode'
    | 'telephoneNumber'
    | 'emailAddress'
    | 'URL'
    | 'creditCardNumber'
    | 'username'
    | 'password'
    | 'newPassword'
    | 'oneTimeCode'
    | 'shipmentTrackingNumber'
    | 'flightNumber'
    | 'dateTime'
    | 'birthdate'
    | 'birthdateDay'
    | 'birthdateMonth'
    | 'birthdateYear'
    | 'creditCardSecurityCode'
    | 'creditCardName'
    | 'creditCardGivenName'
    | 'creditCardMiddleName'
    | 'creditCardFamilyName'
    | 'creditCardExpiration'
    | 'creditCardExpirationMonth'
    | 'creditCardExpirationYear'
    | 'creditCardType';

  keyboardType?:
    | 'numberPad'
    | 'phonePad'
    | 'namePhonePad'
    | 'emailAddress'
    | 'decimalPad'
    | 'twitter'
    | 'webSearch'
    | 'asciiCapableNumberPad'
    | 'numbersAndPunctuation'
    | 'URL'
    | 'asciiCapable'
    | 'default';

  textInputAutocapitalization?: 'never' | 'words' | 'sentences' | 'characters';
  autocorrectionDisabled?: boolean;

  // Image
  resizable?: boolean;
  imageScale?: 'small' | 'medium' | 'large';
  symbolRenderingMode?:
    | 'palette'
    | 'monochrome'
    | 'hierarchical'
    | 'multicolor';

  // Text
  fontSize?: number;
  fontWeight?:
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'heavy'
    | 'black';
  font?:
    | 'body'
    | 'callout'
    | 'caption'
    | 'caption2'
    | 'footnote'
    | 'headline'
    | 'largeTitle'
    | 'subheadline'
    | 'title'
    | 'title2'
    | 'title3';
  bold?: boolean;
  italic?: boolean;
  strikethrough?:
    | boolean
    | {
        isActive: boolean;
        color?: Color;
        pattern?: 'dot' | 'dash' | 'solid' | 'dashDotDot' | 'dashDot';
      };
  underline?:
    | boolean
    | {
        isActive: boolean;
        color?: Color;
        pattern?: 'dot' | 'dash' | 'solid' | 'dashDotDot' | 'dashDot';
      };

  // Style Variants
  buttonStyle?: 'bordered' | 'borderless' | 'plain' | 'borderedProminent';
  pickerStyle?: 'wheel' | 'segmented' | 'menu';
  textFieldStyle?: 'plain' | 'roundedBorder';
  listStyle?: 'inset' | 'grouped' | 'plain' | 'insetGrouped';

  // Haptics
  sensoryFeedback?: {
    feedback:
      | 'warning'
      | 'error'
      | 'success'
      | 'alignment'
      | 'decrease'
      | 'impact'
      | 'increase'
      | 'levelChange'
      | 'selection'
      | 'start'
      | 'stop';
    trigger: any;
  };
  // List
  scrollDisabled?: boolean;
  // Lifecycle
  onAppear?: () => void;
  onDisappear?: () => void;
  // contextMenu?: ContextMenu;
  // alert?: Alert;
  // Sheet
  // sheet?: {
  //   isPresented: boolean | BooleanBinding;
  //   content: ReactNode;
  //   onDismiss?: () => void;
  // };
  // presentationCornerRadius?: number;
  // presentationDetents?: (
  //   | 'medium'
  //   | 'large'
  //   | { fraction: number }
  //   | { height: number }
  // )[];
}

export type NativeModifiersProp = { [key: string]: any };

export type ExperimentalPrivateModifierProp = {
  _modifiers: NativeModifiersProp[];
};

export function getExperimentalPrivateModifiers(modifiers: Modifiers) {
  const experimentalPrivateMods = (modifiers as ExperimentalPrivateModifierProp)
    ._modifiers;
  if (experimentalPrivateMods) {
    return experimentalPrivateMods.reduce((styles, mod) => {
      return { ...styles, ...mod };
    }, {});
  } else {
    return modifiers;
  }
}

/**
 * Maps a modifiers object or function to an array of native modifiers, with
 * the order being preserved.
 */
export function mapToNativeModifiers(modifiers: Modifiers) {
  const experimentalPrivateMods = (modifiers as ExperimentalPrivateModifierProp)
    ._modifiers;
  if (experimentalPrivateMods) return experimentalPrivateMods;
  if (Array.isArray(modifiers)) return modifiers;
  let result: NativeModifiersProp[] = [];
  result = Object.keys(modifiers || {}).map((key) => {
    return { [key]: (modifiers as any)[key] };
  });
  return result;
}

export function getSizeFromModifiers(
  modifiers: Modifiers,
  defaultSize?: { width: number; height: number }
): React.CSSProperties {
  modifiers = getExperimentalPrivateModifiers(modifiers);

  const styles: React.CSSProperties = {};

  let width = (modifiers.frame as any)?.width || defaultSize?.width;
  let height = (modifiers.frame as any)?.height || defaultSize?.height;
  let minWidth = (modifiers.frame as any)?.minWidth;
  let minHeight = (modifiers.frame as any)?.minHeight;
  let maxWidth = (modifiers.frame as any)?.maxWidth;
  let maxHeight = (modifiers.frame as any)?.maxHeight;

  if (width) {
    styles.width = width === 'infinity' ? '100%' : width;
  }

  if (height) {
    styles.height = height === 'infinity' ? '100%' : height;
  }

  if (minWidth) {
    styles.minWidth = minWidth === 'infinity' ? '100%' : minWidth;
  }

  if (minHeight) {
    styles.minHeight = minHeight === 'infinity' ? '100%' : minHeight;
  }

  if (maxWidth) {
    styles.maxWidth = maxWidth === 'infinity' ? '100%' : maxWidth;
  }

  if (maxHeight) {
    styles.maxHeight = maxHeight === 'infinity' ? '100%' : maxHeight;
  }

  if (typeof modifiers.padding === 'number') {
    styles.padding = modifiers.padding;
  } else if (typeof modifiers.padding === 'boolean') {
    styles.padding = modifiers.padding ? 8 : 0;
  } else if (typeof modifiers.padding === 'object') {
    if (modifiers.padding.all !== undefined) {
      styles.padding = modifiers.padding.all;
    }
    if (modifiers.padding.horizontal !== undefined) {
      styles.paddingLeft = modifiers.padding.horizontal;
      styles.paddingRight = modifiers.padding.horizontal;
    }
    if (modifiers.padding.vertical !== undefined) {
      styles.paddingTop = modifiers.padding.vertical;
      styles.paddingBottom = modifiers.padding.vertical;
    }
    if (modifiers.padding.top !== undefined) {
      styles.paddingTop = modifiers.padding.top;
    }
    if (modifiers.padding.bottom !== undefined) {
      styles.paddingBottom = modifiers.padding.bottom;
    }
    if (modifiers.padding.leading !== undefined) {
      styles.paddingLeft = modifiers.padding.leading;
    }
    if (modifiers.padding.trailing !== undefined) {
      styles.paddingRight = modifiers.padding.trailing;
    }
  }

  return styles;
}