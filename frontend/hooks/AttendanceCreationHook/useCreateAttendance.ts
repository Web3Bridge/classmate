"use client";
import { OrganisationABI } from "@/constants/ABIs/OrganisationABI";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  useWriteContract,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";

const useCreateAttendance = (
  _lectureId: string,
  _uri: string,
  _topic: string
) => {
  const [isWriting, setIsWriting] = useState(false);

  const { data: hash, error, writeContract } = useWriteContract();
  const active_organisation = localStorage?.getItem("active_organisation");
  const contract_address = JSON.parse(active_organisation as `0x${string}`);

  const createAttendance = useCallback(() => {
    setIsWriting(true);
    const lectureIdBytes = ethers.encodeBytes32String(_lectureId);
    writeContract({
      address: contract_address,
      abi: OrganisationABI,
      functionName: "createAttendance",
      args: [lectureIdBytes, _uri, _topic],
    });
  }, [_lectureId, _uri, _topic]);

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const toastId = "createAttendance";

  useEffect(() => {
    if (isConfirming) {
      toast.success("Processing", {
        id: toastId,
        position: "top-right",
      });
    }

    if (isConfirmed) {
      toast.success("Attendance created", {
        id: toastId,
        position: "top-right",
      });
    }

    if (error) {
      toast.error((error as BaseError).shortMessage || error.message, {
        id: toastId,
        position: "top-right",
      });
      setIsWriting(false);
    }
  }, [isConfirming, isConfirmed, error]);
  return {
    createAttendance,
    isWriting,
    isConfirming,
  };
};
export default useCreateAttendance;
