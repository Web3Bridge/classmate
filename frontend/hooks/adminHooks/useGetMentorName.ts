"use client";
import { OrganisationABI } from "@/constants/ABIs/OrganisationABI";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { useReadContract } from "wagmi";

const useGetMentorName = (_userAddress: any) => {
  const [mentorName, setMentorName] = useState("");

  const active_organisation = localStorage?.getItem("active_organisation");
  const contract_address = JSON.parse(active_organisation as `0x${string}`);

  const {
    data: nameOfMentor,
    error: nameOfMentorError,
    isPending: nameOfMentorIsPending,
  } = useReadContract({
    address: contract_address,
    abi: OrganisationABI,
    functionName: "getMentorsName",
    args: [_userAddress],
  });

  const fetchMentorName = useCallback(async () => {
    if (!nameOfMentor) return;
    setMentorName(nameOfMentor.toString());
  }, [nameOfMentor]);

  useEffect(() => {
    fetchMentorName();
  }, [fetchMentorName]);

  useEffect(() => {
    if (nameOfMentorError) {
      toast.error(nameOfMentorError.message, {
        position: "top-right",
      });
    }
  }, [nameOfMentorError]);

  return mentorName;
};

export default useGetMentorName;
