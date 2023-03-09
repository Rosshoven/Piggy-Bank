import { useState } from "react";
import ATM from "../ATM";

export default function Deposit() {


    const [deposit, setDeposit] = useState(0);
    const [totalState, setTotalState] = useState(0);
    const [validTransaction, setValidTransaction] = useState(false);

    const isDeposit = true;
    let status = `${totalState} `;


    const handleChange = (event) => {
            event.target.value <= 0 ? 
            document.getElementById('error-message').innerHTML = "Please enter amount above $0." : document.getElementById('error-message').innerHTML = ''; 
            if (Number(event.target.value) <= 0 ) { 
                return setValidTransaction(false);
              } else {
                setValidTransaction(true);
              }
              setDeposit(Number(event.target.value));
            };

    const handleSubmit = (event) => {
        
        let newTotal = totalState + deposit;
        setTotalState(newTotal);
        setValidTransaction(false);
        event.preventDefault();
        document.getElementById('number-input').value = '';
        document.getElementById('success-message').innerHTML = `Success! Deposit of $${deposit} received.`;
      
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', margin: '12%'}}>
            
            <h1 style={{margin: '5%', padding: '0%', display: 'flex', justifyContent: 'center'}}>Put Some Coins Into Piggy Bank</h1>

            <form style={{ borderRadius: '5px', width: '30rem', marginRight: 'auto', marginLeft: 'auto',}} onSubmit={handleSubmit}>
                 <div className="card">
                    <div className="card-header" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                     {`Account Balance: $${status}`}
                    </div>
                    <div className="card-body">
                    <div style={{color: 'green', fontSize: '1.7rem', margin: '3% auto'}} id="success-message"></div>
                    <div style={{color: 'red', }} id="error-message"></div>
                    <h3> Deposit Amount:</h3>
                    <ATM
                        onChange={handleChange}
                        isDeposit={isDeposit}
                        isValid={validTransaction}
                        ></ATM>
                    </div>
                </div>
            </form>

        </div>
        
    );
}
