'use client'
import React from 'react'
import { FaFileSignature } from 'react-icons/fa6'
import { GiPieChart } from 'react-icons/gi'
import { PiStudentFill } from 'react-icons/pi'
import { SiCodementor, SiGoogleclassroom } from 'react-icons/si'
import { LiaCertificateSolid } from "react-icons/lia";
import { Calendar } from "@/components/ui/calendar";
import dynamic from "next/dynamic";
const Barchart = dynamic(() => import('./chart/Barchart'), { ssr: false });
const Piechart = dynamic(() => import('./chart/Piechart'), { ssr: false });


const Dashboard = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <section className='w-full py-6 flex flex-col'>
            <div className="w-full grid lg:grid-cols-6 md:grid-cols-5 gap-4">
                <main className='lg:col-span-4 md:col-span-3 flex flex-col gap-4'>
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
                                    <FaFileSignature />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">93</h3>
                            </div>
                        </div>
                        {/* five */}
                        <div className='w-full p-3 rounded-md flex flex-col gap-4 bg-white'>
                            <h1 className='text-gray-700 font-medium text-sm'>Average Daily Attendence</h1>
                            <div className='w-full flex md:flex-row-reverse flex-wrap justify-between items-center'>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-700 text-xl">
                                    <GiPieChart />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">35</h3>
                            </div>
                        </div>
                        {/* six */}
                        <div className='w-full p-3 rounded-md flex flex-col gap-4 bg-white'>
                            <h1 className='text-gray-700 font-medium text-sm'>Total Certification</h1>
                            <div className='w-full flex md:flex-row-reverse flex-wrap justify-between items-center'>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-700 text-xl">
                                    <LiaCertificateSolid />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800">115</h3>
                            </div>
                        </div>
                    </article>
                </main>
                <aside className='md:col-span-2 flex flex-col gap-4 rounded-md bg-white p-4 md:p-2 lg:p-4'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border border-gray-500 w-full"
                    />
                </aside>
            </div>

            {/* Charts */}
            <div className="w-full grid lg:grid-cols-5 md:grid-cols-2 md:gap-3 gap-5 lg:gap-5 mt-8">
                <main className='w-full lg:col-span-3 flex flex-col p-3'>
                    <div className='flex flex-col mb-4'>
                        <h1 className='uppercase text-color2 md:text-lg font-bold text-xl'>Programme Analysis</h1>
                        <h4 className='text-base tracking-wider text-color2'>Class Statistics</h4>
                    </div>
                    {/* Bar */}
                    <Barchart />
                </main>
                <aside className='w-full lg:col-span-2 flex flex-col p-3'>
                    <div className='flex flex-col mb-4'>
                        <h1 className='uppercase text-center text-color2 md:text-lg font-bold text-xl'>Attendence Analysis</h1>
                        <h4 className='text-base text-center tracking-wider text-color2'>Signed Attendence Statistics</h4>
                    </div>
                    {/* pie */}
                    <Piechart />
                </aside>
            </div>
        </section>
    )
}

export default Dashboard