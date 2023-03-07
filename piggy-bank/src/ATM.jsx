const ATM = ({ onChange, isValid }) => {
    return (
      <label className="label huge">
        {/* <h3> Deposit or Withdraw Amount:</h3> */}
        <input min="" placeholder="Please enter amount" id="number-input" type="number" width="200" onChange={onChange}></input>
        <br />
        <button style={{marginTop: '10%'}} type="submit" className="btn btn-success" disabled={!isValid} width="200" value="Submit" id="submit-input">Submit</button>
      </label>
    );
  };

  export default ATM;
