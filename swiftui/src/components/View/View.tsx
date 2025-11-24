import React from 'react';
import { Attribute, ViewProviderProps, ViewScriptProps, UseViewProps } from './types';
import { script } from './script';
import { s } from './View.stylex';
import * as stylex from '@stylexjs/stylex';

const defaultThemeVersion = '18.5'
const attributeVersion = 'data-swiftui-ios'

const defaultThemes = ['light', 'dark']
const colorSchemes = ['light', 'dark']
const MEDIA = '(prefers-color-scheme: dark)'

const isServer = typeof window === 'undefined'
const ViewContext = React.createContext<UseViewProps | undefined>(undefined)
const defaultContext: UseViewProps = { setTheme: _ => { }, themes: [], setVersion: _ => { }, version: defaultThemeVersion }

const saveToLS = (storageKey: string, value: string) => {
  // Save to storage
  try {
    localStorage.setItem(storageKey, value)
  } catch (e) {
    // Unsupported
  }
}

export const useTheme = () => React.useContext(ViewContext) ?? defaultContext

export const ViewProvider = (props: ViewProviderProps) => {
  const context = React.useContext(ViewContext)

  // Ignore nested context providers, just passthrough children
  if (context) return <>{props.children}</>
  return <View {...props} />
}

export const View = ({
  forcedTheme,
  disableTransitionOnChange = false,
  enableSystem = true,
  enableColorScheme = true,
  storageKey = 'swiftui-theme',
  themes = defaultThemes,
  defaultTheme = enableSystem ? 'system' : 'light',
  attributeTheme = 'data-swiftui-theme',
  value,
  children,
  nonce,
  scriptProps,
  defaultVersion = defaultThemeVersion,
  forcedVersion,
}: ViewProviderProps) => {
  const [theme, setThemeState] = React.useState(() => getTheme(storageKey, defaultTheme))
  const [version, setThemeVersion] = React.useState(() => getSystemVersion(defaultThemeVersion))
  const [resolvedTheme, setResolvedTheme] = React.useState(() => theme === 'system' ? getSystemTheme() : theme)
  const attrs = !value ? themes : Object.values(value)

  const applyTheme = React.useCallback((theme?: string) => {
    let resolved = theme
    if (!resolved) return

    // If theme is system, resolve it before setting theme
    if (theme === 'system' && enableSystem) {
      resolved = getSystemTheme()
    }

    const name = value ? value[resolved] : resolved
    const enable = disableTransitionOnChange ? disableAnimation(nonce) : null
    const d = document.documentElement

    const handleAttribute = (attr: Attribute) => {
      if (attr === 'class') {
        d.classList.remove(...attrs)
        if (name) d.classList.add(name)
      } else if (attr.startsWith('data-')) {
        if (name) {
          d.setAttribute(attr, name)
        } else {
          d.removeAttribute(attr)
        }
      }
    }

    if (Array.isArray(attributeTheme)) attributeTheme.forEach(handleAttribute)
    else handleAttribute(attributeTheme)

    if (enableColorScheme) {
      const fallback = colorSchemes.includes(defaultTheme) ? defaultTheme : null
      const colorScheme = colorSchemes.includes(resolved) ? resolved : fallback
      // @ts-ignore
      d.style.colorScheme = colorScheme
    }

    enable?.()
  }, [nonce])

  const setTheme = React.useCallback((value: any) => {
    if (typeof value === 'function') {
      setThemeState(prevTheme => {
        const newTheme = value(prevTheme)

        saveToLS(storageKey, newTheme)

        return newTheme
      })
    } else {
      setThemeState(value)
      saveToLS(storageKey, value)
    }
  }, [])

  const handleMediaQuery = React.useCallback(
    (e: MediaQueryListEvent | MediaQueryList) => {
      const resolved = getSystemTheme(e)
      setResolvedTheme(resolved)

      if (theme === 'system' && enableSystem && !forcedTheme) {
        applyTheme('system')
      }
    },
    [theme, forcedTheme]
  )

  // Always listen to System preference
  React.useEffect(() => {
    const media = window.matchMedia(MEDIA)

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery)
    handleMediaQuery(media)

    return () => media.removeListener(handleMediaQuery)
  }, [handleMediaQuery])

  // localStorage event handling
  React.useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== storageKey) {
        return
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      if (!e.newValue) {
        setTheme(defaultTheme)
      } else {
        setThemeState(e.newValue) // Direct state update to avoid loops
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [setTheme])

  // Whenever theme or forcedTheme changes, apply it
  React.useEffect(() => {
    applyTheme(forcedTheme ?? theme)
  }, [forcedTheme, theme])

  // Whenever iOS version or forcedVersion changes, apply it
  React.useEffect(() => {
    const d = document.documentElement;
    const versionToApply = forcedVersion ?? version;
    if (versionToApply) {
      d.setAttribute(attributeVersion, versionToApply);
    } else {
      d.removeAttribute(attributeVersion);
    }
  }, [forcedVersion, version]);

  const providerValue = React.useMemo(
    () => ({
      theme,
      setTheme,
      forcedTheme,
      resolvedTheme: theme === 'system' ? resolvedTheme : theme,
      themes: enableSystem ? [...themes, 'system'] : themes,
      systemTheme: (enableSystem ? resolvedTheme : undefined) as 'light' | 'dark' | undefined,
      setVersion: setThemeVersion,
      version,
    }),
    [theme, setTheme, forcedTheme, resolvedTheme, enableSystem, themes, setThemeVersion, version]
  )

  return (
    <ViewContext.Provider value={providerValue}>
      <ViewScript
        {...{
          forcedTheme,
          storageKey,
          attributeTheme,
          enableSystem,
          enableColorScheme,
          defaultTheme,
          value,
          themes,
          nonce,
          scriptProps,
          defaultVersion,
          forcedVersion,
          attributeVersion,
        }}
      />
      <div id="root" {...stylex.props(s.View)}>
        {children}
      </div>
    </ViewContext.Provider>
  )
}

export const ViewScript = React.memo(
  ({
    forcedTheme,
    storageKey,
    attributeTheme,
    enableSystem,
    enableColorScheme,
    defaultTheme,
    value,
    themes,
    nonce,
    scriptProps,
    defaultVersion,
    forcedVersion,
    attributeVersion,
  }: ViewScriptProps) => {
    const scriptArgs = JSON.stringify([
      attributeTheme,
      storageKey,
      defaultTheme,
      forcedTheme,
      themes,
      value,
      enableSystem,
      enableColorScheme,
      defaultVersion,
      forcedVersion,
      attributeVersion,
    ]).slice(1, -1)

    return (
      <script
        {...scriptProps}
        suppressHydrationWarning
        nonce={typeof window === 'undefined' ? nonce : ''}
        dangerouslySetInnerHTML={{ __html: `(${script.toString()})(${scriptArgs})` }}
      />
    )
  }
)

// Helpers
const getTheme = (key: string, fallback?: string) => {
  if (isServer) return undefined
  let theme
  try {
    theme = localStorage.getItem(key) || undefined
  } catch (e) {
    // Unsupported
  }
  return theme || fallback
}

const disableAnimation = (nonce?: string) => {
  const css = document.createElement('style')
  if (nonce) css.setAttribute('nonce', nonce)
  css.appendChild(
    document.createTextNode(
      `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  )
  document.head.appendChild(css)

  return () => {
    // Force restyle
    ; (() => window.getComputedStyle(document.body))()

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css)
    }, 1)
  }
}

const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
  if (!e) e = window.matchMedia(MEDIA)
  const isDark = e.matches
  const systemTheme = isDark ? 'dark' : 'light'
  return systemTheme
}

const getSystemVersion = (defaultVersion: string) => {
  if (isServer) return defaultVersion;
  const userAgent = navigator.userAgent;
  const iosVersionMatch = userAgent.match(/iPhone OS (\d+_\d+)/);
  let version = defaultVersion;

  if (iosVersionMatch) {
    version = iosVersionMatch[1].replace('_', '.');
  }

  return version;
};