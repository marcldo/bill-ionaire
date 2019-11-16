import React from "react";

function BillForm() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Bill Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Netflix"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Amount</label>
          <input
            type="amount"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="9.99"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Frequency</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>bi-weekly</option>
            <option>quarterly</option>
            <option>semi-annually</option>
            <option>annually</option>
            <option>monthly</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Start Date</label>
          <input
            type="Date"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="9.99"
          />
        </div>
      </form>
    </div>
  );
}
export default BillForm;
