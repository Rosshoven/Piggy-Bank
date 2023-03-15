import { useAccountContext } from "./account-context";
import Pig_Logo from '../images/Pig_Logo.png';
// import React, { useContext} from "react";

export default function AllData() {
    // const msg = useContext(AccountContext);
    const { accountData: { userName, email, password } } = useAccountContext();
    console.log();
    return (
        
        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16% 0% 40% 0%', backgroundColor: 'lightblue', fontFamily: 'Forum, cursive', fontSize: '2rem'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid .5px black', alignSelf: 'center'}} src={Pig_Logo} alt="Logo" />
                <h1 style={{marginTop: '5%', display: 'flex', justifyContent: 'center', fontSize: '4rem'}}>User's Piggy Bank Info</h1>
                <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid .5px black', alignSelf: 'center'}} src={Pig_Logo} alt="Logo" />
            </div>   



            <div className="card" style={{width: '35rem', margin: '3% auto', border: 'solid 2px green', backgroundColor: 'green'}}>
  {/* <div class="card-header">
    Featured
  </div> */}
                 <ul className="list-group list-group-flush">
                    <li className="list-group-item"><u>Username</u>: MichaelRoss</li>
                    <li className="list-group-item"><u>Email</u>: MisterMichael@gmail.com</li>
                    <li className="list-group-item"><u>Password</u>: Piano23!</li>
                </ul>
                
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><u>Username</u>: {userName}</li>
                    <li className="list-group-item"><u>Email</u>: {email}</li>
                    <li className="list-group-item"><u>Password</u>: {password}</li>
                </ul>
            </div>
        </div>     
        );
    } 
