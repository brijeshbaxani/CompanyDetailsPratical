import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Componments/Navbar/Navbar";
import Details from "./Componments/Details/Details";
import Company from "./Componments/Company/Company";
import Employ from "./Componments/Employ/Employ";
import { useState } from "react";
import CompanyDetailsCard from "./Componments/CompanyDetailsCard/CompanyDetailsCard";

function App() {
  const [companyListArray, setComanyListArray] = useState([]);
  const [employListArray, setEmployListArray] = useState([]);
  const [name, setName] = useState();
  const [address, setAdderss] = useState();
  const [revenue, setRevenue] = useState();
  const [phone, setPhone] = useState("");
  const [companyes, setCompanyes] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Details
              name={name}
              address={address}
              revenue={revenue}
              phone={phone}
              companyes={companyes}
              setName={setName}
              setAdderss={setAdderss}
              setRevenue={setRevenue}
              setPhone={setPhone}
              setCompanyes={setCompanyes}
              companyListArray={companyListArray}
              setComanyListArray={setComanyListArray}
              employListArray={employListArray}
              setEmployListArray={setEmployListArray}
            />
          }
        ></Route>
        <Route
          path="/company"
          element={
            <Company
              name={name}
              address={address}
              revenue={revenue}
              phone={phone}
              setName={setName}
              setAdderss={setAdderss}
              setRevenue={setRevenue}
              setPhone={setPhone}
              companyListArray={companyListArray}
              setComanyListArray={setComanyListArray}
            />
          }
        ></Route>
        <Route
          path="/employ"
          element={
            <Employ
              companyes={companyes}
              name={name}
              address={address}
              setName={setName}
              setAdderss={setAdderss}
              setCompanyes={setCompanyes}
              employListArray={employListArray}
              setEmployListArray={setEmployListArray}
            />
          }
        ></Route>
        <Route
          path="/company-details/:id"
          element={
            <CompanyDetailsCard
              companyes={companyes}
              names={name}
              address={address}
              setName={setName}
              setAdderss={setAdderss}
              setCompanyes={setCompanyes}
              employListArray={employListArray}
              setEmployListArray={setEmployListArray}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
