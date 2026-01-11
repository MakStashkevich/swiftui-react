
'use client';

import { Text, NavigationView, HStack } from '@makstashkevich/swiftui-react';
import { sfStarFill, sfHeartFill } from '@bradleyhodges/sfsymbols';
import { Image } from '@makstashkevich/swiftui-react';

export default function HStackExamplesPage() {
  return (
    <NavigationView>
      <HStack spacing={10}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </HStack>

      <HStack alignment="center" spacing={20} style={{ marginTop: 20 }}>
        <Image systemName={sfStarFill} style={{ fontSize: 24 }} />
        <Text>Centered with 20pt spacing</Text>
        <Image systemName={sfHeartFill} style={{ fontSize: 24 }} />
      </HStack>
    </NavigationView>
  );
}
