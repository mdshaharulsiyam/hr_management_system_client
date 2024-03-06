import AddEmployeesForm from '@/Components/Dashboard/Employees/AddEmployeesForm/AddEmployeesForm';
import ModalButton from '@/Components/SharedComponents/dashboard/ModalButton/ModalButton';
import DeleteButton from '@/Components/SharedComponents/DeleteButton/DeleteButton';
import DataGet from '@/config/DataGet';
import Image from 'next/image';
import Link from 'next/link';
import { MdEdit } from "react-icons/md";
const Page = async () => {
    try {
        const res = await DataGet('employes');
        const userData = res.data;
        console.log(res)
        return (
            <div className="overflow-x-auto p-3 pt-6" >
                <div className='flex justify-start gap-6 items-start'>
                    <div>
                        <h1 className='font-bold uppercase text-white'>employees</h1>
                        <h1 className='text-sm pt-1 text-white'>dashboard / employess</h1>
                    </div>
                    <ModalButton domId={`my_modal_add_employee`} text={'employee'} />
                    <dialog id="my_modal_add_employee" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                                <h1 className="font-bold text-xl text-center uppercase">add new employess</h1>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
                            </form>
                            <AddEmployeesForm />
                        </div>
                    </dialog>
                </div>
                <table className="table mt-6">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th className='font-bold'>profile</th>
                            <th className='font-bold'>FullName</th>
                            <th className='font-bold'>email</th>
                            <th className='font-bold'>gender </th>
                            <th className='font-bold'>Designation </th>
                            <th className='font-bold'>Address </th>
                            <th className='font-bold'>Salary </th>
                            <th className='font-bold'>PhoneNumber </th>
                            <th className='font-bold'>leaves </th>
                            <th className='font-bold'>loan </th>
                            <th className='font-bold'>JoiningDate </th>
                            <th className='font-bold'>role </th>
                            <th className='font-bold'>team </th>
                            <th className='font-bold'>action </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userData?.length > 0 && userData.map(item => <tr key={item?._id} className="bg-base-200">
                                <td>
                                    <Image src={item?.photo} height={30} width={30} className='w-10 h-10 rounded-full' />
                                </td>
                                <td>{item?.FullName}</td>
                                <td>{item?.email}</td>
                                <td>{item?.Gender}</td>
                                <td>{item?.Designation}</td>
                                <td>{item?.Address}</td>
                                <td>{item?.Salary}</td>
                                <td>{item?.PhoneNumber}</td>
                                <td>{item?.leaves}</td>
                                <td>{item?.loan}</td>
                                <td>{item?.JoiningDate.split('T')[0]}</td>
                                <td>{item?.role}</td>
                                <td>{item?.team}</td>
                                <td className='flex justify-center items-center'>
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
                    userData?.length <= 0 && <p className='text-red-500 font-bold'>no employee data found</p>
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
