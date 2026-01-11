
'use client';

import { NavigationView, NavigationLink, Text, View } from '@makstashkevich/swiftui-react';
import { useRouter } from 'next/navigation';

export default function NavigationViewExamplesPage() {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <NavigationView title="NavigationView Examples">
            <NavigationLink
                label={<Text>Go to Detail 1</Text>}
                onClick={() => navigateTo("/navigationview/detail1")}
            />
            <NavigationLink
                label={<Text>Go to Detail 2</Text>}
                onClick={() => navigateTo("/navigationview/detail2")}
            />
        </NavigationView>
    );
}
