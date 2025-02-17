import PropTypes from "prop-types";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-20 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

EmployeeDashboard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired, 
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        taskTitle: PropTypes.string.isRequired,
        taskDescription: PropTypes.string.isRequired,
        taskDate: PropTypes.string.isRequired, // Assuming it's a string in "YYYY-MM-DD" format
        category: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        newTask: PropTypes.bool.isRequired,
        completed: PropTypes.bool.isRequired,
        failed: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default EmployeeDashboard;
