'use client';

import { sfHeartFill } from '@bradleyhodges/sfsymbols';
import { Form, Text, Section, HStack, VStack, ZStack, Image, Toggle, useBinding, ForEach, Spacer, NavigationLink, NavigationView } from "@makstashkevich/swiftui-react";
import { useRouter } from 'next/navigation';

const items = [
    {
        destination: '/text',
        label: 'Text'
    }
];

export default function HomeView() {
    const isOnEnabled = useBinding(false);
    const router = useRouter();
    return (
        <NavigationView>
            <Form>
                {/* <Text>First Text</Text>
            <Text>Second Text</Text>

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

                <Image systemName={sfHeartFill} />
                <Text>Text without Image</Text>
            </Section> */}

                {/* <Section
                header={<Text>Web Browser</Text>}
            >
                <HStack>
                    <Text>HStack Text before Toggle</Text>
                    <Toggle isOn={isOnEnabled}>Toggle Text</Toggle>
                    <Text>HStack Text after Toggle</Text>
                </HStack>

                <VStack>
                    <Text>VStack Text before Toggle</Text>
                    <Toggle isOn={isOnEnabled}>Toggle Text</Toggle>
                    <Text>VStack Text after Toggle</Text>
                </VStack>

                <ZStack>
                    <Text>ZStack Text before Toggle</Text>
                    <Toggle isOn={isOnEnabled}>Toggle Text</Toggle>
                    <Text>ZStack Text after Toggle</Text>
                </ZStack>

                <Toggle isOn={isOnEnabled}>Single Toggle Text</Toggle>
            </Section> */}

                <Section>
                    {ForEach(items, (item, id) =>
                        <NavigationLink
                            label={
                                <HStack>
                                    <Text>{item.label}</Text>
                                    <Spacer />
                                </HStack>
                            }
                            onClick={() => router.push(item.destination)}
                        />
                    )}
                </Section>
            </Form>
        </NavigationView>
    );
}
