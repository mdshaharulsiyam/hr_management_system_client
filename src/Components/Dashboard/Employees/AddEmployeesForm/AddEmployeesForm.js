"use client";
import DataPost from "@/config/DataPost";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from 'sweetalert2';

const AddEmployeesForm = () => {
    const router=useRouter()
    const [loading, setloading] = useState(false);
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=5201d474546c521dc75dd9c96eea7a84`;
    const HandelSubmit = async (e) => {
        setloading(true)
        e.preventDefault()
        const form = e.target;
        const FullName = form.FullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const Address = form.Address.value;
        const JoiningDate = form.JoiningDate.value;
        const PhoneNumber = form.PhoneNumber.value;
        const photo = form.photo.files[0];
        const role = form.role.value;
        const Designation = form.Designation.value;
        const Gender = form.Gender.value;
        const Salary = form.salary.value;

        const res = await axios.post(
            image_hosting_api,
            { image: photo },
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
        );

        const PhotoUrl = res.data.data.display_url
        const info = {
            FullName,
            email,
            password,
            Gender,
            Salary,
            Address,
            Designation,
            JoiningDate,
            PhoneNumber,
            photo: PhotoUrl,
            role,
        }
        console.log(info)
        if (res.data.data.display_url) {
            const responce = await DataPost('employe', info)
            if (responce?.success) {
                router.refresh()
                e.target.reset()
                setloading(false);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `account created succesfuly`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } else {
            setloading(false);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: "unable to create new user",
            });
        }
    };

    return (
        <div className='px-6 py-10'>
            <h1 className="pb-7 font-semibold text-lg">Add Employee</h1>
            <form
                onSubmit={HandelSubmit}
                className="space-y-4 md:space-y-6  mt-1"
            >
                <div className="grid grid-cols-2 gap-6" >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Full Name :
                        </label>
                        <input
                            type="text"
                            name="FullName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="FullName"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Employee Id :
                        </label>
                        <input
                            type="text"
                            name="password"
                            placeholder="Employee Id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6" >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Email :
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">
                            Joining Date :
                        </label>
                        <input
                            type="date"
                            name="JoiningDate"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder=" Joining Date"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6" >
                    <div>
                        <label class="block  text-sm font-medium text-gray-900 ">  Designation :</label>
                        <input
                            type="text"
                            name="Designation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Designation"
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-sm font-medium text-gray-900 "> Gender:</label>
                        <select required name="Gender" id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ">
                            <option selected>Choose one</option>
                            <option value={'Male'}>Male</option>
                            <option value={'Female'}>Female</option>
                        </select>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-6" >
                    <div>
                        <label className="block  text-sm font-medium text-gray-900 ">
                            Phone Number :
                        </label>
                        <input
                            type="number"
                            name="PhoneNumber"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Phone Number "
                            required
                        />

                    </div>
                    <div>
                        <label class="block  text-sm font-medium text-gray-900 "> salary :</label>
                        <input
                            type="number"
                            name="salary"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="salary "
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block  text-sm font-medium text-gray-900 ">
                            Address :
                        </label>
                        <input
                            type="text"
                            name="Address"
                            placeholder="Address..."
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                            required
                        />
                    </div>
                    <div>
                        <label className="block  text-sm font-medium text-gray-900 ">
                            Role :
                        </label>
                        <input
                            type="text"
                            name="role"
                            placeholder="Role..."
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block  text-sm font-medium text-gray-900 ">
                        Photo :
                    </label>
                    <input
                        type="file"
                        name="photo"
                        placeholder="photo..."
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full btn  text-black bg-emerald-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                    {loading ? 'loading...' : 'create'}

                </button>
            </form>
        </div>
    );

}

export default AddEmployeesForm
