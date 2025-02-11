import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
    </div>
  );
};
export default AdminDashboard;
