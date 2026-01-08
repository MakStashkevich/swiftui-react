import { createContext, useContext, FC, ReactNode } from 'react';

interface ListContextType { }

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ListContext.Provider value={{}}>
            {children}
        </ListContext.Provider>
    );
};

export const isListContext = () => {
    return useContext(ListContext) !== undefined;
}

export const useListContext = () => {
    const context = useContext(ListContext);
    if (context === undefined) {
        throw new Error('useListContext must be used within a List');
    }
    return context;
};
