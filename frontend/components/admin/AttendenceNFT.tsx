"use client";
import Image from "next/image";
import listOfNfts from "../../utils/Attendence.json";
import { Button } from "../ui/button";
import { FormEvent, useCallback, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";
import { IoCalendar } from "react-icons/io5";
import { useAccount } from "wagmi";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { toast } from "sonner";
import useCreateAttendance from "@/hooks/adminHooks/useCreateAttendance";
import { IoIosAddCircleOutline } from "react-icons/io";
import axios from "axios";
import { User2Icon } from "lucide-react";
import { FiEdit } from "react-icons/fi";
import { SlPicture } from "react-icons/sl";
import useGetLectureData from "@/hooks/adminHooks/useGetLectureData";

const AttendenceNFT = () => {
  const data = useMemo(() => listOfNfts, []);
  useGetLectureData();

  const { isConnected } = useAccount();
  const [selectedFile, setSelectedFile] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const [lectureId, setLectureId] = useState("");
  const [imageUri, setImageURI] = useState("");
  const [topic, setTopic] = useState("");

  const handleSelectImage = ({ target }: { target: any }) => {
    setSelectedFile(target.files[0]);

    getImage();
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const getImage = useCallback(async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile!);

        const response = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
              pinata_secret_api_key:
                process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
            },
          }
        );

        const fileUrl = response.data.IpfsHash;
        const gateWayAndhash = `https://gray-quiet-egret-248.mypinata.cloud/ipfs/${fileUrl}`;
        setImageURI(gateWayAndhash);
        console.log(gateWayAndhash);

        return fileUrl;
      } catch (error) {
        console.log("Pinata API Error:", error);
      }
    }
  }, [selectedFile]);

  const { createAttendance, isConfirming, isConfirmed } = useCreateAttendance(lectureId, imageUri, topic);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!isConnected)
      return toast.error("Please connect wallet", {
        position: "top-right",
      });
    if (!lectureId)
      return toast.error("Please enter lecture Id", {
        position: "top-right",
      });
    if (!imageUri)
      return toast.error("Select image and await image URI", {
        position: "top-right",
      });
    if (!topic)
      return toast.error("Please enter topic", {
        position: "top-right",
      });

    createAttendance();

    setLectureId("");
    setImageURI("");
    setTopic("");
  };


  return (
    <section className="w-full py-6 flex flex-col">
      <main className="w-full flex flex-col gap-7">
        <div className="flex flex-col ">
          <h1 className="uppercase text-color2 md:text-2xl font-bold text-xl">
            Attendence
          </h1>
          <h4 className="text-lg tracking-wider text-color2">
            All Attendence NFTs
          </h4>
        </div>

        <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-8 gap-6">
          {data.map((list, index) => (
            <div className="w-full p-3 rounded bg-color2" key={index}>
              <div className="w-full flex flex-col gap-3 justify-between bg-transparent">
                <div className="w-full h-[250px] relative overflow-hidden rounded">
                  <Image
                    src={list.nftUrl}
                    alt="NFtImage"
                    width={400}
                    height={400}
                    quality={100}
                    className="object-cover w-full h-full object-top"
                  />
                  <div className=" absolute top-0 right-0 flex items-center gap-1 bg-color2 text-gray-100 font-medium p-2 rounded text-xs">
                    <IoCalendar />
                    {list.date}
                  </div>
                </div>
                <h2 className="text-gray-300 text-sm font-medium">
                  Topic: {list.topic}
                </h2>
                <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className=" uppercase text-color1 font-bold text-sm">
                      NFT ID
                    </h3>
                    <h5 className="text-color2">

                    </h5>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-color1 text-sm text-white hover:bg-color2">
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Classmate+ Attendence</DialogTitle>
                        <DialogDescription>Attendence Detail</DialogDescription>
                      </DialogHeader>
                      <main className="w-full flex md:flex-row flex-col gap-4 mb-3 overflow-y-auto">
                        <div className="flex-1">
                          <div className="w-full h-[200px] overflow-hidden rounded">
                            <Image
                              src={list.nftUrl}
                              alt="NFtImage"
                              width={400}
                              height={400}
                              quality={100}
                              className="object-cover w-full h-full object-top"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                          <h2 className="text-color2 text-sm font-medium">
                            Topic: {list.topic}
                          </h2>
                          <p className="text-color2 text-xs">
                            Description: {list.desc}
                          </p>
                          <h2 className="text-color2 text-sm font-medium">
                            Attendence: {list.attendence}
                          </h2>
                          <h2 className="text-color2 text-sm font-medium">
                            NFT ID: {list.nftId}
                          </h2>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleToggle}
                              className="sr-only peer"
                            />
                            <div className="relative w-[2.1rem] h-4 bg-gray-300 peer-focus:outline-none   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all  peer-checked:bg-color1"></div>
                            <span className="ms-3 text-sm font-medium text-color2 ">
                              Status: Off
                            </span>
                          </label>
                        </div>
                      </main>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button">Cancel</Button>
                        </DialogClose>
                        <Button
                          type="button"
                          className="bg-color1 mb-3 md:mb-0"
                        >
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* create new attendance */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                className="text-white bg-color1 hover:bg-color2 flex items-center gap-1"
              >
                Create new attendance
                <IoIosAddCircleOutline className="text-xl" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Classmate+</DialogTitle>
                <DialogDescription>
                  Create new atttendance on classmate+
                </DialogDescription>
              </DialogHeader>
              <form className="w-full grid gap-4" onSubmit={handleSubmit}>
                <div className="w-full flex flex-col items-center">
                  <div className="w-[80px] h-[80px] border-[0.5px] border-color3/50 rounded relative ">
                    {selectedFile ? (
                      <Image
                        src={URL.createObjectURL(selectedFile)}
                        alt="profile"
                        className="w-full h-full object-cover"
                        width={440}
                        height={440}
                        priority
                        quality={100}
                      />
                    ) : (
                      <span className="relative flex justify-center items-center w-full h-full">
                        <SlPicture className="relative text-6xl inline-flex rounded text-gray-300" />
                      </span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      className="hidden"
                      id="selectFile"
                      onChange={handleSelectImage}
                    />
                    <label
                      htmlFor="selectFile"
                      className=" absolute -right-1 p-1 rounded-full -bottom-1 cursor-pointer bg-gray-100 border-[0.5px] border-color3/50 font-Bebas tracking-wider text-color3"
                    >
                      <FiEdit />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="lectureId"
                    className="text-color3 font-medium ml-1"
                  >
                    Lecture ID
                  </label>
                  <input
                    type="text"
                    name="lectureId"
                    id="lectureId"
                    placeholder="Enter lecture id"
                    className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
                    value={lectureId}
                    onChange={(e) => setLectureId(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="topic"
                    className="text-color3 font-medium ml-1"
                  >
                    Topic
                  </label>
                  <input
                    type="text"
                    name="topic"
                    id="topic"
                    placeholder="Enter topic"
                    className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="imageUri"
                    className="text-color3 font-medium ml-1"
                  >
                    Image URI
                  </label>
                  <input
                    type="text"
                    name="imageUri"
                    id="imageUri"
                    placeholder="Select an image and await IPFS url..."
                    className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
                    value={imageUri}
                    readOnly
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit" disabled={isConfirming}>
                      Submit
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </section>
  );
};

export default AttendenceNFT;
