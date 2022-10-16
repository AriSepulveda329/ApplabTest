import axios from "axios";
import { useState, useEffect } from "react";
import "./Third.css";

const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/",
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

export default function Third() {
  const [response, setResponse] = useState();

  const makeRequest = async () => {
    const data = await apiInstance.get();
    setResponse(data.data);
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <div>
      <h2>Listado</h2>
      <ul classname="list-content">
        {response &&
          response.map((element) => (
            <li key={element.id}>
              Title: {element.title}, Status:{" "}
              <span
                className={
                  element.completed
                    ? "list-status-completed"
                    : "list-status-incompleted"
                }
              >
                {element.completed ? "Completado" : "Incompleto"}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
