"use client";
import { useBlockNumber, useReadContract } from "wagmi";
import { toast } from "sonner";
import { useEffect, useState, useCallback } from "react";
import { OrganisationFactoryABI } from "@/constants/ABIs/OrganisationFactoryABI";
import { useQueryClient } from "@tanstack/react-query";
import { getOrgContract } from "@/constants/contracts";
import { readOnlyProvider } from "@/constants/provider";

const useGetUserOrganisations = (_userAddress: any) => {
  const [list, setList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({ watch: true });

  const {
    data: listOfOrganisations,
    error: listOfOrganisationsError,
    isPending: listOfOrganisationsIsPending,
    queryKey,
  } = useReadContract({
    address: process.env.NEXT_PUBLIC_ORG_FACTORY_CONTRACT as `0x${string}`,
    abi: OrganisationFactoryABI,
    functionName: "getUserOrganisatons",
    args: [_userAddress],
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [blockNumber, queryClient, queryKey]);

  const fetchUserOrganisations = useCallback(async () => {
    if (!listOfOrganisations) return;

    try {
      const formattedRes = listOfOrganisations.map((address: any) =>
        address.toString()
      );

      const data = formattedRes.map(async (address: any) => {
        const contract = getOrgContract(readOnlyProvider, address);
        const name = await contract.getOrganizationName();
        const cohort = await contract.getCohortName();
        const moderator = await contract.getModerator();
        const imageURI = await contract.getOrganisationImageUri();
        const isMentor = await contract.VerifyMentor(_userAddress);
        const isStudent = await contract.VerifyStudent(_userAddress);
        return {
          address,
          name,
          cohort,
          moderator,
          imageURI,
          isMentor,
          isStudent,
        };
      });
      const results = await Promise.all(data);

      if (typeof window !== "undefined") {
        localStorage.setItem("memberOrganisations", JSON.stringify(results));
      }
      setIsLoading(false);
      setList(results);
    } catch (error) {
      console.error(error);
    }
  }, [listOfOrganisations?.length]);

  useEffect(() => {
    fetchUserOrganisations();
  }, [fetchUserOrganisations]);

  useEffect(() => {
    if (listOfOrganisationsError) {
      toast.error(listOfOrganisationsError.message, { position: "top-right" });
    }
  }, [listOfOrganisationsError]);

  return { list, isLoading };
};

export default useGetUserOrganisations;
