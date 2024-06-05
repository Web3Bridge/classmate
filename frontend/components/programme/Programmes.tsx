'use client'
import React, { FormEvent, useState } from 'react'
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from '../ui/dialog'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Button } from '../ui/button'

const Programmes = () => {

    const [instName, setInstName] = useState<string>("")
    const [adminName, setAdminName] = useState<string>("")
    const [programmeName, setProgrammeName] = useState<string>("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    return (
        <section className="flex flex-col w-full ">
            <div className="w-full flex justify-between items-end">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-bold text-color1">MY PROGRAMMES</h1>
                    <p className="text-lg text-color3">Welcome to Classmate + Programmes</p>
                </div>
                <Dialog>
                    <DialogTrigger>
                        <button type="button" className="text-color2 bg-white border border-color2 hover:bg-color2 hover:text-white rounded-lg flex items-center gap-1 text-sm py-2.5 px-6">Create new programmes <IoIosAddCircleOutline className="text-xl" /></button>
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
            </div>

            <main className="w-full grid lg:grid-cols-3 gap-8 mt-16">
                {
                    [...Array(3)].map((_, index) => (
                        <div key={index} className="w-full flex flex-col gap-4 rounded-lg shadow-lg p-7 border border-color2/10 relative cursor-pointer hover:border-color1">
                            <div className='w-[120px] h-[120px] rounded-full bg-gray-200'></div>
                            <h3 className="text-xl text-color1 font-medium">Web 3 Writer’s Guide</h3>
                            <div className='w-[15%] h-1.5 rounded-lg bg-color1'></div>

                            <h5 className="text-color3 text-sm capitalize">Pro Technical writing</h5>
                            <p className="text-color3 text-[0.8rem]">Professional technical writing involves the clear, concise, and effective communication of complex information to a specific audience. It is characterized by its focus on accuracy, clarity, and usability.</p>

                            <div className='flex justify-between items-end w-full mt-4'>
                                <div className='flex flex-col'>
                                    <small className="text-color3 text-xs">Role</small>
                                    <h4 className='text-color1 font-bold'>Student</h4>
                                </div>
                                <div className='flex flex-col'>
                                    <small className="text-color3 text-xs">Supposed Date of Completion</small>
                                    <h4 className='text-color1 font-bold'>15th March 2024</h4>
                                </div>
                            </div>

                            <div className="absolute top-6 right-6 flex flex-col items-center">
                                <small className="text-color3 text-xs">Status</small>
                                <h4 className='text-green-500 bg-green-100 rounded-lg px-2 py-1.5 font-medium text-xs'>Ongoing</h4>
                            </div>
                        </div>
                    ))
                }

            </main>
        </section>
    )
}

export default Programmes