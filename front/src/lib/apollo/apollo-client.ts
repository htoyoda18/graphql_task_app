import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react'

export const initializeClient = () => {
    return new ApolloClient({
        uri: 'http://localhost:3000/graphql',
        cache: new InMemoryCache()
    });
}

export const useApolloClient = () => {
    return initializeClient();
}
