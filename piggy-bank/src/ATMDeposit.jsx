// import React from "react";

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    // const choice = ['Deposit', 'Cash Back'];
    // console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> Deposit Amount:</h3>
        <input min="1" placeholder="Please enter amount" id="number-input" type="number" width="200" onChange={onChange}></input>
        <br />
        <button style={{marginTop: '10%'}}type="submit" className="btn btn-success" disabled={!isValid} width="200" value="Submit" id="submit-input">Deposit</button>
        
      </label>
    );
  };

  export default ATMDeposit;
