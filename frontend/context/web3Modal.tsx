'use client'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID


const baseSepolia = {
    chainId: 84532,
    name: 'Base Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.basescan.org/',
    rpcUrl: `${process.env.NEXT_PUBLIC_HTTP_RPC}`
}

// 3. Create a metadata object
const metadata = {
    name: 'Classmate',
    description: 'An onchain LMS system',
    url: 'https://localhost:3000', // origin must match your domain & subdomain
    icons: ['https://avatars.mywebsite.com/']
}
// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
    ethersConfig,
    chains: [baseSepolia],
    projectId: `${projectId}`,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    enableOnramp: true // Optional - false as default
})

export function Web3Modal({ children }: {
    children: React.ReactNode;
}) {
    return children
}