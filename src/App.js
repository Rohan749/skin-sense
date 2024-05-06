import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState({});

  const handleFormDetails = (val) => {
    console.log("App component:", val);
    setDetails(val);
  };

  console.log("Published")
  return (
    <>
    <Form  />
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Form handleFormDetails={handleFormDetails} />}
          />
          <Route
            path="/prescription"
            element={<Dashboard details={details} />}
          />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
