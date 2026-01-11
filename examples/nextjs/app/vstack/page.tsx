
'use client';

import { NavigationView, Text, VStack } from '@makstashkevich/swiftui-react';
import { sfArrowRight } from '@bradleyhodges/sfsymbols';
import { Image } from '@makstashkevich/swiftui-react';

export default function VStackExamplesPage() {
  return (
    <NavigationView>
      <VStack spacing={10}>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </VStack>

      <VStack alignment="leading" spacing={10} style={{ marginTop: 20 }}>
        <Text>Leading Aligned</Text>
        <Text>with 10pt spacing</Text>
        <Image systemName={sfArrowRight} style={{ fontSize: 24 }} />
      </VStack>
    </NavigationView>
  );
}
