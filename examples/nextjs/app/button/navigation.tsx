import { Button, Image, Text, VStack } from '@makstashkevich/swiftui-react';
import { sfHandThumbsupFill, sfMagnifyingglass, sfMessageFill } from '@bradleyhodges/sfsymbols';
import { NavigationData } from "../../types/navigation";

const navigation: NavigationData = {
    default: {
        title: "Button Examples",
        path: "/button",
    },
    examples: {
        default: {
            label: "Default Button",
            content: (
                <VStack spacing={5}>
                    <Button
                        title="Cancel"
                        role="cancel"
                        action={() => { }}
                    />
                    <Button
                        title="Destructive"
                        role="destructive"
                        action={() => { }}
                    />
                </VStack>
            )
        },
        styled: {
            label: "Styled Button",
            content: (
                <VStack spacing={15}>
                    {/* Styled Button */}
                    <Button
                        title="Plain"
                        buttonStyle='plain'
                        action={() => { }}
                    />
                    <Button
                        title="Automatic"
                        buttonStyle='automatic'
                        action={() => { }}
                    />
                    <Button
                        title="Bordered"
                        buttonStyle='bordered'
                        action={() => { }}
                    />
                    <Button
                        title="Bordered Prominent"
                        buttonStyle='borderedProminent'
                        action={() => { }}
                    />
                    <Button
                        title="Borderless"
                        buttonStyle='borderless'
                        action={() => { }}
                    />
                    {/* Solid Button */}
                    <Button action={() => { }}>
                        <Text
                            padding
                            foregroundColor='white'
                            background='orange'
                            cornerRadius={10}
                        >
                            Solid Button
                        </Text>
                    </Button>
                    {/* Button with Shadow */}
                    <Button action={() => { }} shadow={{ color: 'red', radius: 15, y: 5 }} cornerRadius={10}>
                        <Text
                            padding
                            foregroundColor='white'
                            background='orange'
                            cornerRadius={10}
                        >
                            Button with Shadow
                        </Text>
                    </Button>
                    {/* Rounded Button */}
                    <Button action={() => { }} cornerRadius={100}>
                        <Text
                            padding
                            foregroundColor='white'
                            background='orange'
                            cornerRadius={100}
                        >
                            Rounded Button
                        </Text>
                    </Button>
                    {/* Disabled */}
                    <Button title="Enabled" action={() => { }} buttonStyle='borderedProminent' tint='blue' controlSize='large' />
                    <Button title="Disabled" action={() => { }} buttonStyle='borderedProminent' tint='blue' controlSize='large' disabled />
                    {/* Border Button */}
                    <Button action={() => { }}>
                        <Text
                            padding
                            border={{ color: 'blue', width: 2 }}
                        >
                            Rounded Button
                        </Text>
                    </Button>
                    {/* Square Border Button */}
                    {/* <Button action={() => {}} cornerRadius={100}>
                        <Text
                            padding
                            background={RoundedRectangle(cornerRadius: 10).stroke(.blue, lineWidth: 1)}
                        >
                            Rounded Button
                        </Text>
                    </Button> */}
                    {/* Button with Symbols */}
                    <Button action={() => { }} padding background='blue' foregroundColor='white' cornerRadius={10}>
                        <Image systemName={sfMagnifyingglass} />
                        <Text padding={{ horizontal: 20 }}>
                            Search
                        </Text>
                    </Button>
                    {/* Control Size */}
                    <Button action={() => { }} padding background='blue' foregroundColor='white' cornerRadius={100}>
                        <VStack>
                            <Image systemName={sfMessageFill} />
                            <Text padding={{ horizontal: 20 }}>
                                Message
                            </Text>
                        </VStack>
                    </Button>
                    {/* Border Shape */}
                    {/* Custom Styled */}
                </VStack>
            )
        },
        image: {
            label: "Image Button",
            content: (
                <Button action={() => { }}>
                    <Image
                        systemName={sfHandThumbsupFill}
                        font="largeTitle"
                        foregroundColor='green'
                    />
                </Button>
            )
        }
    }
}

export default navigation;