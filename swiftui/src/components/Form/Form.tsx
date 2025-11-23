import React from 'react';
import { FormProps } from './types';
import { List } from '../List';

// Form duplicate logic from List
export const Form: React.FC<FormProps> = (props) => {
    return (
        <List {...props}>
            {props.children}
        </List>
    );
};