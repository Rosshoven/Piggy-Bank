import { useState } from "react";
import ATMDeposit from "../ATMDeposit";

export default function Deposit() {


    const [deposit, setDeposit] = useState(0);
    const [totalState, setTotalState] = useState(0);
    const isDeposit = true;
    // const [atmMode, setAtmMode] = useState('');
    const [validTransaction, setValidTransaction] = useState(false);

    let status = `${totalState} `;


    const handleChange = (event) => {
              if (Number(event.target.value) <= 0) {
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
        document.getElementById('number-input').value = '0';
      };

    return (
        <div>
            <h1 style={{marginTop: '15%'}}>Put Money In Your Piggy Bank</h1>

            <form style={{marginTop: '15%'}} onSubmit={handleSubmit}>
                <div className="card">
                <div className="card-header">
                {`Account Balance: $${status}`}
                    </div>
                    <div className="card-body">
                        
                    <ATMDeposit
                        onChange={handleChange}
                        isDeposit={isDeposit}
                        isValid={validTransaction}
                        ></ATMDeposit>

                        {/* <a onSubmit={handleSubmit} href="#" class="btn btn-primary">Go somewhere</a> */}
                        {/* <button className="btn btn-primary" type="submit" disabled={!isValid} width="200" onSubmit={handleSubmit} value="Submit" id="submit-input">Deposit</button> */}
                    </div>
                </div>
            
            </form>
        </div>
        
    );
}
