'use client'
// context/BingoContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a interface para o contexto
interface BingoContextType {
    roomId: string | undefined;
    user: string | undefined;
    setRoomId: (id: string | undefined) => void;
    setUser: (user: string | undefined) => void;
}

// Define a interface para o provedor
interface BingoProviderProps {
    children: ReactNode;
}

// Cria o contexto
const BingoContext = createContext<BingoContextType | undefined>(undefined);

// Provedor do contexto
export const BingoProvider: React.FC<BingoProviderProps> = ({ children }) => {
    const [roomId, setRoomId] = useState<string | undefined>();
    const [user, setUser] = useState<string | undefined>();

    return (
        <BingoContext.Provider value={{ roomId, user, setRoomId, setUser }}>
            {children}
        </BingoContext.Provider>
    );
};

// Hook personalizado para usar o contexto
export const useBingoContext = (): BingoContextType => {
    const context = useContext(BingoContext);
    if (!context) {
        throw new Error('useBingoContext deve ser usado dentro de um BingoProvider');
    }
    return context;
};
