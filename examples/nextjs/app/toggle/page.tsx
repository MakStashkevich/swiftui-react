
'use client';

import { useNavigateTo } from '@/hooks/useNavigateTo';
import { sfWifi } from '@bradleyhodges/sfsymbols';
import { Toggle, Image, Text, NavigationView, Spacer, useBinding, List } from '@makstashkevich/swiftui-react';

export default function ToggleExamplesPage() {
  const goto = useNavigateTo();

  const isOnDefault = useBinding(false);
  const isOnStyled = useBinding(true);
  const isOnWithLabel = useBinding(false);

  return (
    <NavigationView title="Toggle Examples" onBack={() => goto('/')}>
      <List>
        <Toggle label="Default Toggle" isOn={isOnDefault} />
        <Toggle isOn={isOnStyled} tint='purple'>
          <Text font='headline' foregroundColor='green'>Styled Toggle</Text>
        </Toggle>
        <Toggle isOn={isOnWithLabel}>
          <Image systemName={sfWifi} style={{ marginRight: 10, color: 'blue' }}/>
          <Text>Toggle with Label</Text>
          <Spacer />
        </Toggle>
      </List>
    </NavigationView>
  );
}
