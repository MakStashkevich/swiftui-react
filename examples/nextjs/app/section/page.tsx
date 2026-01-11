
'use client';

import { List, Section, Text, NavigationView } from '@makstashkevich/swiftui-react';

export default function SectionExamplesPage() {
  return (
    <NavigationView>
      <List>
        <Section header={<Text>Section 1 Header</Text>} footer={<Text>Section 1 Footer</Text>}>
          <Text>Item A</Text>
          <Text>Item B</Text>
        </Section>

        <Section header={<Text>Section 2 Header</Text>} footer={<Text>Section 2 Footer</Text>}>
          <Text>Item C</Text>
          <Text>Item D</Text>
        </Section>
      </List>
    </NavigationView>
  );
}
