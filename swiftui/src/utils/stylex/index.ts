import * as stylex from '@stylexjs/stylex';

// допустимые типы аргументов
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

    for (const arg of args) {
        if (!arg) continue;

        // аргумент — строка? тогда это пользовательский класс
        if (typeof arg === 'string') {
            userClasses.push(arg);
            continue;
        }

        // аргумент — объект
        if (typeof arg === 'object' && !Array.isArray(arg)) {
            // Проверяем: это stylex объект?
            // Если stylex.props(arg) не падает — значит можно использовать
            try {
                const sx = stylex.props(arg);
                // Если вернуло stylex className - это стиль stylex
                if (sx && typeof sx.className === 'string') {
                    stylexArgs.push(arg);
                    continue;
                }
            } catch (_) {
                // не stylex объект — идём ниже
            }

            // Пользовательские пропсы
            if (arg.className) userClasses.push(arg.className);
            if (arg.style) userStyles.push(arg.style);

            Object.assign(finalProps, arg);
            continue;
        }
    }

    // Сначала собираем stylex стили (они объединяются правильно)
    const sx = stylex.props(...stylexArgs);

    // Финальный класс
    const classNameList = [
        sx.className,
        ...userClasses,
    ].filter(Boolean);

    if (classNameList.length > 0) {
        finalProps.className = classNameList.join(' ');
    }

    // Финальный style
    if (sx.style || userStyles.length > 0) {
        finalProps.style = {
            ...(sx.style || {}),
            ...Object.assign({}, ...userStyles),
        };
    }

    return finalProps;
}
