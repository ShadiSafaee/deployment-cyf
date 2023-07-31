import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "http://localhost:5000";
  // const url = "https://client-server-single-app-backend.onrender.com"; // prod

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url + "/data");
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    const timeOut = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading please wait</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Database:</h1>
      {data?.map((el) => {
        const { name, id } = el;
        return (
          <div key={id}>
            <hr />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
