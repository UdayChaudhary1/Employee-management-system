import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log(user);
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
      console.log(user);
    } else {
      alert("Invalid credentials");
    }
  };

  return <></>;
};
export default App;
