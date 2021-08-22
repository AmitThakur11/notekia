import { useContext, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [msg, setMsg] = useState({
    title: "",
    body: "",
    id: "",
    color: "white"
  });
  const [data, setData] = useState([]);

  const getInput = (e) => {
    const { name, value } = e.target;
    setMsg((msg) => {
      return { ...msg, [name]: value };
    });
  };

  const saveData = () => {
    if (msg.title && msg.body) {
      setData((data) => [...data, { ...msg, id: uuidv4() }]);
      setMsg({ title: "", body: "", id: "", color: "white" });
      return;
    }
    alert("empty field");
  };

  const delData = (id) => {
    let filter = data.filter((item) => item.id !== id);
    setData(filter);
  };
  return (
    <dataContext.Provider
      value={{ msg, getInput, data, saveData, delData, setData, setMsg }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => {
  return useContext(dataContext);
};

export default DataProvider;
