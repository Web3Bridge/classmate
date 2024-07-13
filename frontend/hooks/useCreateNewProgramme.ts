"use client";
import { isSupportedChain } from "@/constants/chain";
import { getOrgFactoryContract } from "@/constants/contracts";
import { getProvider } from "@/constants/provider";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

const useCreateNewProgramme = (
  newOrganisationName: string,
  newProgrammeName: string,
  newImageURI: string,
  newAdminName: string
) => {
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

    const contract = getOrgFactoryContract(signer);

    const toastId = toast.loading("Processing...", {
      position: "top-right",
    });

    try {
      const tx = await contract.createorganisation(
        newOrganisationName,
        newProgrammeName,
        newImageURI,
        newAdminName
      );

      const receipt = await tx.wait();

      if (receipt.status) {
        router.push("/viewprogramme");
        return toast.success("Programme created successfully !", {
          id: toastId,
          position: "top-right",
        });
      }

      toast.error("Programme creation failed !", {
        id: toastId,
        position: "top-right",
      });
    } catch (error) {
      toast.error("Something went wrong !", {
        id: toastId,
        position: "top-right",
      });
    }
  }, [
    newOrganisationName,
    newProgrammeName,
    newImageURI,
    newAdminName,
    walletProvider,
    chainId,
    router,
  ]);
};

export default useCreateNewProgramme;
