import * as stylex from '@stylexjs/stylex';

export const color = stylex.defineVars({
  bg: 'var(--swiftui-bg-color)',
  secondaryBg: 'var(--swiftui-secondary-bg-color)',
  sectionBg: 'var(--swiftui-section-bg-color)',
  sectionSeparator: 'var(--swiftui-section-separator-color)',
});

export const textColor = stylex.defineVars({
  default: 'var(--swiftui-text-color)',
  subtitle: 'var(--swiftui-subtitle-text-color)',
  accent: 'var(--swiftui-accent-text-color)',
  sectionHeader: 'var(--swiftui-section-header-text-color)',
});

export const spacing = stylex.defineVars({
  listTop: 'var(--swiftui-list-top-padding)',
  listGap: 'var(--swiftui-list-gap)',
  sectionBottom: 'var(--swiftui-section-bottom-padding)',
  sectionInline: 'var(--swiftui-section-inline-padding)',
  sectionHeaderBottom: 'var(--swiftui-section-header-bottom-padding)',
  sectionHeaderInline: 'var(--swiftui-section-header-inline-padding)',
  sectionFooterTop: 'var(--swiftui-section-footer-top-padding)',
  sectionFooterInline: 'var(--swiftui-section-footer-inline-padding)',
  cellBlock: 'var(--swiftui-cell-block-padding)',
  cellInline: 'var(--swiftui-cell-inline-padding)',
  cellImageLeft: 'var(--swiftui-cell-image-left-padding)',
  cellImageRight: 'var(--swiftui-cell-image-right-padding)',
  stackGapBlock: 'var(--swiftui-stack-gap-block)',
  stackGapInline: 'var(--swiftui-stack-gap-inline)',
  radius: 'var(--swiftui-radius)',
  doubleGap: 'var(--swiftui-double-gap)',
});

export const fontSize = stylex.defineVars({
  default: 'var(--swiftui-font-size)',
  subtitle: 'var(--swiftui-subtitle-font-size)',
});

export const fontHeight = stylex.defineVars({
  default: 'var(--swiftui-font-height)',
  subtitle: 'var(--swiftui-subtitle-font-height)',
});

export const fontLetterSpacing = stylex.defineVars({
  default: 'var(--swiftui-font-letter-spacing)',
  subtitle: 'var(--swiftui-subtitle-font-letter-spacing)',
});

export const safeArea = stylex.defineVars({
  content: 'var(--content-safe-area)',
});