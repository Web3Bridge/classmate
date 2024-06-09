"use client"
import Image from "next/image"
import listOfNfts from "../../utils/Attendence.json"
import { Button } from "../ui/button"
import { useMemo, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "../ui/dialog"
import { IoCalendar } from "react-icons/io5"

const AttendenceNFT = () => {
    const data = useMemo(() => listOfNfts, []);
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <section className='w-full py-6 flex flex-col'>
            <main className='w-full flex flex-col gap-7'>
                <div className='flex flex-col'>
                    <h1 className='uppercase text-color2 md:text-2xl font-bold text-xl'>Attendence</h1>
                    <h4 className='text-lg tracking-wider text-color2'>All Attendence NFTs</h4>
                </div>

                <section className='w-full grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 md:gap-8 gap-6'>
                    {
                        data.map((list, index) => (
                            <div className="w-full p-3 rounded bg-color2" key={index}>
                                <div className="w-full flex flex-col gap-3 justify-between bg-transparent">
                                    <div className="w-full h-[250px] relative overflow-hidden rounded">
                                        <Image src={list.nftUrl} alt="NFtImage" width={400} height={400} quality={100} className="object-cover w-full h-full object-top" />
                                        <div className=" absolute top-0 right-0 flex items-center gap-1 bg-color2 text-gray-100 font-medium p-2 rounded text-xs">
                                            <IoCalendar />
                                            {list.date}
                                        </div>
                                    </div>
                                    <h2 className="text-gray-300 text-sm font-medium">Topic:{" "}{list.topic}</h2>
                                    <div className="bg-gray-100 p-3 rounded flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <h3 className=" uppercase text-color1 font-bold text-sm">NFT ID</h3>
                                            <h5 className="text-color2">{list.nftId}</h5>
                                        </div>

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button className="bg-color1 text-sm text-white hover:bg-color2">View</Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>Classmate+ Attendence</DialogTitle>
                                                    <DialogDescription>
                                                        Attendence Detail
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <main className="w-full flex md:flex-row flex-col gap-4 mb-3 overflow-y-auto">
                                                    <div className="flex-1">
                                                        <div className="w-full h-[200px] overflow-hidden rounded">
                                                            <Image src={list.nftUrl} alt="NFtImage" width={400} height={400} quality={100} className="object-cover w-full h-full object-top" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 flex flex-col gap-2">
                                                        <h2 className="text-color2 text-sm font-medium">Topic:{" "}{list.topic}</h2>
                                                        <p className="text-color2 text-xs">Description:{" "}{list.desc}</p>
                                                        <h2 className="text-color2 text-sm font-medium">Attendence:{" "}{list.attendence}</h2>
                                                        <h2 className="text-color2 text-sm font-medium">NFT ID:{" "}{list.nftId}</h2>
                                                        <label className="inline-flex items-center cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={isChecked}
                                                                onChange={handleToggle}
                                                                className="sr-only peer"
                                                            />
                                                            <div className="relative w-[2.1rem] h-4 bg-gray-300 peer-focus:outline-none   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[0px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-4 after:h-4 after:transition-all  peer-checked:bg-color1"></div>
                                                            <span className="ms-3 text-sm font-medium text-color2 ">Status:{" "}Off</span>
                                                        </label>
                                                    </div>
                                                </main>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button type="button">Cancel</Button>
                                                    </DialogClose>
                                                    <Button type="button" className="bg-color1 mb-3 md:mb-0">Save Changes</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </section>
            </main>
        </section>
    )
}

export default AttendenceNFT