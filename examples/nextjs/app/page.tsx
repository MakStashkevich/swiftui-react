import { Form, Text, Section, HStack, VStack, ZStack } from "@makstashkevich/swiftui-react";

export default function Home() {
  return (
    <Form>
      <Section
        header={
          <Text>HEADER</Text>
        }
        footer={
          <Text>Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer</Text>
        }
      >
        <VStack>
          <Text>Favorite</Text>
          <Text>Favorites</Text>
        </VStack>
        <HStack>
          <Text>Downloads</Text>
        </HStack>
      </Section>
      <Section
        header={<Text>PREFERENCES</Text>}
      >
        <Text>Test 1</Text>
      </Section>
    </Form>
  );
}
