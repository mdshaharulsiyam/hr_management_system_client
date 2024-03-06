'use client'
import { RiLogoutCircleLine } from "react-icons/ri";
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { RiUserSearchFill } from 'react-icons/ri';
import { TiThMenuOutline } from 'react-icons/ti';
import { CgProfile } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';
import { coreContext } from '@/provider/AuthContext';
import { RiFileCopy2Fill } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa';
import { GrFormSubtract } from "react-icons/gr";
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { FaBriefcase, FaPeopleGroup } from "react-icons/fa6";
import { LiaNotesMedicalSolid } from "react-icons/lia";;
import { BsCashCoin } from "react-icons/bs";
import {  signOut } from "next-auth/react"
import { BsMicrosoftTeams } from "react-icons/bs";
const Menuber = () => {
  const { user } = useContext(coreContext);
  const [show, setshow] = useState(false);
  const [IsOpen1, setIsOpen1] = useState(false);
  const [IsOpen2, setIsOpen2] = useState(false);
  const path = usePathname()
  // console.log(path)
  return (
    <div
      className={`pl-5  h-screen p-3 shadow-2xl relative ${show ? 'h-auto' : 'h-[65px]'} overflow-y-auto text-white`}
    >
      <div className='flex justify-start items-center  gap-4 border-b border-black pb-3'>
        {
          user?.photo && <Image
            className='w-10 h-10 object-cover rounded-full'
            src={user?.photo}
            height={500}
            width={500}
            alt='profile image'
          />
        }

        <span className='flex flex-col justify-start items-start gap-0'>
          <p className='text-lg font-bold'>{user?.FullName}</p>
          <a className='-mt-1 text-xs' href='mailto:useremail'>
            {user?.email}
          </a>

        </span>
      </div>
      <TiThMenuOutline
        onClick={() => setshow(!show)}
        className='absolute transition-all md:hidden block top-6 right-4 text-2xl font-bold'
      />
      <ul className='pt-3 uppercase font-semibold flex flex-col gap-1 '>
        <li className={`flex justify-start items-center gap-2 ${path==='/dashboard'?'bg-emerald-500':'bg-transparent'} hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md `}>
          <CgProfile className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard`}>
            profile
          </Link>
        </li>
        <li className={`${path==='/dashboard/admin/employee'?'bg-emerald-500':'bg-transparent'} flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md `}>
          <MdOutlinePeopleAlt className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/admin/employee`}>
            Employees
          </Link>
        </li>
        <li className={`flex justify-start ${path==='/dashboard/admin/departments'?'bg-emerald-500':'bg-transparent'} items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md `}>
          <FaBriefcase className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/admin/departments`}>
            Departments
          </Link>
        </li>
        <li className={`flex justify-start ${path==='/dashboard/admin/teams'?'bg-emerald-500':'bg-transparent'} items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md `}>
          <BsMicrosoftTeams className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/admin/teams`}>
            teams
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <ImProfile className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/attendanceAll`}>
            Attendance Reports
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <ImProfile className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/attendanceOne`}>
            Attendance
          </Link>
        </li>


        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <RiUserSearchFill className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/recruitment`}>
            recruitment
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <RiFileCopy2Fill className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/applications`}>
            applications
          </Link>
        </li>
        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <BsCashCoin className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/allloanrequest`}>
            loan request
          </Link>
        </li>

        <li className='flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <FaPeopleGroup className='text-xl' />
          <Link className='p-3 w-full' href={`/dashboard/allClients`}>
            All Clients
          </Link>
        </li>


        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">

          <LiaNotesMedicalSolid size={30} className="text-xl" />
          <p onClick={() => setIsOpen2((pre) => !pre)} className="p-3 pl-3 w-full" >
            Leave Requests
          </p>
          {
            !IsOpen2 ? <span><FaPlus size={11} className="text-xl" /></span> : <span><GrFormSubtract size={20} className="text-xl" /></span>
          }
        </li>

        {
          IsOpen2 &&
          <ul>
            <Link href={`/dashboard/allLeave`}>
              <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
                <p className="p-3 text-sm pl-10 w-full" >
                  All Leave Request
                </p>
              </li>
            </Link>
            <Link href={`/dashboard/addEmployee`}>
              <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
                <p className="p-3 text-sm pl-10 w-full" >
                  Leave Types
                </p>
              </li>
            </Link>
          </ul>
        }

        <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">

          <MdOutlinePeopleAlt size={25} className="text-xl" />
          <p onClick={() => setIsOpen1((pre) => !pre)} className="p-3 pl-3 w-full" >
            employees
          </p>
          {
            !IsOpen1 ? <span><FaPlus size={11} className="text-xl" /></span> : <span><GrFormSubtract size={20} className="text-xl" /></span>
          }
        </li>

        {
          IsOpen1 &&
          <ul>
            <Link href={`/dashboard/allEmployee`}>
              <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
                <p className="p-3 text-sm pl-10 w-full" >
                  ALL Employees
                </p>
              </li>
            </Link>
            <Link href={`/dashboard/addEmployee`}>
              <li className="flex justify-start items-center gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md ">
                <p className="p-3 text-sm pl-10 w-full" >
                  Add Employees
                </p>
              </li>
            </Link>
          </ul>
        }


      </ul>
      <div className='flex justify-start items-center  gap-4 border-t border-black pt-3 mt-6'>
        <li onClick={signOut} className='p-3 cursor-pointer flex justify-start items-center w-full gap-2 hover:bg-emerald-500 hover:text-white duration-500 px-3 rounded-md '>
          <RiLogoutCircleLine className='text-xl' />
            Logout
        </li>
      </div>
    </div>
  );
};


export default Menuber;