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
      <Card className="w-[90%] md:w-[50%]  mt-20 mx-auto bg-color2 text-white">
        <form action="" onSubmit={handleOnSubmit}>
          <CardHeader>
            <CardTitle className="capitalize">
              classmate + student form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white">Enter ID</CardDescription>
            <Input
              className="text-color2 bg-white/80"
              value={attendanceId}
              onChange={handleOnChange}
            />
          </CardContent>
          <div className="flex justify-end ">
            <CardFooter className="gap-2">
              <Button className="bg-color1 hover:bg-color1/50 transition-all ease-in-out">
                Cancel
              </Button>
              <Button
                className="bg-color1 hover:bg-color1/50 transition-all ease-in-out"
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
