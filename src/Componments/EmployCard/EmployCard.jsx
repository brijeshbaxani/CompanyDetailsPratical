import React from "react";

const EmployCard = ({data}) => {
  return (
    <>
      <div
        style={{width:"100%",
          border: "1px solid ",
          borderRadius: 5,
          margin:"15px 0px"
        }}
      >
        <div style={{ borderBottom: "1px solid" ,padding:"20px 30px"}}>{data?.name}</div>
      <div style={{padding:"20px 30px"}}>
      <div>Address :</div>
        <div>{data?.address}</div>
      </div>
        
      </div>
    </>
  );
};

export default EmployCard;
