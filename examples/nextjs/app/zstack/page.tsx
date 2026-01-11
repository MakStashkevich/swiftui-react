
'use client';

import { Text, NavigationView, ZStack } from '@makstashkevich/swiftui-react';

export default function ZStackExamplesPage() {
  return (
    <NavigationView>
      <ZStack style={{ width: 200, height: 200, backgroundColor: 'red' }}>
        <Text style={{ color: 'white' }}>Front</Text>
      </ZStack>

      <ZStack alignment="bottomTrailing" style={{ width: 250, height: 250, backgroundColor: 'blue', marginTop: 20 }}>
        <Text style={{ color: 'white', padding: 5, backgroundColor: 'rgba(0,0,0,0.7)', borderRadius: 5 }}>
          Bottom Trailing
        </Text>
      </ZStack>
    </NavigationView>
  );
}
