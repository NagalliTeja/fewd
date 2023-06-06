// import './App.css';
import React, {useState} from 'react';
import axios from "axios";

function App3() {
  const [entrys,setEntrys]=useState([]);
  axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
    const entry = res.data;
    console.log(entry);
    setEntrys(entry);
  })
  return (
    <div className="App">
      <table style={{border: "3px solid rgb(0, 0, 0)"}}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
        </tr>
        {
          entrys
            .map(entry =>
                <tr>
                    <td>{entry.id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.username}</td>
                    <td>{entry.email}</td>
                    <td>{entry.phone}</td>
                    <td>{entry.website}</td>
                </tr>
            )
        }
      </table>
    </div>
  );
}

export default App3;