import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Second.css";

const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});

apiInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default function Second() {
  const [response, setResponse] = useState();
  const [count, setCount] = useState(0);

  const makeRequest = async () => {
    const data = await apiInstance.get();
    setResponse(data.data);
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div>
      <h2>Haz click para hacer otra petición</h2>
      <p>{response ? JSON.stringify(response[count]) : ""}</p>
      <button onClick={() => setCount(count + 1)} className="request-button">
        Hacer otra petición
      </button>
    </div>
  );
}
