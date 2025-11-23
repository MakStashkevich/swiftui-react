import { Form, View, Text, Section } from "@makstashkevich/swiftui-react";

export default function Home() {
  return (
    <Form>
      <Section header={<Text>HEADER</Text>} footer={<Text>Footer</Text>}>
        <Text>Test 1</Text>
        <Text>Test 2</Text>
        <Text>Test 3</Text>
      </Section>
      <Section>
        <Text>Test 1</Text>
        <Text>Test 2</Text>
        <Text>Test 3</Text>
      </Section>
    </Form>
  );
}
