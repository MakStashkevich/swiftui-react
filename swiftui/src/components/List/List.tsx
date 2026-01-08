import React from 'react';
import { ListProps } from './types';
import styles from './styles';

import { getFrame } from '../../utils/frame';
import { getPadding } from '../../utils/padding';
import { getBorder } from '../../utils/border';
import { getCornerRadius } from '../../utils/cornerRadius';
import { getShadow } from '../../utils/shadow';
import { getTransform } from '../../utils/transform';
import { sx } from '../../utils/stylex';
import { wrapChildrenInSections } from '../../utils/sections';
import { ListProvider } from '../../utils/context/ListContext';

export const List: React.FC<ListProps> = ({
    children,
    style,
    // Modifiers
    frame,
    padding,
    border,
    cornerRadius,
    shadow,
    scaleEffect,
    rotationEffect,
    opacity,
    hidden,
    listStyle = 'automatic',
    // ... другие модификаторы
}) => {
    const modifierStyles: React.CSSProperties = {
        ...getFrame(frame),
        ...getPadding(padding),
        ...getBorder(border),
        ...getCornerRadius(cornerRadius),
        ...getShadow(shadow),
        ...getTransform(scaleEffect, rotationEffect),
        ...(opacity !== undefined && { opacity }),
        ...(hidden && { display: 'none' }),
        // ... другие стили модификаторов
    };

    if (listStyle === 'automatic') {
        listStyle = 'insetGrouped'; // default for iOS 15+
    }
    // todo: add listStyles - inset, plain, grouped, sidebar

    let listDesign;
    switch (listStyle) {
        case 'insetGrouped':
        default:
            listDesign = styles.insetGrouped;
            break;
    }

    return (
        <ListProvider>
            <div
                data-list-style={listStyle} 
                {...sx(styles.container, listDesign)} 
                style={{ ...style, ...modifierStyles }}
            >
                {wrapChildrenInSections(children)}
            </div>
            <div {...sx(styles.space)} />
        </ListProvider>
    );
};
