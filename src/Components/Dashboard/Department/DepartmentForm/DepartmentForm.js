'use client'
import EmployeeOption from "@/Components/SharedComponents/dashboard/EmployeeOption/EmployeeOption";
import DataPost from "@/config/DataPost";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import Swal from "sweetalert2";
const DepartmentForm = () => {
    const [loading,setloaging]=useState(false)
    const router = useRouter()
    const handleCreateDepartment = async(e) => {
        setloaging(true)
        e.preventDefault();
        const form = e.target;
        const departmentName = form.departmentName.value;
        const head = form.head.value;
        const description = form.description.value;
        const departmentData = { departmentName, head, description };
        // console.log(departmentData)
        // return
        const res = await DataPost('department',departmentData)
        // console.log(res)
        if (res.success) {
            setloaging(false)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            form.reset()
            router.refresh()
        }else{
            setloaging(false)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: false,
                timer: 1500
            });
        }
           
    }
    return (
        <form onSubmit={handleCreateDepartment} className='space-y-4'>
            <div className='form-control'>
                <label>department</label>
                <input type="text" name='departmentName' className='input input-bordered' />
            </div>
            <div className='form-control'>
                <label>Department Head</label>
                <select name='head' className="select select-warning w-full" required>
                    <option disabled selected>employees</option>
                    <Suspense fallback="<option value=''>ongoing</option>">
                        <EmployeeOption />
                    </Suspense>
                </select>
            </div>
            <div className='form-control'>
                <label>description</label>
                <textarea type="text" name='description' className='input input-bordered h-44' />
            </div>
            <div>
                <button className='btn bg-emerald-400 hover:bg-emerald-500'>{loading?'loading..':'Create'}</button>
            </div>
        </form>
    )
}

export default DepartmentForm
