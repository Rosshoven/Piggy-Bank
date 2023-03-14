import React from "react";
import { useState, useContext } from "react";
import ATM from "../ATM";
import { BalanceContext } from "./balance-context";
// import pig_on_cash_images from '../images/pig_on_cash_images.jpeg';
import Pig_Deposit from '../images/Pig_Deposit.jpg';


export default function Deposit() {
    const [deposit, setDeposit] = useState(0);
    // const [totalState, setTotalState] = useState(0);
    const [validTransaction, setValidTransaction] = useState(false);
    const {balance, setBalance} = useContext(BalanceContext);

    const isDeposit = true;
    // let status = `${balance}`;

    const handleChange = (event) => {
            Number(event.target.value) <= 0 ? 
            document.getElementById('error-message').innerHTML = "Please enter amount above $0." : document.getElementById('error-message').innerHTML = ''; 
             if (Number(event.target.value) <= 0 ) { 
                return setValidTransaction(false);
              } else {
                setValidTransaction(true);
              }
              setDeposit(Number(event.target.value));
            };

    const handleSubmit = (event) => { 
        let newTotal = (balance + deposit);
        // setTotalState(newTotal);
        setBalance(newTotal);
        setValidTransaction(false);
        event.preventDefault();
        document.getElementById('number-input').value = '';
        document.getElementById('success-message').innerHTML = `Success! Deposit of $${deposit.toFixed(2)} received.`;
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', padding: '10% 0% 40% 0%', backgroundColor: 'lightblue'}}>
            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width:'70px', height: '70px', borderRadius: '50%'}} src={Pig_Deposit} alt="Pig with Cash" /> 
                <h1 style={{margin: '5% 1% ', padding: '0%', display: 'flex', justifyContent: 'center'}}>Put Some Coins Into Your Piggy Bank</h1>
                <img style={{width:'70px', height: '70px', borderRadius: '50%'}} src={Pig_Deposit} alt="Pig with Cash" /> 
            </div>
            
            <form style={{ borderRadius: '5px', width: '30rem', marginRight: 'auto', marginLeft: 'auto', border: '2px solid green'}} onSubmit={handleSubmit}>
                 <div className="card">
                    <div className="card-header" style={{fontSize: '1.5rem', fontWeight: 'bold'}}>
                     {`Account Balance: $${(balance).toFixed(2)}`}
                    </div>
                    <div className="card-body" style={{backgroundColor: '#ffd3d9'}}>
                    <div style={{color: 'green', fontSize: '1.7rem', margin: '3% auto'}} id="success-message"></div>
                    <div style={{color: 'red', }} id="error-message"></div>
                    <h3> Deposit Amount:</h3>
                    <ATM
                        onChange={handleChange}
                        isDeposit={isDeposit}
                        isValid={validTransaction}
                        deposit = {true}
                        ></ATM>
                    </div>
                </div>
            </form>
        </div>
        
    );
}
