'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const useNavigateTo = () => {
    const router = useRouter();
    return useCallback((path: string, params?: Record<string, string>) => {
        const queryString = params ? new URLSearchParams(params).toString() : '';
        router.push(`${path}${queryString.length > 0 ? `?` + queryString : ''}`);
    }, [router]);
};
