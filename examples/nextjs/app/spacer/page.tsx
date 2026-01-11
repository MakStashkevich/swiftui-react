
'use client';

import { Text, NavigationView, VStack, HStack, Spacer } from '@makstashkevich/swiftui-react';

export default function SpacerExamplesPage() {
  return (
    <NavigationView>
      <VStack style={{ height: 200, borderWidth: 1, borderColor: 'gray' }}>
        <Text>Top</Text>
        <Spacer />
        <Text>Bottom</Text>
      </VStack>

      <HStack style={{ width: 200, borderWidth: 1, borderColor: 'gray', marginTop: 20 }}>
        <Text>Left</Text>
        <Spacer />
        <Text>Right</Text>
      </HStack>
    </NavigationView>
  );
}
