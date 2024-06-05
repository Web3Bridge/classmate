'use client'
import React, { FormEvent, useState } from 'react'
import { Button } from '../ui/button'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { HiOutlineViewfinderCircle } from 'react-icons/hi2'
import { FaCheckToSlot } from 'react-icons/fa6'
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from '../ui/dialog'
import { useRouter } from 'next/navigation'


const StartProgramme = () => {
    const router = useRouter()

    const [instName, setInstName] = useState<string>("")
    const [adminName, setAdminName] = useState<string>("")
    const [programmeName, setProgrammeName] = useState<string>("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const handleViewProgramme = () => {
        router.push('/viewprogramme')
    }

    return (
        <section className="w-full flex flex-col gap-10">
            <div className="w-full flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-color1">Welcome to Programmes</h1>
                <p className="text-lg text-color3">Classmate + Programmes</p>
            </div>

            <main className="w-full flex flex-col gap-2">
                <h3 className="text-xl font-medium text-color1 ml-2">Hello, this platform has the following features available for you and more ...</h3>
                <div className='w-full md:p-10 p-6 bg-color2 rounded-lg'>
                    <ul className='flex flex-col gap-6 '>
                        {
                            lists.map((list, index) => (
                                <li key={index} className='flex text-base items-start gap-1' >
                                    <FaCheckToSlot className='text-base text-white mt-1.5' />
                                    <p className='text-base text-white flex flex-col'>
                                        <span className='font-semibold'>{list.caption}:{" "}</span>
                                        <span className='text-base'>{list.text}</span>
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </main>

            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
                <Dialog>
                    <DialogTrigger>
                        <Button type="button" className="text-white bg-color1 hover:bg-color2 flex items-center gap-1">Create new programmes <IoIosAddCircleOutline className="text-xl" /></Button>
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
                                <label htmlFor="institutionName" className="text-color3 font-medium ml-1">Institution Name</label>
                                <input type="text" name="institutionName" id="institutionName" placeholder="Enter institution name" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={instName} onChange={e => setInstName(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="adminName" className="text-color3 font-medium ml-1">Admin Name</label>
                                <input type="text" name="adminName" id="adminName" placeholder="Enter admin name" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={adminName} onChange={e => setAdminName(e.target.value)} />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="programmeName" className="text-color3 font-medium ml-1">Programme Name</label>
                                <input type="text" name="programmeName" id="programmeName" placeholder="Enter programme name" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={programmeName} onChange={e => setProgrammeName(e.target.value)} />
                            </div>
                            <DialogFooter>
                                <Button type="submit">Submit</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>


                <Button type="button" variant={`outline`} onClick={handleViewProgramme} className="text-color3 flex items-center gap-1 border border-color3 hover:text-white hover:bg-color2">Go to your programmes <HiOutlineViewfinderCircle className="text-xl" /></Button>
            </div>
        </section>
    )
}

export default StartProgramme

type ListsType = {
    caption: string,
    text: string
}

const lists: ListsType[] = [
    {
        caption: 'Program Overview',
        text: 'This will provide a comprehensive overview of the program you chose. Outlines the structure of the programs, number of lessons and courses invovled'
    },
    {
        caption: 'Course Content',
        text: 'A detailed breakdown of the course content including the topics that has been covered by you.'
    },
    {
        caption: 'Assessment and evaluation',
        text: 'Clearly communicates the grading criteria and evaluation process.'
    },
    {
        caption: "Instructor’s information",
        text: 'The instructors and facilitators involved have their contact information made available. This helps you to connect with your tutors easily.'
    }
]