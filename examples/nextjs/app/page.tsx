import { sfHeartFill } from '@bradleyhodges/sfsymbols';
import { Form, Text, Section, HStack, VStack, ZStack, Image } from "@makstashkevich/swiftui-react";

export default function Home() {
  return (
    <Form>
      <Section
        header={
          <Text>First Header</Text>
        }
        footer={
          <Text>Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer</Text>
        }
      >
        <HStack>
          <Text>First HStack Text</Text>
          <Text>Second HStack Text</Text>
        </HStack>
        
        <VStack>
          <Text>First VStack Text</Text>
          <Text>Second VStack Text</Text>
        </VStack>
        
        <ZStack>
          <Text>First ZStack Text</Text>
          <Text>Second ZStack Text</Text>
        </ZStack>

        <HStack>
          <Text>Single HStack Text</Text>
        </HStack>

        <Text>Single Text</Text>
      </Section>
      <Section
        header={<Text>Second Header</Text>}
      >
        <HStack>
          <Image systemName={sfHeartFill} />
          <Text>HStack Text with Image</Text>
        </HStack>

        <VStack>
          <Image systemName={sfHeartFill} />
          <Text>VStack Text with Image</Text>
        </VStack>

        <ZStack>
          <Image systemName={sfHeartFill} />
          <Text>ZStack Text with Image</Text>
        </ZStack>

        <HStack>
          <Image />
          <Text>Text With Unknown Icon</Text>
        </HStack>
      </Section>
    </Form>
  );
}
