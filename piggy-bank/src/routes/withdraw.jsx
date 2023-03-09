import React from "react";
import { useState } from "react";
import ATM from "../ATM";
// import handleSubmit from "./deposit";
// import "./styles.css"

export default function Withdraw () {
    const [withdraw, setWithdraw] = useState(0);
    const [totalState, setTotalState] = useState(0);
    const [validTransaction, setValidTransaction] = useState(false);
  
    const isWithdraw = true
    let status = `${totalState} `;

    const handleChange = (event) => {
        // event.target.value > status ? 
        // document.getElementById('error-message').innerHTML = `Piggy Bank doesn't have $${event.target.value}. Please enter a valid amount.` : document.getElementById('error-message').innerHTML = ''; 
        if (Number(event.target.value) <= 0) { 
            document.getElementById('error-message').innerHTML = `Please enter amount above $0.`
            return setValidTransaction(false);
          } else if (event.target.value > status) {
            document.getElementById('error-message').innerHTML = `Your Piggy Bank doesn't have $${event.target.value}. Please enter a valid amount.`
            return setValidTransaction(false);
          } else {
            setValidTransaction(true);
          }
          setWithdraw(Number(event.target.value));
        };
  

    const handleSubmit = (event) => {
      
      let newTotal = totalState - withdraw;
      setTotalState(newTotal);
      setValidTransaction(false);
      event.preventDefault();
      document.getElementById('number-input').value = '';
      document.getElementById('success-message').innerHTML = `Success! $${withdraw} withdrawn. `;
    };
  
    return (
        
        <div style={{display: 'flex', flexDirection: 'column', margin: '12%'}}>


            <h1 style={{margin: '5%', padding: '0%', display: 'flex', justifyContent: 'center'}}>Take Some Coins From Piggy Bank</h1>

            <form style={{ borderRadius: '5px', width: '30rem', marginRight: 'auto', marginLeft: 'auto',}} onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                     {`Account Balance: $${status}`}
                    </div>
                    <div className="card-body" style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{color: 'green', fontSize: '1.7rem', margin: '3% auto'}} id="success-message"></div>
                        <div style={{color: 'red', }} id="error-message"></div>
                        <h3> Withdrawal Amount:</h3>
                        <ATM
                        onChange={handleChange}
                        isWithdraw={isWithdraw}
                        isValid={validTransaction}
                        ></ATM>
                        {/* <button style={{marginTop: '10%'}} type="submit" className="btn btn-success" disabled={!isValid} width="200" value="Submit" id="submit-input">Withdraw</button> */}
                    </div>
                </div>
            </form>
        </div>
    );
  };

