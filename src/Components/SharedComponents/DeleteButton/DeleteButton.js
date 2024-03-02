'use client'
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';

const DeleteButton = ({id, api}) => {
    const DeteleItem = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
        if (result.isConfirmed) {
            try {
                const res = await axiosSecure.delete(`${api}?id=${id}`);
                Swal.fire(
                    'Deleted!',
                    'The Employee has been deleted.',
                    'success'
                );
            } catch (error) {
                console.error('Error deleting Employee:', error);
                Swal.fire(
                    'Error!',
                    'Failed to delete the Employee.',
                    'error'
                );
            }
        }
    }
    return <button onClick={DeteleItem} className="btn btn-ghost btn-xs border"><AiFillDelete  size={20} color='red'></AiFillDelete ></button>
}

export default DeleteButton
