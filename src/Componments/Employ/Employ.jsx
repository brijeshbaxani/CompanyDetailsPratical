import React, { useEffect } from "react";
import "./employ.css";

const Employ = (props) => {
  const {
    name,
    setName,
    address,
    setAdderss,
    companyes,
    setCompanyes,
    employListArray,
    setEmployListArray,
  } = props;

  useEffect(() => {
    localStorage.setItem('employList', JSON.stringify(employListArray));
  }, [employListArray]);

  console.log(employListArray,"employListArray");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && address) {
        let data = {
          name: name && name,
          address: address && address,
          companyName: companyes && companyes,
        };
        setEmployListArray([...employListArray,data]);
        setAdderss()
        setName()
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="MainDiv">
        <form onSubmit={handleSubmit}>
          <div className="subDiv">
            <div className="header">Create New Employ</div>

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
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e) => {
                  setAdderss(e.target.value);
                }}
              ></input>
            </div>
            <div className="inputdata">
              <select
                className="selectOptions"
                value={companyes && companyes}
                onChange={(e) => {
                  setCompanyes(e.target.value);
                }}
              >
                <option value="">Select Company</option>
                <option value="amazon">Amazon</option>
                <option value="tesla">Tesla</option>
                <option value="google">Google</option>
              </select>
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

export default Employ;
