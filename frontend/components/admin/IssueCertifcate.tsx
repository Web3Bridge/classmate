'use client'
import Image from "next/image"
import certImg from "../../public/admin/certificate.png"
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "../ui/dialog"
import { Button } from "../ui/button"
import { LiaCertificateSolid } from "react-icons/lia"
import { FormEvent, useState } from "react"

const IssueCertifcate = () => {

    const [image, setImage] = useState('')
    const [program, setProgram] = useState('')
    const [year, setYear] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <section className='w-full py-6 flex flex-col'>
            <main className='w-full flex flex-col gap-7'>
                <div className='flex flex-col'>
                    <h1 className='uppercase text-color2 md:text-2xl font-bold text-xl'>Certificate</h1>
                    <h4 className='text-lg tracking-wider text-color2'>Insert necessary Info for Issuing Certificate</h4>
                </div>

                <div className="w-full flex flex-col items-center gap-7">

                    <Image src={certImg} className=" object-contain" alt="Certificate Image" width={500} height={500} quality={100} />

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button type="button" className="text-white bg-color1 hover:bg-color2 flex items-center gap-1">Issue Certificate <LiaCertificateSolid className="text-xl" /></Button>
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
                                    <label htmlFor="certImage" className="text-color3 font-medium ml-1">Certification Image</label>
                                    <input type="file" name="certImage" id="certImage" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={image} onChange={e => setImage(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="program" className="text-color3 font-medium ml-1">Program</label>
                                    <input type="text" name="program" id="program" placeholder="Enter name of programm" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={program} onChange={e => setProgram(e.target.value)} />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="year" className="text-color3 font-medium ml-1">Year</label>
                                    <input type="text" name="year" id="year" placeholder="Enter year" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={year} onChange={e => setYear(e.target.value)} />
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button">Cancel</Button>
                                    </DialogClose>
                                    <Button type="button" className="bg-color1 mb-3 md:mb-0">Upload Data</Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>

                </div>
            </main>
        </section>
    )
}

export default IssueCertifcate