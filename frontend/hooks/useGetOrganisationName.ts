"use client";
import { isSupportedChain } from "@/constants/chain";
import { getOrgContract } from "@/constants/contracts";
import { getProvider } from "@/constants/provider";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

const useGetOrganizationName = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const { organisationAddresses } = useAddressStore();

  const router = useRouter();

  return useCallback(
    async (mentorAddress: string) => {
      if (!isSupportedChain(chainId))
        return toast.error("Wrong network !", {
          position: "top-right",
        });

      if (!walletProvider)
        return toast.error("Please connect wallet !", {
          position: "top-right",
        });

      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const organisationAddress = organisationAddresses[mentorAddress];
      const contracts = organisationAddress.map((address) =>
        getOrgContract(signer, address)
      );

      try {
        const organizationName = await Promise.all(
          contracts.map((contract) =>
            contract.getOrganisationName(mentorAddress, organisationAddress)
          )
        );
        return organizationName;
      } catch (error) {
        toast.error("Something went wrong !", {
          position: "top-right",
        });
      }
    },
    [walletProvider, chainId, router]
  );
};

export default useGetOrganizationName;
