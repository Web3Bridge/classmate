"use client";
import React, { FormEvent, useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useCreateNewProgramme from "@/hooks/onboardingHooks/useCreateNewProgramme";
import { useAccount } from "wagmi";
import useGetUserOrganisations from "@/hooks/onboardingHooks/useGetUserOrganisation";
import { ethers } from "ethers";

const Programmes = () => {
  const { isConnected, address } = useAccount()

  const router = useRouter();

  const [instName, setInstName] = useState<string>("");
  const [adminName, setAdminName] = useState<string>("");
  const [programmeName, setProgrammeName] = useState<string>("");
  const [imageURI, setImageURI] = useState<string>("");

  const { createProgramme, isWriting, isConfirming } = useCreateNewProgramme(instName, programmeName, imageURI, adminName);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isConnected)
      return toast.error("Please connect wallet", { position: "top-right" });
    if (!instName)
      return toast.error("Please enter institution name", {
        position: "top-right",
      });
    if (!adminName)
      return toast.error("Please enter admin name", { position: "top-right" });
    if (!programmeName)
      return toast.error("Please enter programme name", {
        position: "top-right",
      });
    if (!imageURI)
      return toast.error("Please enter image URI", { position: "top-right" });

    createProgramme();

    setInstName("");
    setAdminName("");
    setProgrammeName("");
    setImageURI("");
  };

  // redirect to programme page if not connected 
  const change = useCallback(async () => {
    if (!isConnected) {
      router.push("/programme");
    }
  }, [isConnected, router]);

  useEffect(() => {
    change();
  }, [change, isConnected]);

  // getting list of organisations
  const listOfOrganisations: any[] = useGetUserOrganisations(address);

  // route handling 
  const handleRouting = (contract_address: string, mentor: boolean, student: boolean) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("active_organisation", JSON.stringify(contract_address));
      if (mentor) {
        router.push(`/admin`);
      } else if (student) {
        router.push(`/user`);
      } else {
        return toast.error("You're not allowed access !", { position: "top-right" });
      }
    }
  }

  return (
    <section className="flex flex-col w-full ">
      <div className="w-full flex justify-between items-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-color1">MY PROGRAMMES</h1>
          <p className="text-lg text-color3">
            Welcome to Classmate + Programmes
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="text-color2 bg-white border border-color2 hover:bg-color2 hover:text-white rounded-lg flex items-center gap-1 text-sm py-2.5 px-6"
            >
              Create new programmes{" "}
              <IoIosAddCircleOutline className="text-xl" />
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Classmate+</DialogTitle>
              <DialogDescription>
                Create new programme on classmate+
              </DialogDescription>
            </DialogHeader>
            <form className="w-full grid gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label
                  htmlFor="institutionName"
                  className="text-color3 font-medium ml-1"
                >
                  Institution Name
                </label>
                <input
                  type="text"
                  name="institutionName"
                  id="institutionName"
                  placeholder="Enter institution name"
                  className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
                  value={instName}
                  onChange={(e) => setInstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="adminName"
                  className="text-color3 font-medium ml-1"
                >
                  Admin Name
                </label>
                <input
                  type="text"
                  name="adminName"
                  id="adminName"
                  placeholder="Enter admin name"
                  className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="programmeName"
                  className="text-color3 font-medium ml-1"
                >
                  Programme Name
                </label>
                <input
                  type="text"
                  name="programmeName"
                  id="programmeName"
                  placeholder="Enter programme name"
                  className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
                  value={programmeName}
                  onChange={(e) => setProgrammeName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="imageURI"
                  className="text-color3 font-medium ml-1"
                >
                  Image URI
                </label>
                <input
                  type="text"
                  name="imageURI"
                  id="imageURI"
                  placeholder="Enter image URI"
                  className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
                  value={imageURI}
                  onChange={(e) => setImageURI(e.target.value)}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit" disabled={isWriting || isConfirming}>Submit</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {
        listOfOrganisations.length === 0 ? <div className="w-full h-[250px] flex justify-center items-center">
          <h1 className='text-center text-3xl text-color1 font-bold'>No programmes created yet</h1>
        </div> : (
          <main className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-6 lg:gap-8 mt-16">
            {listOfOrganisations?.map((organisation, index) => (
              <div
                key={index}
                className="w-full flex flex-col gap-4 rounded-lg shadow-lg p-7 border border-color2/10 relative cursor-pointer hover:border-color1"
                onClick={() => handleRouting(organisation.address, organisation.isMentor, organisation.isStudent)}
              >
                <div className="w-[120px] h-[120px] rounded-full bg-gray-200">
                  <img
                    src={organisation.imageURI}
                    alt={organisation.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl text-color1 font-medium">
                  {organisation.name}
                </h3>
                <div className="w-[15%] h-1.5 rounded-lg bg-color1"></div>

                <h5 className="text-color3 text-sm capitalize">
                  {organisation.cohort}
                </h5>

                <div className="flex justify-between items-end w-full mt-4">
                  <div className="flex flex-col">
                    <small className="text-color3 text-xs">Role</small>
                    {
                      organisation.isMentor && <h4 className="text-color1 font-bold">Admin</h4>
                    }
                    {
                      organisation.isStudent && <h4 className="text-color1 font-bold">Student</h4>
                    }
                  </div>
                </div>

                <div className="absolute top-6 right-6 flex flex-col items-center">
                  <small className="text-color3 text-xs">Status</small>
                  <h4 className="text-green-500 bg-green-100 rounded-lg px-2 py-1.5 font-medium text-xs">
                    Ongoing
                  </h4>
                </div>
              </div>
            ))}
          </main>
        )
      }

    </section>
  );
};

export default Programmes;
