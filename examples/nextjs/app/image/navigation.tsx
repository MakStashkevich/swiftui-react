import { Image } from '@makstashkevich/swiftui-react';
import { sfHeartFill, sfStarFill } from '@bradleyhodges/sfsymbols';
import exampleImage from './example_image.png';
import { NavigationData } from "../../types/navigation";

const navigation: NavigationData = {
    default: {
        title: "Image Examples",
        path: "/image",
    },
    examples: {
        system: {
            label: "System Image",
            content: (
                <Image
                    systemName={sfStarFill}
                    font="largeTitle"
                    foregroundColor='yellow'
                />
            )
        },
        resizable: {
            label: "Resizable Image",
            content: (
                <Image
                    systemName={exampleImage}
                    resizable
                    scaledToFit
                    frame={{ width: 100, height: 100 }}
                />
            )
        },
        clipped: {
            label: "Clipped Image",
            content: (
                <Image
                    systemName={sfHeartFill}
                    resizable
                    frame={{ width: 100, height: 100 }}
                    clipShape='circle'
                />
            )
        }
    }
}

export default navigation;