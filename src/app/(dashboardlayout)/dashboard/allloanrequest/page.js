'use client'

import DataGet from "@/config/DataGet";
import DataPost from "@/config/DataPost";
import { coreContext } from "@/provider/AuthContext"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react"
import { TiPlus } from "react-icons/ti";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { PiWarningOctagonFill } from "react-icons/pi";
const usePage = async () => {
    const router = useRouter()
    const { user } = useContext(coreContext)
    const LoanData = await DataGet(`loan?user=${user?.email}`)
    // console.log(LoanData)
    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const amount = form.amount.value;
        const reason = form.reason.value;
        const date = form.date.value;
        const data = { reason, amount, date, user: user?._id }
        if (!data.user) {
            return
        } else {
            const res = await DataPost('loan', data)
            e.target.reset()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Done ",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(res)
            router.refresh()
        }

    };

    // console.log(user)
    return (
        <div className='p-6'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-bold'>loan</h1>
                    <h1 className='text-sm pt-1'>dashboard / loan</h1>
                </div>
                <div className='flex items-center gap-3'>
                    <button className="btn btn-sm bg-red-700 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <span><TiPlus></TiPlus></span> Add loan</button>

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <h1 className="font-bold text-xl text-center"> loan request</h1>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
                            </form>
                            <div className="mt-5">
                                <h4 className="text-3xl py-4 text-center font-semibold"> LOAN REQUEST </h4>
                                <form className="space-y-4" onSubmit={handleForm}>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">DATE</label>
                                        <input
                                            type="date"
                                            placeholder="DATE"
                                            className="input input-bordered"
                                            name="date"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">AMOUNT</label>
                                        <input
                                            type="number"
                                            placeholder="AMOUNT"
                                            className="input input-bordered"
                                            name="amount"
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="text-md font-semibold">REASON FOR LOAN</label>
                                        <textarea
                                            type="text"
                                            placeholder="REASON FOR LOAN"
                                            className="input input-bordered"
                                            name="reason"
                                        />
                                    </div>
                                    <div className="flex  justify-center">
                                        <button
                                            type="submit"
                                            className="font-bold btn mt-9  bg-white w-full"
                                        >
                                            REQUEST
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div >
            </div >

            <div className='grid grid-cols-4 gap-4 mt-8'>
                <input type="text" name='project' placeholder="project name" className="input input-bordered input-warning w-full max-w-xs" />
                <input type="date" name='deadline' placeholder="Client Name" className="input input-bordered input-warning w-full max-w-xs" />
                <div>
                    <select name='status' className="select select-warning w-full max-w-xs" required>
                        <option disabled selected>status</option>
                        <option value='ongoing'>ongoing</option>
                        <option value='ongoing'>completed</option>
                    </select>
                </div>
                <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
                    SEARCH
                </button>
            </div>

            <div className="overflow-x-auto mt-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='font-bold text-black bg-slate-300'>
                            <th>photo</th>
                            <th>name</th>
                            <th>email</th>
                            <th>amount</th>
                            <th>date</th>
                            <th>reason</th>
                            <th>actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            LoanData?.map(item =>
                                <tr key={item?._id} >
                                    <td>
                                        <Image className="w-10 h-10 rounded-full" height={50} width={50} src={item?.user?.photo} />
                                    </td>
                                    <td>
                                        {item?.user?.FullName}
                                    </td>
                                    <td>
                                        {item?.user?.email}
                                    </td>
                                    <td className="font-bold">
                                        {item?.amount}
                                    </td>
                                    <td className="font-semibold">
                                        {item?.date.split('T')[0]}
                                    </td>
                                    <td>
                                        {item?.reason}
                                    </td>
                                    <td>
                                        <Link href={`/dashboard/allEmployee/${item?._id}`}>
                                            <button className="btn btn-ghost btn-xs border"><FaEdit size={20} color='green'></FaEdit>
                                            </button>
                                        </Link>
                                        <button className="btn btn-ghost btn-xs border"><FaCheck size={20} color='green'></FaCheck>
                                        </button>
                                        <button onClick={() => handleDeleted(item?._id)} className="btn btn-ghost btn-xs border"><PiWarningOctagonFill size={20} color='red'></PiWarningOctagonFill></button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    )



}

export default usePage
