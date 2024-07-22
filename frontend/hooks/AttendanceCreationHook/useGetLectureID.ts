"use client";
import { OrganisationABI } from "@/constants/ABIs/OrganisationABI";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useContractRead, useReadContract } from "wagmi";

const useGetLectureIds = () => {
  const [lectureIds, setLectureIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const active_organisation = localStorage?.getItem("active_organisation");
  const contract_address = JSON.parse(active_organisation as `0x${string}`);

  const {
    data,
    error: readError,
    isLoading: isReading,
  } = useReadContract({
    address: contract_address,
    abi: OrganisationABI,
    functionName: "getLectureIds",
    args: [],
  });

  useEffect(() => {
    setIsLoading(isReading);
    if (readError) {
      setError(readError.message);
      toast.error(readError.message, {
        position: "top-right",
      });
    } else {
      setError(null);
      if (data) {
        setLectureIds(data.map((id: any) => ethers.decodeBytes32String(id)));
        toast.success("Lecture IDs fetched successfully", {
          position: "top-right",
        });
      }
    }
  }, [data, readError, isReading]);

  return {
    lectureIds,
    isLoading,
    error,
  };
};

export default useGetLectureIds;
