import React from "react";
import { useState, useContext } from "react";
import ATM from "../ATM";
import { BalanceContext } from "./balance-context";
import Pig_Withdraw from "../images/Pig_Withdraw.jpg";

export default function Withdraw () {
    const [withdraw, setWithdraw] = useState(0);
    // const [totalState, setTotalState] = useState(0);
    const [validTransaction, setValidTransaction] = useState(false);
    const {balance, setBalance} = useContext(BalanceContext);
  
    const isWithdraw = true
    // let status = `${balance}`;

    const handleChange = (event) => {
            if (Number(event.target.value) <= 0) { 
            document.getElementById('error-message').innerHTML = `Please enter amount above $0.`
            return setValidTransaction(false);
          } else if (Number(event.target.value) > balance) {
            document.getElementById('error-message').innerHTML = `Your Piggy Bank doesn't have $${event.target.value}. Please enter a valid amount.`
            return setValidTransaction(false);
          } else {
            setValidTransaction(true);
            document.getElementById('error-message').innerHTML = ``;
          }
          setWithdraw(Number(event.target.value));
        };
  

    const handleSubmit = (event) => {
      
      let newTotal = balance - withdraw;
      // setTotalState(newTotal);
      setBalance(newTotal);
      setValidTransaction(false);
      event.preventDefault();
      document.getElementById('number-input').value = '';
      document.getElementById('success-message').innerHTML = `Success! $${withdraw.toFixed(2)} withdrawn. `;
    };
  
    return (
        
        <div style={{display: 'flex', flexDirection: 'column', padding: '10% 0% 40% 0%', backgroundColor: 'lightblue'}}>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid 1px green'}} src={Pig_Withdraw} alt="Pig with Cash" /> 
            <h1 style={{margin: '5% 1%', padding: '0%', display: 'flex', justifyContent: 'center'}}>Take Some Coins From Your Piggy Bank</h1>
            <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid 1px green'}} src={Pig_Withdraw} alt="Pig with Cash" /> 
          </div>
          
          <form style={{ borderRadius: '5px', width: '30rem', marginRight: 'auto', marginLeft: 'auto', border: '2px solid green'}} onSubmit={handleSubmit}>
                <div className="card">
                    <div className="card-header" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                     {`Account Balance: $${(balance).toFixed(2)}`}
                    </div>
                    <div className="card-body" style={{display: 'flex', flexDirection: 'column', backgroundColor: '#ffd3d9'}}>
                        <div style={{color: 'green', fontSize: '1.7rem', margin: '3% auto'}} id="success-message"></div>
                        <div style={{color: 'red', }} id="error-message"></div>
                        <h3> Withdrawal Amount:</h3>
                        <ATM
                        onChange={handleChange}
                        isWithdraw={isWithdraw}
                        isValid={validTransaction}
                        deposit={false}
                        ></ATM>
                        {/* <button style={{marginTop: '10%'}} type="submit" className="btn btn-success" disabled={!isValid} width="200" value="Submit" id="submit-input">Withdraw</button> */}
                    </div>
                </div>
          </form>
        </div>
    );
  };

