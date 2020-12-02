import React from "react";



export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}


export function FormBtn(props) {
  return (
    <button {...props} style={{marginLeft: 80, marginBottom: 10, backgroundColor: "6FADB9"}} className="btn btn-success">
      {props.children}
    </button>
  );
}