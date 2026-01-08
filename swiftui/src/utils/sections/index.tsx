import React from 'react';
import {Section} from '../../components/Section';

export const wrapChildrenInSections = (children: React.ReactNode) => {
    const childrenArray = React.Children.toArray(children);
    const newChildren: React.ReactNode[] = [];
    let currentGroup: React.ReactNode[] = [];

    childrenArray.forEach((child) => {
        if (React.isValidElement(child) && (child.type as any).name === 'Section') {
            if (currentGroup.length > 0) {
                newChildren.push(<Section>{currentGroup}</Section>);
                currentGroup = [];
            }
            newChildren.push(child);
        } else {
            currentGroup.push(child);
        }
    });

    if (currentGroup.length > 0) {
        newChildren.push(<Section>{currentGroup}</Section>);
    }

    return newChildren;
};