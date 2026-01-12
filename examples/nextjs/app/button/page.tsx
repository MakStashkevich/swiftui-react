'use client';

import { NavigationView, List, NavigationLink } from '@makstashkevich/swiftui-react';
import navigation from './navigation';
import { useNavigateTo } from '@/hooks/useNavigateTo';

export default function TextExamplesPage() {
    const goto = useNavigateTo();

    return (
        <NavigationView title={navigation.default.title} onBack={() => goto("/")}>
            <List>
                {Object.entries(navigation.examples).map(([name, example]) => (
                    <NavigationLink
                        key={name}
                        label={example.label}
                        onClick={() => goto(`${navigation.default.path}/${name}`)}
                    />
                ))}
            </List>
        </NavigationView>
    );
}
