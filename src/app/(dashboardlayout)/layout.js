import Menuber from "@/Components/SharedComponents/dashboard/menuber";
export default function Layout({ children }) {
    return (
        <div className="md:grid grid-cols-4 justify-start items-start bg-[url('https://i.ibb.co/3rsz41m/6cbb36a34afe45944dc1280aed5f9c0c.jpg')] bg-cover">
            <Menuber />
            <div className="col-span-3 h-screen overflow-y-auto bg-[#F4F8ED] bg-opacity-15">
                {children}
            </div>
        </div>
    )
}