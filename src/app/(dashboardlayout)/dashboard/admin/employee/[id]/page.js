import UpdateEmploye from '@/Components/Dashboard/Employees/UpdateEmploye/UpdateEmploye';
import DataGet from '@/config/DataGet';
import React, { Suspense } from 'react'

const page = async ({ params }) => {
    const { id } = params;

    return (
        <div>
            <Suspense fallback={`loading...`}>
                <UpdateEmploye id={id} />
            </Suspense>
        </div>
    )
}

export default page
