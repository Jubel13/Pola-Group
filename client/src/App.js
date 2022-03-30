import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  let baseUrl = "localhost:3000/users";
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then((resp) => {
      console.log(resp.data);
      setUsers(resp.data);
    });
  }, [baseUrl, users]);

  function deleteHandler(id) {
    axios.delete(`${apiUrl}/${id}`).then((resp) => {
      console.log(resp.data);
      console.log("deleted");
    });
  }

  return (
    <div className='App'>
      <button className='btn btn-primary'>Add user</button>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => {
            return (
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <button className='btn btn-secondary'>Update</button>
                  <button
                    onClick={() => deleteHandler(el.id)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
