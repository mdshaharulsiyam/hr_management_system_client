'use client';
import DataGet from '@/config/DataGet';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LoadingData from '../../Loading/LoadingData';
const ProfilePage = () => {
  const [loadinData, setLoadinData] = useState(true)
  const session = useSession()
  const [userData, setuserData] = useState({})
  useEffect(() => {
    if (!session?.data?.user?.email) {
      return
    }
    const getData = async () => {
      const res = await DataGet(`employe/details?email=${session?.data?.user?.email}`)
      console.log(res)
      if (res.success) {
        setuserData(res?.data)
      }
      setLoadinData(false)
    }
    getData()
  }, [session?.data?.user?.email])
  // console.log(userData, session?.data?.user?.email)

  return (
    < >
      {
        loadinData ? <LoadingData /> : <div className='my-10 p-3 '>
          <span className='justify-center items-center flex m-5'>
            <Image src={userData?.photo} height={150} width={150} alt='profile photo' className='rounded-full h-36 w-36' />
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Name : </span> {userData?.FullName}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Gender : </span>{userData?.Gender}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Email : </span>{userData?.email}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Department : </span>{userData?.Designation}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Address : </span>{userData?.Address}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Phone : </span>{userData?.PhoneNumber}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Salary : </span>{userData?.Salary}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Leaves : </span>{userData?.leaves}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Loan : </span>{userData?.loan}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Joining Date : </span>{userData?.JoiningDate.split('T')[0]}</p>
          </span>
          <span className='grid grid-cols-2 justify-between items-center gap-3 my-3'>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Role : </span>{userData?.role}</p>
            <p className='font-medium text-lg p-3 bg-gray-200'><span className='font-bold uppercase'>Team : </span>{userData?.team}</p>
          </span>
        </div>
      }

    </>
  );
};

export default ProfilePage;
