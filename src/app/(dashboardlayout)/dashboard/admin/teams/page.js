"use client";
import { TiPlus } from "react-icons/ti";
import { BiListPlus } from "react-icons/bi";
import Image from "next/image";
import { Suspense, useState } from "react";
import EmployeeOption from "@/Components/SharedComponents/dashboard/EmployeeOption/EmployeeOption";
import DataPost from "@/config/DataPost";
import DataGet from "@/config/DataGet";
import { useRouter } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import Datapatch from "@/config/Datapatch";
import Swal from "sweetalert2";
import AddTeamForm from "@/Components/Dashboard/Teams/AddTeamForm/AddTeamForm";
import ModalButton from "@/Components/SharedComponents/dashboard/ModalButton/ModalButton";
import TeamSearchForm from "@/Components/Dashboard/Teams/SearchForm/TeamSearchForm";
const usePage = async () => {
  // const [submiting, setsubmiting] = useState(false)
  const router = useRouter()
  const teamData = await DataGet('team')
  // const [data,setdata]=useState('')
  // console.log(teamData)


  return (
    <div className='p-6'>
      <div className='flex justify-start gap-6 items-center'>
        <div>
          <h1 className='font-bold'>tems</h1>
          <h1 className='text-sm pt-1'>dashboard / teams</h1>
        </div>
        <div className='flex items-center gap-3'>
          <ModalButton domId={`my_modal_new_team`} text='Add Team' />
          <dialog id="my_modal_new_team" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <h1 className="font-bold text-xl">Add Team</h1>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-red-700 text-white">✕</button>
              </form>
              <div className="mt-5">
                <AddTeamForm />
              </div>
            </div>
          </dialog>
        </div >
      </div >
      <TeamSearchForm />
      <div className='md:grid grid-cols-3 mt-8 gap-4'>
        {
          teamData.map(item => <div key={item?._id} className=" bg-white border border-gray-200 rounded-lg shadow">
            <dialog id={`addmember${item?.teamname}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg text-center uppercase">team : {item?.teamname}</h3>
                <p className="font-semibold  text-center ">add Member</p>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  addMember(e, item?._id, item?.teamname)
                }}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">member</label>
                    <select name='member' className="select select-warning w-full" required>
                      <option disabled selected>employees</option>
                      <Suspense fallback="<option value=''>ongoing</option>">
                        <EmployeeOption />
                      </Suspense>
                    </select>
                  </div>
                  <button className="btn m-2">submit</button>
                </form>
              </div>
            </dialog>
            <div className="flex justify-end px-4 pt-4">
              <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500  rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center p-3">
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">{item?.teamname}</h5>
              <span className="text-sm text-gray-500  dark:text-gray-400">department : {item?.teamdepartment}</span>
              <p className="w-full">team leader</p>
              <div className="flex justify-start items-center flex-wrap gap-0 mt-4 md:my-2 w-full">
                <Image width={30} height={30} alt="team leader " className="w-10 h-10 rounded-full" src={item?.leader?.photo} />
              </div>
              <p className="w-full">team members</p>
              <div className="flex justify-start items-center flex-wrap gap-0 mt-4 -space-x-3 md:my-2 w-full">
                {/* {
                  item?.members.map(items=><p key={items}>pppp</p>)
                } */}
                {
                  item?.members.length > 0 && item?.members.map(item => <Image key={item?._id} width={30} height={30} alt="team member" className="w-10 h-10 rounded-full border-2 border-white" src={item?.photo} />)
                }

                <span onClick={() => document.getElementById(`addmember${item?.teamname}`).showModal()} className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-300 cursor-pointer">
                  <FaPlus />
                </span>

              </div>
            </div>

          </div>)
        }
        {
          teamData.length <= 0 && <p className='text-red-500 font-bold'>no team data found</p>
        }
      </div>


    </div >
  );
};

export default usePage;