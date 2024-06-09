import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table'

const StudentLists = () => {
    return (
        <section className='w-full py-6 flex flex-col'>
            <main className='w-full flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <h1 className='uppercase text-color2 md:text-2xl font-bold text-xl'>Students List</h1>
                    <h4 className='text-lg tracking-wider text-color2'> List of students in your programme</h4>
                </div>

                <div className='w-full overflow-x-auto'>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-color2 hover:bg-color2 text-gray-300">
                                <TableHead className="w-[100px] font-semibold text-gray-300">S/N</TableHead>
                                <TableHead className='text-gray-300 font-semibold'>Student Name</TableHead>
                                <TableHead className='text-gray-300 font-semibold'>Wallet Address</TableHead>
                                <TableHead className="text-right text-gray-300 font-semibold">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                lists.map((list) => (
                                    <TableRow key={list.id}>
                                        <TableCell className="font-medium">{list.id}</TableCell>
                                        <TableCell>{list.name}</TableCell>
                                        <TableCell>{list.ethereumAddress}</TableCell>
                                        <TableCell className="text-right">$250.00</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </main>
        </section>
    )
}

export default StudentLists

const lists = [
    { "id": 1, "name": "Alice", "ethereumAddress": "0x5d5c6f10a0b92de6b8c58f97b738bb4edb8b38a1" },
    { "id": 2, "name": "Bob", "ethereumAddress": "0xd094a1f2cb474f28ef3b6e1b88c1cb34d41ebef4" },
    { "id": 3, "name": "Charlie", "ethereumAddress": "0xc72d7cb8c5a8d6ea5e1d8e4f9a6c4c2a7f78a9b2" },
    { "id": 4, "name": "David", "ethereumAddress": "0x8b79a1d1b2e8a3b7c1a4c6e2e7a5d8f1c6b2e9d4" },
    { "id": 5, "name": "Eve", "ethereumAddress": "0x4b2c1d6e3a8f5b6a7d9c8e2b1a4f6c3d7a2c8e1b" },
    { "id": 6, "name": "Frank", "ethereumAddress": "0x6d8a7f9b3c1e5a7d2b4f8e9c1a4b2e3d7c6e8f9b" },
    { "id": 7, "name": "Grace", "ethereumAddress": "0xa4f8c1b2d9e6b7a3f2c5e1d8a7b4c6d2e9b8f1c4" },
    { "id": 8, "name": "Hank", "ethereumAddress": "0xe7b4d6a1f8c3b2a7d9e6f1a4c8b5d2a3e6f7c9b1" },
    { "id": 9, "name": "Ivy", "ethereumAddress": "0xc8d7e9b6a1f2b3a4d6c5e1f8a7b2c3e9b4a8f1d7" },
    { "id": 10, "name": "Jack", "ethereumAddress": "0xb9a6e8f1c4d2a3b7f1e5c6d9a7b3c2e4d8f7a1b6" }
]
