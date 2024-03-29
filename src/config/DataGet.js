import { getModifiedCookieValues } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const DataGet = async (apiLink) => {
    const res = await fetch(`http://localhost:5000/${apiLink}`, {
        cache: 'no-store',
        credentials: 'include',
    })
    return await res.json()

}

export default DataGet
