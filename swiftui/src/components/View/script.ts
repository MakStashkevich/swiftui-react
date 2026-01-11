import { ViewScriptProps } from './types';

export const script = (
    attributeTheme: ViewScriptProps['attributeTheme'],
    storageKey: ViewScriptProps['storageKey'],
    defaultTheme: ViewScriptProps['defaultTheme'],
    forcedTheme: ViewScriptProps['forcedTheme'],
    themes: ViewScriptProps['themes'],
    value: ViewScriptProps['value'],
    enableSystem: ViewScriptProps['enableSystem'],
    enableColorScheme: ViewScriptProps['enableColorScheme'],
    defaultVersion: ViewScriptProps['defaultVersion'],
    forcedVersion: ViewScriptProps['forcedVersion'],
    attributeVersion: ViewScriptProps['attributeVersion'],
) => {
    const el = document.documentElement
    const systemThemes = ['light', 'dark']

    function updateTheme(theme: string) {
        const attributes = Array.isArray(attributeTheme) ? attributeTheme : [attributeTheme]

        attributes.forEach(attr => {
            const isClass = attr === 'class'
            const classes = isClass && value ? themes?.map((t: any) => value[t] || t) : themes
            if (isClass) {
                if (classes) el.classList.remove(...(classes as string[]))
                if (value && value[theme]) el.classList.add(value[theme])
                else el.classList.add(theme)
            } else {
                if (attr) el.setAttribute(attr as string, theme)
            }
        })

        el.classList.add('swiftui')
        el.classList.add('tabbarScrollLayout')
        setColorScheme(theme)
    }

    function setColorScheme(theme: string) {
        if (enableColorScheme && systemThemes.includes(theme)) {
            el.style.colorScheme = theme
        }
    }

    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    function getSystemVersion() {
        const userAgent = navigator.userAgent;
        const iosVersionMatch = userAgent.match(/iPhone OS (\d+_\d+)/);
        let version = defaultVersion;

        if (iosVersionMatch) {
            version = iosVersionMatch[1].replace('_', '.');
        }

        return version;
    }

    function updateVersion(version: string) {
        el.setAttribute(attributeVersion, version);
    }

    if (forcedTheme) {
        updateTheme(forcedTheme)
    } else {
        try {
            const themeName = localStorage.getItem(storageKey || '') || defaultTheme
            const isSystem = enableSystem && themeName === 'system'
            const theme = isSystem ? getSystemTheme() : (themeName || '')
            updateTheme(theme)
        } catch (e) {
            //
        }
    }

    if (forcedVersion) {
        updateVersion(forcedVersion);
    } else {
        try {
            let version = getSystemVersion();
            if (version > defaultVersion) {
                version = defaultVersion;
            }
            updateVersion(version);
        } catch (e) {
            //
        }
    }

    try {
        const dpr = window.devicePixelRatio;
        el.style.setProperty('--dpr', dpr.toString());
    } catch (e) {
        //
    }
}