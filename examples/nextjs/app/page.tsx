import { Form, Text, Section, HStack, VStack, ZStack } from "@makstashkevich/swiftui-react";

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
        <Text>Test 1</Text>
      </Section>
    </Form>
  );
}
