import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function BillInput(props) {
  return (
    <div className="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
      </div>
      <input className="form-control" {...props} />
      <div class="input-group-append">
        <button className="btn btn-outline-secondary" onClick={props.clickEvent} type="button">{props.btnTxt}</button>
      </div>
    </div>
  );
}