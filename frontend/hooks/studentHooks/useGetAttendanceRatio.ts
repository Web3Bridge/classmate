import { OrganisationABI } from "@/constants/ABIs/OrganisationABI";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { useBlockNumber, useReadContract } from "wagmi";

const useGetAttendanceRatio = (student_address: any) => {
  const queryClient = useQueryClient();
  const [attendanceRatio, setAttendanceRatio] = useState({
    attendance: 0,
    totalClasses: 0,
  });

  const active_organisation = window.localStorage?.getItem(
    "active_organisation"
  );
  const contract_address = JSON.parse(active_organisation as `0x${string}`);

  const { data: blockNumber } = useBlockNumber({ watch: true });

  const {
    data: attendanceRatioData,
    error: attendanceRatioError,
    isPending: attendanceRatioIsPending,
    queryKey,
  } = useReadContract({
    address: contract_address,
    abi: OrganisationABI,
    functionName: "getStudentAttendanceRatio",
    args: [student_address],
  });

  useEffect(() => {
    if (blockNumber) {
      queryClient.invalidateQueries({ queryKey });
    }
  }, [blockNumber, queryClient, queryKey]);

  const fetchAttendanceRatio = useCallback(() => {
    if (attendanceRatioData) {
      const [attendance, totalClasses] = attendanceRatioData;
      setAttendanceRatio({
        attendance: Number(attendance),
        totalClasses: Number(totalClasses),
      });
    }
  }, [attendanceRatioData]);

  useEffect(() => {
    fetchAttendanceRatio();
  }, [attendanceRatioData, fetchAttendanceRatio]);

  return {
    attendanceRatio,
    isPending: attendanceRatioIsPending,
    error: attendanceRatioError,
  };
};

export default useGetAttendanceRatio;
