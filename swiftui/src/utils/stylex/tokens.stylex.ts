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
  sectionBlock: 'var(--swiftui-section-block-padding)',
  sectionInline: 'var(--swiftui-section-inline-padding)',
  section: 'var(--swiftui-section-block-padding) var(--swiftui-section-inline-padding)',
  cellBlock: 'var(--swiftui-cell-block-padding)',
  cellInline: 'var(--swiftui-cell-inline-padding)',
  cell: 'var(--swiftui-cell-block-padding) var(--swiftui-cell-inline-padding)',
  gap: 'var(--swiftui-gap)',
  radius: 'var(--swiftui-radius)',
  doubleGap: 'var(--swiftui-double-gap)',
});

export const fontSize = stylex.defineVars({
  default: 'var(--swiftui-font-size)',
  subtitle: 'var(--swiftui-subtitle-font-size)',
});

export const safeArea = stylex.defineVars({
  content: 'var(--content-safe-area)',
});