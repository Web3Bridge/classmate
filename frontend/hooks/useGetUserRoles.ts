import { isSupportedChain } from "@/constants/chain";
import { getOrgContract } from "@/constants/contracts";
import { getProvider } from "@/constants/provider";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast } from "sonner";

const useVerifyMentor = (mentorAddress: string) => {
  const { organisationAddresses } = useAddressStore();
  const organisationAddress = organisationAddresses[mentorAddress];

  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const router = useRouter();

  return useCallback(async () => {
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

    const contracts = organisationAddress.map((address) =>
      getOrgContract(signer, address)
    );

    const isMentor = await Promise.all(
      contracts.map((contract) =>
        contract.verifyMentor(mentorAddress, organisationAddress)
      )
    );
    return isMentor;
  }, [mentorAddress, organisationAddress, chainId, walletProvider, router]);
};
export default useVerifyMentor;
