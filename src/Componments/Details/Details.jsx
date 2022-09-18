import React, { useEffect } from "react";
import CompanyCard from "../CompanyCard/CompanyCard";
import { useNavigate } from "react-router-dom";
import CompanyDetailsCard from "../CompanyDetailsCard/CompanyDetailsCard";

const Details = (props) => {
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
  let navigate = useNavigate();

  useEffect(() => {
    const companyitems = JSON.parse(localStorage.getItem('companyList'));
    if (companyitems) {
     setComanyListArray(companyitems);
    }
    const employItems = JSON.parse(localStorage.getItem('employList'));
    if (employItems) {
      setEmployListArray(employItems);
    }
  }, []);
  return (
    <>
      <div className="row" style={{ marginTop: 15 }}>
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0 col-0"></div>
        <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12">
          {companyListArray && companyListArray.length > 0 ? (
            <>
              {" "}
              <div style={{ border: "1px solid ", borderRadius: "5px" }}>
                <div
                  style={{
                    padding: "20px 30px",
                    borderBottom: "1px solid",
                  }}
                >
                  company
                </div>
                {companyListArray &&
                  companyListArray.map((item, key) => {
                    return (
                      <div
                        onClick={() => {
                          navigate(`/company-details/${key}`);
                        }}
                      >
                        <CompanyCard
                          data={item}
                          key={key}
                          companyListArray={companyListArray}
                          setComanyListArray={setComanyListArray}
                          employListArray={employListArray}
                          setEmployListArray={setEmployListArray}
                        />
                      </div>
                    );
                  })}
              </div>
            </>
          ) : (
            <div
              style={{
                height: "85vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div> please add company details</div>
              <button
                style={{
                  cursor: "pointer",
                  padding: "4px 8px",
                  borderRadius: 5,
                  marginTop: 5,
                }}
                onClick={() => {
                  navigate(`/company`);
                }}
              >
                {" "}
                Go add details
              </button>
            </div>
          )}
        </div>
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0 col-0"></div>
      </div>
    </>
  );
};

export default Details;
