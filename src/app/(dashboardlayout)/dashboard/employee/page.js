import AddEmployeesForm from '@/Components/Dashboard/Employees/AddEmployeesForm/AddEmployeesForm';
import ModalButton from '@/Components/Dashboard/Employees/ModalButton/ModalButton';
import DataGet from '@/config/DataGet';
const usePage = async () => {
    try {
        const res = await DataGet('employe');
        const userData = res.data
        return (
            <div className="overflow-x-auto p-3 pt-6" >
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='font-bold uppercase'>employees</h1>
                        <h1 className='text-sm pt-1'>dashboard / employess</h1>
                    </div>
                  <ModalButton />
                    <dialog id="my_modal_add_employee" className="modal">
                        <div className="modal-box w-11/12 max-w-5xl">
                            <form method="dialog">
                                <h1 className="font-bold text-xl text-center"> Holydays</h1>
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
                            </form>
                          <AddEmployeesForm />
                        </div>
                    </dialog>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='font-bold'>Name</th>
                            <th className='font-bold'>email</th>
                            <th className='font-bold'>gender </th>
                            <th className='font-bold'>salary </th>
                            <th className='font-bold'>leaves </th>
                            <th className='font-bold'>loan </th>
                            <th className='font-bold'>action </th>
                        </tr>
                    </thead>
                    {/* {
                        userData.length <= 0 && <p className='text-red-500 font-bold'>no employee data found</p>
                    } */}
                    <tbody>

                        {
                            userData.length > 0 && userData.map(item => <tr key={item?._id} className="bg-base-200">
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.gender}</td>
                                <td>{item?.salary}</td>
                                <td>{item?.leaves}</td>
                                <td>{item?.loan}</td>
                                <td>
                                text
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div >
        );
    } catch (error) {
        // Handle error appropriately
        console.error("Error fetching user data:", error);
        return <div className='text-center text-4xl font-bold py-20'>Error loading user data</div>;
    }

};

export default usePage
