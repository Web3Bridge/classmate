"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import useGetLectureData from "@/hooks/adminHooks/useGetLectureData";
import useGetSignedAttendanceImages from "@/hooks/studentHooks/useGetSignedAttendanceImages";
import { useAccount } from "wagmi";

const UserAttendenceNFT = () => {
  const { lectureInfo } = useGetLectureData();

  const { address } = useAccount();
  const { signedAttendanceImages, isLoading } =
    useGetSignedAttendanceImages(address);
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
        {isLoading ? (
          <div className="w-full h-[250px] flex justify-center items-center">
            <h1 className="text-center md:text-2xl text-lg text-color1 font-bold">
              Fetching created attendance...
            </h1>
          </div>
        ) : isLoading === false && lectureInfo?.length === 0 ? (
          <div className="w-full h-[250px] flex justify-center items-center">
            <h1 className="text-center md:text-2xl text-lg text-color1 font-bold">
              No attendance created yet
            </h1>
          </div>
        ) : null}
        <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-8 gap-6">
          {signedAttendanceImages?.map((list, index) => (
            <div className="w-full p-3 rounded bg-color2" key={index}>
              <div className="w-full flex flex-col gap-3 justify-between bg-transparent">
                <div className="w-full h-[250px] relative overflow-hidden rounded">
                  <img
                    src={list.imageURI}
                    alt="NFtImage"
                    className="object-cover w-full h-full object-top"
                  />
                </div>
                <h2 className="text-gray-300 text-sm font-medium">
                  Topic: {list.topic}
                </h2>
                <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
                  <div className="flex flex-col">
                    <h3 className=" text-color1 text-nowrap">
                      <span className="uppercase font-bold">NFT ID:</span>
                      {list.lectureId}
                    </h3>
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
                            <img
                              src={list.imageURI}
                              alt="NFtImage"
                              className="object-cover w-full h-full object-top"
                            />
                          </div>
                          <section>
                            <div>{list.mentorName}</div>
                            <div>{list.topic}</div>
                          </section>
                        </div>
                      </main>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
};

export default UserAttendenceNFT;
//                         {/* <div className="flex-1 flex flex-col gap-2">
//                           <h2 className="text-color2 text-sm font-medium">
//                             Topic: {list.topic}
//                           </h2>
//                           <h2 className="text-color2 text-sm font-medium">
//                             Attendance: {list.studentsPresent}
//                           </h2>
//                           <h2 className="text-color2 text-sm font-medium">
//                             NFT ID: {list.lectureId}
//                           </h2>
//                           <h2 className="text-color2 text-sm font-medium">
//                             Status: {list.isActive ? "On" : "Off"}
//                           </h2>
//                           <DialogClose asChild>
//                             <Button
//                               type="button"
//                               onClick={() =>
//                                 handleToggle(list.lectureId, list.isActive)
//                               }
//                               disabled={
//                                 openAttendanceIsConfirming ||
//                                 closeAttendanceIsConfirming
//                               }
//                               className="bg-color1 text-sm text-white hover:bg-color2"
//                             >
//                               Turn {list.isActive ? "Off" : "On"}
//                             </Button>
//                           </DialogClose>
//                         </div> */}
//                       </main>
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section>

//         {/* create new attendance */}
//         {/* <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
//           <Dialog>
//             <DialogTrigger asChild>
//               <Button
//                 type="button"
//                 className="text-white bg-color1 hover:bg-color2 flex items-center gap-1"
//               >
//                 Create new attendance
//                 <IoIosAddCircleOutline className="text-xl" />
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>Classmate+</DialogTitle>
//                 <DialogDescription>
//                   Create new atttendance on classmate+
//                 </DialogDescription>
//               </DialogHeader>
//               <form className="w-full grid gap-4" onSubmit={handleSubmit}>
//                 <div className="w-full flex flex-col items-center">
//                   <div className="w-[80px] h-[80px] border-[0.5px] border-color3/50 rounded relative ">
//                     {selectedFile ? (
//                       <Image
//                         src={URL.createObjectURL(selectedFile)}
//                         alt="profile"
//                         className="w-full h-full object-cover"
//                         width={440}
//                         height={440}
//                         priority
//                         quality={100}
//                       />
//                     ) : (
//                       <span className="relative flex justify-center items-center w-full h-full">
//                         <SlPicture className="relative text-6xl inline-flex rounded text-gray-300" />
//                       </span>
//                     )}
//                     <input
//                       type="file"
//                       accept="image/*"
//                       hidden
//                       className="hidden"
//                       id="selectFile"
//                       onChange={handleSelectImage}
//                     />
//                     <label
//                       htmlFor="selectFile"
//                       className=" absolute -right-1 p-1 rounded-full -bottom-1 cursor-pointer bg-gray-100 border-[0.5px] border-color3/50 font-Bebas tracking-wider text-color3"
//                     >
//                       <FiEdit />
//                     </label>
//                   </div>
//                 </div>

//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="lectureId"
//                     className="text-color3 font-medium ml-1"
//                   >
//                     Lecture ID
//                   </label>
//                   <input
//                     type="text"
//                     name="lectureId"
//                     id="lectureId"
//                     placeholder="Enter lecture id"
//                     className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
//                     value={lectureId}
//                     onChange={(e) => setLectureId(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="topic"
//                     className="text-color3 font-medium ml-1"
//                   >
//                     Topic
//                   </label>
//                   <input
//                     type="text"
//                     name="topic"
//                     id="topic"
//                     placeholder="Enter topic"
//                     className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
//                     value={topic}
//                     onChange={(e) => setTopic(e.target.value)}
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <label
//                     htmlFor="imageUri"
//                     className="text-color3 font-medium ml-1"
//                   >
//                     Image URI
//                   </label>
//                   <input
//                     type="text"
//                     name="imageUri"
//                     id="imageUri"
//                     placeholder="Select an image and await IPFS url..."
//                     className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3"
//                     value={imageUri}
//                     readOnly
//                   />
//                 </div>

//                 <DialogFooter>
//                   <DialogClose asChild>
//                     <Button type="submit" disabled={isConfirming}>
//                       Submit
//                     </Button>
//                   </DialogClose>
//                 </DialogFooter>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div> */}
//       </main>
//     </section>
//   );
// };

// export default UserAttendenceNFT;
