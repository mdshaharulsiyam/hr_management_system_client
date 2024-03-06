'use client'
import EmployeeOption from "@/Components/SharedComponents/dashboard/EmployeeOption/EmployeeOption"
import { Suspense } from "react"

const AddTeamForm = () => {
  const addMember = async (e, _id, teamname) => {
    const memberId = e.target.member.value
    const info = { memberId, _id, teamname }
    try {
      const res = await Datapatch('team', info)
      console.log(res)
      if (res?.success) {
        e.target.reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Done ",
          showConfirmButton: false,
          timer: 1500
        });
        router.refresh()
      }
    } catch (error) {
      router.refresh()
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setsubmiting(true)
    const form = e.target;
    const teamname = form.teamname.value;
    const teamdepartment = form.teamdepartment.value;
    const leader = form.leader.value;
    const info = {
      teamname,
      teamdepartment,
      leader
    }
    try {
      const res = await DataPost('team', info)
      // setsubmiting(false)
      if (res?.success) {
        e.target.reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Done ",
          showConfirmButton: false,
          timer: 1500
        });
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return    <form onSubmit={handleSubmit}>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">team name</label>
      <input type="text" name="teamname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="team name" required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">team department</label>
      <input type="text" name="teamdepartment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="team department" required />
    </div>
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">leader</label>
      <select name='leader' className="select select-warning w-full max-w-xs" required>
        <option disabled selected>employees</option>
        <Suspense fallback="<option value=''>ongoing</option>">
          <EmployeeOption />
        </Suspense>
      </select>
    </div>
  </div>
  {/* <div className="pb-2">
    <label className="block mb-2 text-sm font-medium text-gray-900 ">description</label>
    <textarea type="text" name="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="description" required />
  </div> */}
  <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
    {/* {submiting?'loading...':'Submit'} */}
    submit
  </button>
</form>
}

export default AddTeamForm
