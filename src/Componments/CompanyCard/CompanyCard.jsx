import React, { useEffect } from "react";


const CompanyCard = ({data},{key} ) => {
  return (
    <>
      <div     
        style={{
          margin: "15px 30px",
          border: "1px solid ",
          borderRadius: 5,
        }}
      >
        <div style={{ borderBottom: "1px solid" ,padding:"10px 30px",background:"#dddbdb"}}>{data?.name}</div>
        <div style={{padding:"20px 30px"}}><div>Address :</div>
        <div>{data?.address}</div>
        <div>Revanue :</div>
        <div>{data?.revenue}</div>
        <div>Phone :</div>
        <div>{data?.phone}</div></div>
        <div style={{ borderTop: "1px solid",padding:"10px 30px" }}>Company Overview</div>
      </div>
    </>
  );
};

export default CompanyCard;
