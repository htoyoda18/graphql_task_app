'use client'

import { useApolloClient } from '../lib/apollo/apollo-client'
import { ReactNode } from 'react'
import { ApolloProvider as ApolloClientProvider } from '@apollo/client'

type Props = {
    children: ReactNode
}

export const ApolloProvider = ({ children }: Props) => {
    const client = useApolloClient()
    return <ApolloClientProvider client={client}>{children}</ApolloClientProvider>
}