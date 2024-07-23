import { OrganisationABI } from "@/constants/ABIs/OrganisationABI";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useBlockNumber, useReadContract } from "wagmi";

const useGetLectureData = () => {
  const [lectureInfo, setLectureInfo] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const queryClient = useQueryClient();
  const { data: blockNumber } = useBlockNumber({ watch: true });

  const active_organisation = window.localStorage?.getItem(
    "active_organisation"
  );
  const contract_address = JSON.parse(active_organisation as `0x${string}`);

  const {
    data: listOfLectureIds,
    error: listOfLectureIdsError,
    isPending: listOfLectureIdsIsPending,
    queryKey,
  } = useReadContract({
    address: contract_address,
    abi: OrganisationABI,
    functionName: "getLectureIds",
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey });
  }, [blockNumber, queryClient, queryKey]);

  console.log(listOfLectureIds);

  // const fetchLectureData = useCallback(async () => {
  //   if (!listOfLectureIds) return;

  //   try {
  //     const formattedRes = listOfLectureIds.map((address: any) =>
  //       address.toString()
  //     );

  //     const data = formattedRes.map(async (address: any) => {
  //       const contract = getOrgContract(readOnlyProvider, address);
  //       const name = await contract.getOrganizationName();
  //       const cohort = await contract.getCohortName();
  //       const moderator = await contract.getModerator();
  //       const imageURI = await contract.getOrganisationImageUri();
  //       const isMentor = await contract.VerifyMentor(_userAddress);
  //       const isStudent = await contract.VerifyStudent(_userAddress);
  //       return {
  //         address,
  //         name,
  //         cohort,
  //         moderator,
  //         imageURI,
  //         isMentor,
  //         isStudent,
  //       };
  //     });
  //     const results = await Promise.all(data);

  //     if (typeof window !== "undefined") {
  //       localStorage.setItem("memberOrganisations", JSON.stringify(results));
  //     }
  //     setIsLoading(false);
  //     setList(results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [listOfOrganisations?.length]);
};

export default useGetLectureData;
