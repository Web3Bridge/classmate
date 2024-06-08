import React from 'react'
import { PiStudentFill } from 'react-icons/pi'
import { SiCodementor, SiGoogleclassroom } from 'react-icons/si'

const Dashboard = () => {
    return (
        <section className='w-full py-6 flex flex-col'>
            <div className="w-full grid lg:grid-cols-5 gap-4">
                <main className='lg:col-span-3 flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <h1 className='uppercase text-color2 md:text-2xl font-bold text-xl'>Admin Dashboard</h1>
                        <h4 className='text-lg tracking-wider text-color2'>Statistics</h4>
                    </div>
                    <article className='w-full grid md:grid-cols-3 gap-3'>
                        {/* one */}
                        <div className='w-full p-3 rounded-md flex flex-col gap-4 bg-white'>
                            <h1 className='text-gray-700 font-medium text-sm'>Total Classes</h1>
                            <div className='w-full flex md:flex-row-reverse flex-wrap justify-between items-center'>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-700 text-xl">
                                    <SiGoogleclassroom />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">124</h3>
                            </div>
                        </div>
                        {/* two */}
                        <div className='w-full p-3 rounded-md flex flex-col gap-4 bg-white'>
                            <h1 className='text-gray-700 font-medium text-sm'>Total Students</h1>
                            <div className='w-full flex md:flex-row-reverse flex-wrap justify-between items-center'>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-700 text-xl">
                                    <PiStudentFill />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">133</h3>
                            </div>
                        </div>
                        {/* three */}
                        <div className='w-full p-3 rounded-md flex flex-col gap-4 bg-white'>
                            <h1 className='text-gray-700 font-medium text-sm'>Total Mentors</h1>
                            <div className='w-full flex md:flex-row-reverse flex-wrap justify-between items-center'>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-700 text-xl">
                                    <SiCodementor />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">43</h3>
                            </div>
                        </div>
                        {/* four */}
                        <div className='w-full p-3 rounded-md flex flex-col gap-4 bg-white'>
                            <h1 className='text-gray-700 font-medium text-sm'>Total Attendence Signed</h1>
                            <div className='w-full flex md:flex-row-reverse flex-wrap justify-between items-center'>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-700 text-xl">
                                    <SiCodementor />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">43</h3>
                            </div>
                        </div>
                    </article>
                </main>
                <aside className='lg:col-span-2 flex flex-col gap-4 bg-gray-100 p-3'></aside>
            </div>
        </section>
    )
}

export default Dashboard