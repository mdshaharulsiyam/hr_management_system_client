import DepartmentForm from '@/Components/Dashboard/Department/DepartmentForm/DepartmentForm';
import ModalButton from '@/Components/SharedComponents/dashboard/ModalButton/ModalButton';
import DeleteButton from '@/Components/SharedComponents/DeleteButton/DeleteButton';
import DataGet from '@/config/DataGet';
import Image from 'next/image';
import Link from 'next/link';
import { MdEdit } from "react-icons/md";
import { MdOutlineReadMore } from "react-icons/md";
const Page = async () => {
    try {
        const res = await DataGet('department');
        const DepartmentData = res.data
        return (
            <div className="overflow-x-auto p-3 pt-6" >
                <div className='flex justify-start gap-6 items-start'>
                    <div>
                        <h1 className='font-bold uppercase text-white'>Department</h1>
                        <h1 className='text-sm pt-1 text-white'>dashboard / Department</h1>
                    </div>
                    <ModalButton domId={`my_modal_department`} text={'departmen'} />
                    <dialog id="my_modal_department" className="modal">
                        <div className="modal-box w-11/12 max-w-xl">
                            <form method="dialog">
                                <h1 className="font-bold text-xl text-center uppercase">add new Department</h1>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
                            </form>
                            <DepartmentForm />
                        </div>
                    </dialog>
                </div>
                <table className="table mt-6">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th className='font-bold'>department</th>
                            <th className='font-bold'>department head</th>
                            <th className='font-bold'>description</th>
                            <th className='font-bold'>totalteam</th>
                            <th className='font-bold'>action </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            DepartmentData.length > 0 && DepartmentData.map(item => <tr key={item?._id} className="bg-base-200">
                                <td>{item?.departmentName}</td>
                                <td>
                                    <span className='flex justify-start items-center gap-1 '>
                                        <Image src={item?.head?.photo} height={15} width={15} className='rounded-full h-10 w-10' alt='profile photo' />
                                        {item?.head?.FullName}
                                    </span>
                                </td>
                                <td>{item?.description}</td>
                                <td>{item?.Totalteam.length}</td>
                                <td className='flex justify-center items-center gap-2'>
                                    <Link href={`employee/${item?._id}`}>
                                        <MdOutlineReadMore size={30} color='green' />
                                    </Link>
                                    <Link href={`employee/${item?._id}`}>
                                        <MdEdit size={20} color='orange' />
                                    </Link>
                                    <DeleteButton id={item?._id} api={'employee'} />
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
                {
                    DepartmentData.length <= 0 && <p className='text-red-500 font-bold'>no department data found</p>
                }
            </div >
        );
    } catch (error) {
        // Handle error appropriately
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading user data</div>;
    }

};

export default Page
