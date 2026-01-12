'use client';

import { useNavigateTo } from '@/hooks/useNavigateTo';
import { List, Section, NavigationLink, Text, View, NavigationView } from '@makstashkevich/swiftui-react';
import { useRouter } from 'next/navigation';

export default function MainView() {
  const router = useRouter();
  const goto = useNavigateTo();

  return (
    <NavigationView title="SwiftUI Components">
      <List>
        <Section header={<Text>Basic Components</Text>}>
          <NavigationLink label="Text" onClick={() => goto("/text")} />
          <NavigationLink label="Image" onClick={() => goto("/image")} />
          <NavigationLink label="Toggle" onClick={() => goto("/toggle")} />
          <NavigationLink label="Button" onClick={() => goto("/button")} />
        </Section>

        {/* <Section header={<Text>Containers</Text>}>
          <NavigationLink label="VStack" onClick={() => goto("/vstack")} />
          <NavigationLink label="HStack" onClick={() => goto("/hstack")} />
          <NavigationLink label="ZStack" onClick={() => goto("/zstack")} />
          <NavigationLink label="Form" onClick={() => goto("/form")} />
        </Section>

        <Section header={<Text>Lists and Sections</Text>}>
          <NavigationLink label="List" onClick={() => goto("/list")} />
          <NavigationLink label="Section" onClick={() => goto("/section")} />
        </Section>

        <Section header={<Text>Navigation</Text>}>
          <NavigationLink label="NavigationView" onClick={() => goto("/navigationview")} />
        </Section>

        <Section header={<Text>Other Components</Text>}>
          <NavigationLink label="Spacer" onClick={() => goto("/spacer")} />
        </Section> */}
      </List>
    </NavigationView>
  );
}
