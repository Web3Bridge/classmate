"use client";
import { Camera, Loader2 } from "lucide-react";
import { FormEvent, useCallback, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useEditStudentsName from "@/hooks/nameEditingHooks/useEditStudentsName";

export default function UserSettings() {
  const [selectedFile, setSelectedFile] = useState();

  // const [username, setUsername] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = `${firstName} ${lastName}`;

  const {
    editStudentsName,
    isWriting: isWritingtoEditMentorsName,
    isConfirming: isConfirmingEditMentorsName,
  } = useEditStudentsName(fullName);

  const handleNameChange = (e: FormEvent) => {
    e.preventDefault();
    editStudentsName();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectImage = ({ target }: { target: any }) => {
    setSelectedFile(target.files[0]);
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
              pinata_api_key: process.env.VITE_PINATA_API_KEY,
              pinata_secret_api_key: process.env.VITE_PINATA_SECRET_API_KEY,
            },
          }
        );

        const fileUrl = response.data.IpfsHash;
        setUrl(fileUrl);
        console.log(fileUrl);
        return fileUrl;
      } catch (error) {
        console.log("Pinata API Error:", error);
      }
    }
  }, [selectedFile]);

  getImage();

  // const handleSubmit = () => {
  //   console.log("hello world");
  // };

  // const handleClick = async () => {
  //   setIsLoading(true);
  //   await handleSubmit();
  //   setIsLoading(false);
  // };

  return (
    <div className="flex items-center flex-1 justify-center w-full">
      <div className="w-full lg:w-[50%] md:w-[70%] bg-color2/95 rounded-lg px-7 py-12 flex flex-col items-center">
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
          className="rounded-full w-32 h-32 bg-stone-700 flex items-center justify-center cursor-pointer"
        >
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span className="relative flex w-16 h-16">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-tr from-white/40 via-color1 to-white/40 opacity-85"></span>
              <Camera className="w-16 h-16 relative inline-flex rounded-full text-muted-foreground" />
            </span>
          )}
        </label>

        <form
          className="flex flex-col my-4 w-full gap-4"
          onSubmit={handleNameChange}
        >
          <div className="space-y-2">
            <label className="text-sm text-white capitalize">first name</label>
            <Input
              className="border border-stone-100 py-2 placeholder:text-stone-500"
              placeholder="Enter username"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white capitalize">last name</label>
            <Input
              className="border border-stone-100 py-2 placeholder:text-stone-500"
              value={lastName}
              placeholder="Enter lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <Button
            type="button"
            onClick={handleNameChange}
            className="bg-gradient-to-r cursor-pointer disabled:cursor-not-allowed from-color1 via-color1 to-white/20"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin w-4 h-4 mr-2" />
                Registering User...
              </>
            ) : (
              "Register User"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
