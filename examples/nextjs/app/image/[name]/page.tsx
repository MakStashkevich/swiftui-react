'use client';

import { Text, NavigationView } from '@makstashkevich/swiftui-react';
import { useParams } from 'next/navigation';
import navigation from '../navigation';
import { useNavigateTo } from '@/hooks/useNavigateTo';

export default function TextExamplePage() {
    const goto = useNavigateTo();
    const params = useParams();
    const { name: exampleName } = params;

    const findItemKey = Object.keys(navigation.examples).find(name => name === exampleName);
    const currentItem = findItemKey && findItemKey in navigation.examples ? navigation.examples[findItemKey as keyof typeof navigation.examples] : null;

    return (
        <NavigationView
            backTitle={navigation.default.title}
            onBack={() => goto(navigation.default.path)}
        >
            {currentItem ? currentItem.content : <Text>Not Found</Text>}
        </NavigationView>
    )
}
