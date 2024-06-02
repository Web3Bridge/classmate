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

export default function SubmitID() {
  return (
    <div>
      <Card className="w-[50%] mx-auto bg-color2 text-white">
        <CardHeader>
          <CardTitle className="capitalize">classmate + student form</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white">Enter ID</CardDescription>
          <form action="">
            <Input className="text-color2 bg-white/80" />
          </form>
        </CardContent>
        <div className="flex justify-end ">
          <CardFooter className="gap-2">
            <Button className="bg-color1 hover:bg-color1/50 transition-all ease-in-out">
              Cancel
            </Button>
            <Button className="bg-color1 hover:bg-color1/50 transition-all ease-in-out">
              Submit
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
