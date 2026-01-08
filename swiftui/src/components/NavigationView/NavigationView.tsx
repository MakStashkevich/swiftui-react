import React from 'react';
import { NavigationViewProps } from './types';
import { NavigationViewProvider } from '../../utils/context/NavigationViewContext';

export const NavigationView: React.FC<NavigationViewProps> = ({
    children,
}) => {
    return (
        <NavigationViewProvider>
            {children}
        </NavigationViewProvider>
    );
};
