import { Text } from '@makstashkevich/swiftui-react';
import { NavigationData } from "../../types/navigation";

const navigation: NavigationData = {
    default: {
        title: "Text Examples",
        path: "/text",
    },
    examples: {
        default: {
            label: "Default Text",
            content: <Text>Hello, SwiftUI-React!</Text>
        },
        styled: {
            label: "Styled Text",
            content: <Text font="largeTitle" foregroundColor="blue" bold>Styled Text</Text>
        },
        multiline: {
            label: "Multiline Text",
            content: (
                <Text style={{ textAlign: 'center', paddingInline: 1 }} lineLimit={2}>
                    This is a very long text that will span multiple lines to demonstrate multiline text.
                </Text>
            )
        }
    }
}

export default navigation;