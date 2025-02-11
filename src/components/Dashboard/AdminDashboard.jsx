import Header from "../other/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <div>
        <form>
          <div>
            <h3>Task Title</h3>
            <input type="text" placeholder="Make UI design" />
          </div>
          <div>
            <h3>Description</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div>
            <h3>Date</h3>
            <input type="date" />
          </div>
          <div>
            <h3>Assign to</h3>
            <input type="text" placeholder="employee name" />
          </div>
          <div>
            <h3>Category</h3>
            <input type="text" placeholder="design, dev, etc" />
          </div>
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};
export default AdminDashboard;
