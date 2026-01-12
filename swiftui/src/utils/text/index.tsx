import { StringBinding } from "../binding";
import {Text} from "../../components/Text";
import React from "react";

export type UIText = React.ReactNode | StringBinding | string;

export const prepareTextComponent = (text: UIText): React.ReactNode | null => {
    if (typeof text === 'string') {
        return <Text>{text}</Text>;
    } else if (React.isValidElement(text)) {
        return text;
    } else if (typeof text === 'object' && text !== null && 'value' in text && typeof text.value === 'string') {
        return <Text>{text.value}</Text>;
    }
    return null;
}