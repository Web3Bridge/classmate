import { getProvider } from "@/constants/provider";
import { isSupportedChain } from "@/constants/chain";
import { getOrgFactoryContract } from "@/constants/contracts";

import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from "sonner";
import { useState } from "react";

const useGetUserOrganisations = async (_userAddress: any) => {
  const [list, setList] = useState([]);
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  if (!isSupportedChain(chainId)) {
    return toast.error("Wrong network !", {
      position: "top-right",
    });
  }

  if (!walletProvider) {
    return toast.error("Please connect wallet !", {
      position: "top-right",
    });
  }

  const readWriteProvider = getProvider(walletProvider);
  const signer = await readWriteProvider.getSigner();

  const contract = getOrgFactoryContract(signer);

  try {
    const addresses = await contract.getUserOrganisations(_userAddress);
    console.log(addresses);
    return addresses;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default useGetUserOrganisations;
