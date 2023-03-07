// export default function Withdraw() {
//     return (
//         <>
//             <p style={{marginTop: '15%'}}>I'm the Withdraw Page</p>
//         </>
        
//     );
// }

import React from "react";
import { useState } from "react";
import ATM from "../ATM";
// import "./styles.css"

export default function Withdraw () {
    const [deposit, setDeposit] = useState(0);
    const [totalState, setTotalState] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);
    const [atmMode, setAtmMode] = useState('');
    const [validTransaction, setValidTransaction] = useState(false);
  
    let status = `Account Balance $ ${totalState} `;


    const handleChange = (event) => {
      console.log(Number(event.target.value));
      if (Number(event.target.value) <= 0) {
        return setValidTransaction(false);
      }
      if (atmMode === 'Cash Back' && Number(event.target.value) > totalState) {
        setValidTransaction(false);
      } else if (atmMode === 'Deposit' && Number(event.target.value) < 1) {
        setValidTransaction(false);
      } else {
        setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
    };

    const handleSubmit = (event) => {
      
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      setValidTransaction(false);
      event.preventDefault();
    };
  
    return (

        <div style={{display: 'flex', flexDirection: 'column', margin: '12%'}}>

            <h1 style={{margin: '10%', padding: '0%', display: 'flex', justifyContent: 'center'}}>Take Some Coins From Your Piggy Bank</h1>

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
                        isDeposit={isDeposit}
                        isValid={validTransaction}
                        ></ATM>
                        {/* <button style={{marginTop: '10%'}} type="submit" className="btn btn-success" disabled={!isValid} width="200" value="Submit" id="submit-input">Withdraw</button> */}
                    </div>
                </div>
            </form>
        </div>
    );
  };

