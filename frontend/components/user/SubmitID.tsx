"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import useSignAttendance from "@/hooks/studentHooks/useSignAttendance";
import { useState } from "react";

export default function SubmitAttendanceID() {
  const [attendanceId, setAttendanceId] = useState("");
  const { signAttendance, isConfirming } = useSignAttendance(attendanceId);

  const handleOnChange = (e: any) => {
    setAttendanceId(e.target.value);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    signAttendance();
  };

  return (
    <div>
      <Card className="w-[90%] md:w-[50%] shadow-lg mt-20 mx-auto bg-gray-200/70 hover:border-color1/20">
        <form action="" onSubmit={handleOnSubmit}>
          <CardHeader>
            <CardTitle className="capitalize">
              classmate + student form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-3">Enter ID</CardDescription>
            <Input
              className="text-color2 bg-white/50"
              placeholder="Enter Lecture ID"
              value={attendanceId}
              onChange={handleOnChange}
            />
          </CardContent>
          <div className="flex justify-end ">
            <CardFooter className="gap-2">
              <Button className="bg-color2 hover:bg-color1 transition-all ease-in-out">
                Cancel
              </Button>
              <Button
                className="bg-color2 hover:bg-color1 transition-all ease-in-out"
                onClick={handleOnSubmit}
                disabled={isConfirming}
              >
                Submit
              </Button>
            </CardFooter>
          </div>
        </form>
      </Card>
    </div>
  );
}
