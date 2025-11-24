import * as stylex from '@stylexjs/stylex';

type SXArg =
  | null
  | undefined
  | string
  | Record<string, any>;

export function sx(...args: SXArg[]) {
    const finalProps: Record<string, any> = {};
    const classNames: string[] = [];
    const styles: Record<string, any>[] = [];

    for (const arg of args) {
        if (!arg) continue;

        // 1. Строки -> className
        if (typeof arg === 'string') {
            classNames.push(arg);
            continue;
        }

        // 2. Обычный объект (НЕ массив)
        if (typeof arg === 'object' && !Array.isArray(arg)) {
            // Проверяем: это stylex объект?
            // stylex.props(arg) бросает ошибку, если arg не stylex-стиль -> оборачиваем в try
            try {
                const sxProps = stylex.props(arg);

                if (sxProps.className) classNames.push(sxProps.className);
                if (sxProps.style) styles.push(sxProps.style);

                continue;
            } catch (_) {
                // Не stylex -> обычный объект пропсов
            }

            // className от пользователя
            if (typeof arg.className === 'string') {
                classNames.push(arg.className);
            }

            // user inline styles
            if (typeof arg.style === 'object') {
                styles.push(arg.style);
            }

            // Остальные пропсы
            Object.assign(finalProps, arg);

            continue;
        }

        // 3. А массивы просто игнорируем
    }

    if (classNames.length > 0) {
        finalProps.className = classNames.join(' ');
    }

    if (styles.length > 0) {
        finalProps.style = Object.assign({}, ...styles);
    }

    return finalProps;
}
