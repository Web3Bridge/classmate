import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function Attendance() {
  return (
    <>
      <section className="">
        <div>
          <h1 className="text-xl font-bold">Attendance NFTs</h1>
          <p className="capitalize text-xs">Total attendance marked</p>
        </div>
      </section>

      <section className="w-full grid md:grid-cols-3 gap-8 ">
        <main className="w-full md:col-span-4">
          {/* <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 "></div> */}

          <section className="mt-3 grid md:grid-cols-4 gap-2">
            <Card className=" bg-color2 text-gray-100 border-none">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className=" bg-color2 text-gray-100 border-none">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className=" bg-color2 text-gray-100 border-none">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Card className=" bg-color2 text-gray-100 border-none">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </section>
        </main>
      </section>
    </>
  );
}
