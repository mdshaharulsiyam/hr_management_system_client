import ProfilePage from "@/Components/Dashboard/Profile/ProfilePage";
const useDashboardmain = async () => {

  try {
    return (
      <div className=''>
        <ProfilePage></ProfilePage>
      </div>
    )
  } catch (error) {
    console.error("Error fetching user data:", error);
    return <div className='text-center text-4xl font-bold py-20'>Error loading profile data</div>;
  }
}
export default useDashboardmain;
