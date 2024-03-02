"use client"
import { createContext, useEffect, useState } from "react";
import DataGet from "@/config/DataGet";
import { useSession } from "next-auth/react";
import DataPost from "@/config/DataPost";
export const coreContext = createContext(null);
const AuthContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const session = useSession()
    useEffect(() => {
        if (!session?.data?.user?.email) {
            return
        }
        // console.log(session?.data?.user?.role)
        const userData = { email: session?.data?.user?.email,role:session?.data?.user?.role }
        const getData = async () => {
            setLoading(true)
            const res = await DataGet(`employe/details?email=${session?.data?.user?.email}`)
            if (res.success) {
                setUser(res?.data)
            }
        }
        const JWTtoken = async () => {
            const data = await DataPost('jwt', userData)
            // console.log(data)
        }
        JWTtoken()
        getData()
        setLoading(false)
    }, [session?.data?.user?.email])
    const authInfo = {
        user,
        loading
    };
    return (
        <coreContext.Provider value={authInfo}>
            {children}
        </coreContext.Provider>
    );
};

export default AuthContext;