import React from 'react'

const TeamSearchForm = () => {
    return <form className='grid grid-cols-4 gap-4 mt-8'>
        <input type="text" name='project' placeholder="project name" className="input input-bordered input-warning w-full max-w-xs" />
        <input type="date" name='deadline' placeholder="Client Name" className="input input-bordered input-warning w-full max-w-xs" />
        <div>
            <select name='status' className="select select-warning w-full max-w-xs" required>
                <option disabled selected>status</option>
                <option value='ongoing'>ongoing</option>
                <option value='ongoing'>completed</option>
            </select>
        </div>
        <button className="w-full btn font-semibold  text-black bg-emerald-400 hover:bg-primary-700  focus:outline-none focus:ring-primary-300  rounded-lg text-sm px-5 py-2.5 text-center " >
            SEARCH
        </button>
    </form>
}

export default TeamSearchForm
