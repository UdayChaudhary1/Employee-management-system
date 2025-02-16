const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Task 1",
        taskDescription: "Description of Task 1",
        taskDate: "2025-02-16",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 2",
        taskDescription: "Description of Task 2",
        taskDate: "2025-02-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Task 3",
        taskDescription: "Description of Task 3",
        taskDate: "2025-02-16",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 4",
        taskDescription: "Description of Task 4",
        taskDate: "2025-02-16",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Task 5",
        taskDescription: "Description of Task 5",
        taskDate: "2025-02-16",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Task 6",
        taskDescription: "Description of Task 6",
        taskDate: "2025-02-16",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Task 7",
        taskDescription: "Description of Task 7",
        taskDate: "2025-02-16",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Task 8",
        taskDescription: "Description of Task 8",
        taskDate: "2025-02-16",
        category: "Management",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};
