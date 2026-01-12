import React, { MouseEventHandler, useRef } from 'react';
import { NavigationViewProps } from './types';
import { NavigationViewProvider } from '../../utils/context/NavigationViewContext';
import { sx } from '../../utils/stylex';
import styles from './styles';
import { Text } from '../Text';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { ChevronLeftIcon } from '../../icons/ChevronLeftIcon';
import { useInteraction } from '../../hooks/useInteraction';
import { useBinding } from '../../hooks/useBinding';
import { usePrevious } from '../../hooks/usePrevious';
import { useMounted } from '../../hooks/useMounted';

export const NavigationView: React.FC<NavigationViewProps> = ({
    children,
    title,
    onBack,
    leading,
    trailing,
    titleDisplayMode = 'automatic',
    titleDisplayHidden = false,
    backTitle = 'Back',
}) => {
    if (titleDisplayMode === 'automatic') {
        titleDisplayMode = onBack ? 'inline' : 'large';
    }

    const scrollTop = useScrollDirection();
    const [largeTitleVisible, setLargeTitleVisible] = React.useState(true);
    const [titleVisible, setTitleVisible] = React.useState(false);
    const [headerOpacity, setHeaderOpacity] = React.useState(0);
    const [largeTextScale, setLargeTextScale] = React.useState(1);

    const titleThreshold = 3;
    const largeTitleThreshold = 35; // Threshold to hide large title and show small title

    React.useEffect(() => {
        const handleScroll = () => {
            if (scrollTop > largeTitleThreshold) {
                setLargeTitleVisible(false);
                setTitleVisible(true);
            } else {
                setLargeTitleVisible(true);
                setTitleVisible(false);
            }
        };

        handleScroll();
    }, [scrollTop]);

    React.useEffect(() => {
        const navigationHeaderOpacity = titleDisplayMode === 'large'
            ? Math.max(0, Math.min(1, (scrollTop - largeTitleThreshold - 16) / titleThreshold))
            : Math.max(0, Math.min(1, scrollTop / titleThreshold));

        setHeaderOpacity(navigationHeaderOpacity);

        if (scrollTop < 0) {
            const titleMaxLetters = 20;
            const titleLength = title ? title.length : 0;
            const letterMultiplier = titleLength > titleMaxLetters ? 0 : (titleMaxLetters - titleLength) * 0.001;
            const titleScaleMax = 1 + (letterMultiplier * titleLength);
            setLargeTextScale(Math.min(titleScaleMax, 1 + Math.abs(scrollTop) / 1000)); // Scale up
        } else {
            setLargeTextScale(1);
        }
    }, [scrollTop, titleDisplayMode, title]);

    const hasAnyParams = Boolean(title || onBack || leading || trailing);
    return (
        <NavigationViewProvider>
            {hasAnyParams && (
                <>
                    {!titleDisplayHidden && (
                        <div {...sx(styles.titleBar)}>
                            <div {...sx(styles.titleBarBackground)} style={{ opacity: (1 - headerOpacity) }} />
                            <div {...sx(styles.titleBarColored)} style={{ opacity: headerOpacity }} />
                            <div {...sx(styles.titleContainer)}>
                                <div {...sx(styles.titleItem, styles.titleItemLeading)}>
                                    {leading ?? (
                                        onBack ? <NavigationBackButton onClick={onBack} title={backTitle} /> : undefined
                                    )}
                                </div>
                                <div {...sx(styles.titleCenter, (titleVisible || titleDisplayMode === 'inline') ? styles.titleVisible : styles.titleHidden)}>
                                    {title}
                                </div>
                                <div {...sx(styles.titleItem, styles.titleItemTrailing)}>{trailing}</div>
                            </div>
                        </div>
                    )}
                    {titleDisplayMode === 'large' ? (
                        <Text
                            {...sx(styles.titleLarge, largeTitleVisible ? styles.titleVisible : styles.titleHidden)}
                            style={{ transform: `scale(${largeTextScale})`, marginBottom: onBack ? 0 : undefined }}
                            font='largeTitle'
                            bold
                        >
                            {title}
                        </Text>
                    ) : (
                        <div {...sx(styles.titleBottom)} />
                    )}
                </>
            )}
            {children}
        </NavigationViewProvider>
    );
};

type NavigationBackButtonProps = {
    onClick: MouseEventHandler<HTMLDivElement>;
    title: string;
}

const NavigationBackButton = ({ onClick, title }: NavigationBackButtonProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const isMounted = useMounted();
    const isPressed = useBinding(false);
    const wasPressed = usePrevious(isPressed);

    const handleOnClick = (event: any) => {
        if (onClick) onClick(event);
    }

    const onInteract = (value: boolean) => {
        isPressed.setValue(value);
    }

    useInteraction({ ref: divRef, onInteract });

    const highlightBackground = () => {
        // Don't show any animation on initial mount
        if (!isMounted) {
            return null;
        }
        // Show when pressed
        if (isPressed.value) {
            return styles.backButtonPressed;
        }
        // Play only when it was just released
        if (!isPressed.value && wasPressed) {
            return styles.backButtonUnpressed;
        }
        // Otherwise, no background
        return null;
    };

    return (
        <div ref={divRef} onClick={handleOnClick} {...sx(styles.backButton, highlightBackground())}>
            <ChevronLeftIcon />
            <Text foregroundColor='accentColor'>{title}</Text>
        </div>
    )
}