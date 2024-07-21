"use client";
import { OrganisationABI } from "@/constants/ABIs/OrganisationABI";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  useWaitForTransactionReceipt,
  useWriteContract,
  type BaseError,
} from "wagmi";

const useRegisterStudents = (data: any[]) => {
  const [isWriting, setIsWriting] = useState(false);

  const { data: hash, error, writeContract } = useWriteContract();

  const active_organisation = localStorage.getItem("active_organisation");
  const contract_address = JSON.parse(active_organisation as `0x${string}`);

  const registerStudents = useCallback(() => {
    setIsWriting(true);

    const formattedData = data.map(({ address, name }) => ({
      _address: address as `0x${string}`,
      _name: name,
    }));

    writeContract({
      address: contract_address,
      abi: OrganisationABI,
      functionName: "registerStudents",
      args: [formattedData],
    });
  }, [data]);

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const toastId = "registerStudents";

  useEffect(() => {
    if (isConfirming) {
      toast.loading("Processing...", {
        id: toastId,
        position: "top-right",
      });
    }

    if (isConfirmed) {
      toast.success("students registered successfully !", {
        id: toastId,
        position: "top-right",
      });
      setIsWriting(false);
    }

    if (error) {
      toast.error((error as BaseError).shortMessage || error.message, {
        id: toastId,
        position: "top-right",
      });
      setIsWriting(false);
    }
  }, [isConfirmed, error, isConfirming]);

  return {
    registerStudents,
    isWriting,
    isConfirming,
  };
};

export default useRegisterStudents;
