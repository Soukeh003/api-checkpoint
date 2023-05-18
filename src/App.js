import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCard from "./userCard";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // const [user, setUser] = useState();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/users", {
  //       firstName: "Fred",
  //       lastName: "Flintstone"
  //     })
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };
    

  // const handleChange = (e) =>
  //   setUser({ id: Date.now(), [e.target.name]: e.target.value });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
          setData(res.data)})
  }, []);

  return (
    <div className="App">
      <h1>CHeckpoint API</h1>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div> */}
      <div className="usercard">
        {data.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
