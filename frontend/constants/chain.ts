export const SUPPORTED_CHAIN_ID = 84532;

export const isSupportedChain = (
  chainId: number | undefined
): chainId is number =>
  chainId !== undefined && Number(chainId) === SUPPORTED_CHAIN_ID;

//8453 for base mainnet
