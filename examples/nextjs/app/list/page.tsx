
'use client';

import { List, Section, Text, NavigationView, NavigationLink } from '@makstashkevich/swiftui-react';
import { useRouter } from 'next/navigation';

export default function ListExamplesPage() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <NavigationView>
      <List>
        <Section header={<Text>Simple List</Text>}>
          {items.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </Section>

        <Section header={<Text>List with Navigation</Text>}>
          {items.map((item, index) => (
            <NavigationLink 
                key={index}
                label={<Text>{item}</Text>}
                onClick={() => navigateTo(`/list/${item.replace(' ', '').toLowerCase()}`)}
            />
          ))}
        </Section>
      </List>
    </NavigationView>
  );
}
