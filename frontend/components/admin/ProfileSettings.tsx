'use client'
import { Camera } from "lucide-react"
import { FormEvent, useState } from "react"
import { Button } from "../ui/button"


const ProfileSettings = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const [selectedFile, setSelectedFile] = useState();
    const handleSelectImage = ({ target }: { target: any }) => {
        setSelectedFile(target.files[0]);
    };

    return (

        <section className='w-full py-6 flex flex-col'>
            <main className='w-full flex flex-col gap-7'>
                <div className='flex flex-col'>
                    <h1 className='uppercase text-color2 md:text-2xl font-bold text-xl'>Basic Details</h1>
                    <h4 className='text-lg tracking-wider text-color2'>Personal Information</h4>
                </div>

                <div className="w-full flex flex-col items-center mt-6">
                    <form className="lg:w-[50%] md:w-[70%] w-full grid gap-4" onSubmit={handleSubmit}>

                        <div className="flex flex-col items-center mb-3">
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
                                className="rounded-full w-32 h-32 bg-color1 hover:bg-color2 flex items-center justify-center cursor-pointer">
                                {selectedFile ? (
                                    <img
                                        src={URL.createObjectURL(selectedFile)}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                ) : (
                                    <span className="relative flex w-16 h-16">
                                        <Camera className="w-16 h-16 relative inline-flex rounded text-gray-300 animate-pulse " />
                                    </span>

                                )}
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="firstname" className="text-color3 font-medium ml-1">First Name</label>
                            <input type="text" name="firstname" id="firstname" placeholder="Enter your first name" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastname" className="text-color3 font-medium ml-1">Last Name</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Enter your last name" className="w-full caret-color1 py-3 px-4 outline-none rounded-lg border border-color1 text-sm bg-color1/5 text-color3" value={lastName} onChange={e => setLastName(e.target.value)} />
                        </div>

                        <div className="flex flex-col mt-3">
                            <Button type="submit" className="bg-color1 hover:bg-color2">Upload Data</Button>
                        </div>
                    </form>

                </div>
            </main>
        </section>
    )
}

export default ProfileSettings