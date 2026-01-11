import React from 'react';
import { Color } from '../utils/colors';

interface ChevronLeftIconProps {
    foregroundColor?: Color;
}

export const ChevronLeftIcon: React.FC<ChevronLeftIconProps> = () => {
    return (
        <svg width="13" height="21" viewBox="0 0 13 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1499 1.7251L2.2749 10.6001L11.1499 19.4751" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
