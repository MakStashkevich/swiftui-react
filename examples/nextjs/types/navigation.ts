import { ReactNode } from "react";

export interface NavigationItem {
    label: string;
    content: ReactNode;
}

export interface NavigationExamples {
    [key: string]: NavigationItem;
}

export interface NavigationData {
    default: {
        title: string;
        path: string;
    };
    examples: NavigationExamples;
}