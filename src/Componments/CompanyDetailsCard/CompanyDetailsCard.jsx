import React, { useEffect, useState } from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import EmployCard from "../EmployCard/EmployCard";
import { useParams } from "react-router-dom";

const CompanyDetailsCard = (props) => {
  const {
    name,
    setName,
    address,
    setAdderss,
    revenue,
    setRevenue,
    phone,
    setPhone,
    companyes,
    setCompanyes,
    employListArray,
    setEmployListArray,
    companyListArray,
    setComanyListArray,
  } = props;
  let { id } = useParams();
  const [items, setItems] = useState([]);
  const [selectedEmploy, setSelectedEmploy] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("companyList"));
    if (items) {
      setItems(items[id]);
    }
    selectData();
  }, [selectedEmploy]);

  const selectData = () => {
    const employItems = JSON.parse(localStorage.getItem("employList"));
    console.log(employItems,"employItems");
    if (employItems) {
      const data = employItems.filter((data, key) => {
        return data?.companyName == items?.name;
      });
      setSelectedEmploy(data)
    }
  };
// console.log(selectedEmploy,"selectedEmploy");
  return (
    <>
      <div className="row" style={{ marginTop: 15 }}>
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0 col-0"></div>
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12">
          <div
            style={{
              margin: "15px 30px",
              border: "1px solid ",
              borderRadius: 5,
            }}
          >
            <div style={{ borderBottom: "1px solid", padding: "20px 30px",background:"#dddbdb" }}>
              Profile Overview
            </div>
            <div className="row" style={{ padding: " 15px 30px" }}>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div>Address :</div>
                <div>{items.address}</div>
                <div>Revanue :</div>
                <div>{items.revenue}</div>
                <div>Phone :</div>
                <div>{items.phone}</div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div>Total Employe :</div>
                <div>{selectedEmploy?.length}</div>
              </div>
            </div>
          </div>

          <div
            style={{
              margin: "20px 30px",
              border: "1px solid",
              borderRadius: 5,
            }}
          >
            <div style={{ borderBottom: "1px solid", padding: "20px 30px" ,background:"#dddbdb"}}>
              Employs
            </div>
            <div style={{ padding: "0px 80px" }}>
                {selectedEmploy && selectedEmploy ?<>
                {selectedEmploy?.map((data,key)=>{
                    return(
                        <EmployCard data={data}/>
                    )
                })}
                </> :"please add employ details"}
                
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0 col-0"></div>
      </div>
    </>
  );
};

export default CompanyDetailsCard;
