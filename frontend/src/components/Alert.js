import React from "react";

const Alert = (props) => {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          <strong>
            {props.alert.type === "danger" ? "error" : props.alert.type}
          </strong>
          :{props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;