import React, { useEffect } from "react";
import "./company.css";

const Company = (props) => {
  const {
    name,
    setName,
    address,
    setAdderss,
    revenue,
    setRevenue,
    phone,
    setPhone,
    companyListArray,
    setComanyListArray,
  } = props;

useEffect(() => {
  localStorage.setItem('companyList', JSON.stringify(companyListArray));
}, [companyListArray]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && address && revenue && phone) {
        let data = {
          name: name && name,
          address: address && address,
          revenue: revenue && revenue,
          phone: phone && phone,
        };
        setComanyListArray([...companyListArray,data]);
        setPhone()
        setRevenue()
        setAdderss()
        setName()

      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(companyListArray,"companyListArray");
  return (
    <>
      <div className="MainDiv">
        <form onSubmit={handleSubmit}>
          <div className="subDiv">
            <div className="header">Create New Company</div>
            <div className="inputdata">
              <div>Name :</div>
              <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <div>Address :</div>
              <input
                value={address}
                type="text"
                placeholder="Enter Address"
                onChange={(e) => {
                  setAdderss(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <div>Revenue :</div>
              <input
                type="text"
                value={revenue}
                placeholder="Enter Revenue"
                onChange={(e) => {
                  setRevenue(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <div>Phone :</div>
              <input
                value={phone}
                type="text"
                placeholder="Enter Phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              ></input>
            </div>
            <button className="save" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Company;
