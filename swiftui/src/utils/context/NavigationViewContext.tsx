import { createContext, useCallback, useContext, useRef, useState } from "react";

interface NavigationViewContextType {
    pressedItemId: number;
    setPressedItem: (id: number, value?: boolean) => void;
}

const NavigationViewContext = createContext<NavigationViewContextType | undefined>(undefined);

export const NavigationViewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pressedItemId, setPressedItemId] = useState<number>(-1);
    const activePressedItemRef = useRef<number | null>(null);

    const setPressedItem = useCallback((id: number, value: boolean = false) => {
        if (value) {
            if (activePressedItemRef.current === null) {
                setPressedItemId(id);
                activePressedItemRef.current = id;
            }
        } else {
            if (activePressedItemRef.current === id) {
                setPressedItemId(-1);
                activePressedItemRef.current = null;
            }
        }
    }, []);

    return (
        <NavigationViewContext.Provider value={{ pressedItemId, setPressedItem }}>
            {children}
        </NavigationViewContext.Provider>
    );
};

export const isNavigationViewContext = () => {
    return useContext(NavigationViewContext) !== undefined;
}

export const useNavigationViewContext = () => {
    const context = useContext(NavigationViewContext);
    if (context === undefined) {
        throw new Error('useNavigationViewContext must be used within a NavigationView');
    }
    return context;
};