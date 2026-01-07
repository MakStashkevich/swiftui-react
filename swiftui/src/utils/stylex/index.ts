import * as stylex from '@stylexjs/stylex';

type SXInput =
  | null
  | undefined
  | false
  | string
  | Record<string, any>;

export function sx(...args: SXInput[]) {
    const finalProps: Record<string, any> = {};
    const stylexArgs: any[] = [];
    const userClasses: string[] = [];
    const userStyles: Record<string, any>[] = [];
    const otherProps: Record<string, any>[] = [];

    for (const arg of args) {
        if (!arg) continue;

        if (typeof arg === 'string') {
            userClasses.push(arg);
            continue;
        }

        if (typeof arg === 'object' && !Array.isArray(arg)) {
            // Проверяем: это stylex объект?
            if ('$$css' in arg) {
                stylexArgs.push(arg);
                continue;
            }

            // Пользовательские пропсы
            const { className, style, ...rest } = arg;
            if (className) userClasses.push(className);
            if (style) userStyles.push(style);

            otherProps.push(rest);
            continue;
        }
    }

    // Объединяем все остальные пропсы
    Object.assign(finalProps, ...otherProps);

    const sxProps = stylex.props(...stylexArgs);

    const classNameList = [
        sxProps.className,
        ...userClasses,
    ].filter(Boolean);

    if (classNameList.length > 0) {
        finalProps.className = classNameList.join(' ');
    }
    
    if (sxProps.style || userStyles.length > 0) {
        finalProps.style = {
            ...sxProps.style,
            ...Object.assign({}, ...userStyles),
        };
    }

    return finalProps;
}
