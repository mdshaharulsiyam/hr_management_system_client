'use client';
import Image from 'next/image';
import { useContext } from 'react';
import LoadingData from '../../SharedComponents/Loading/LoadingData';
import { coreContext } from '@/provider/AuthContext';
const ProfilePage = () => {
  const {user,loading}=useContext(coreContext)
  return (
    < >
      {
        loading ? <LoadingData /> : <div className='my-10 p-3 '>
          <span className='justify-center items-center flex m-5'>
            <Image src={user?.photo} height={150} width={150} alt='profile photo' className='rounded-full h-36 w-36' />
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Name : </span> {user?.FullName}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Gender : </span>{user?.Gender}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Email : </span>{user?.email}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Department : </span>{user?.Designation}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Address : </span>{user?.Address}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Phone : </span>{user?.PhoneNumber}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Salary : </span>{user?.Salary}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Leaves : </span>{user?.leaves}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Loan : </span>{user?.loan}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Joining Date : </span>{user?.JoiningDate?.split('T')[0]}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Role : </span>{user?.role}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Team : </span>{user?.team}</p>
          </span>
        </div>
      }

    </>
  );
};

export default ProfilePage;
