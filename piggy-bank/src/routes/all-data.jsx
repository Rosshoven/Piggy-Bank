import { useAccountContext } from "./account-context";


export default function AllData() {

    const { accountData: { userName, email, password } } = useAccountContext();
    console.log();
    return (
        

        <div style={{display: 'flex', flexDirection: 'column', alignitems: 'center', padding: '10% 0% 40% 0%', backgroundColor: 'lightblue', fontFamily: 'Forum, cursive', fontSize: '2rem'}}>
            
            <h1 style={{marginTop: '5%', display: 'flex', justifyContent: 'center', fontSize: '4rem'}}>User's Piggy Bank Info</h1>
            <hr />

            <div class="card" style={{width: '35rem', margin: '0% auto'}}>
  {/* <div class="card-header">
    Featured
  </div> */}
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><u>Username</u>: {userName}</li>
                    <li class="list-group-item"><u>Email</u>: {email}</li>
                    <li class="list-group-item"><u>Password</u>: {password}</li>
                </ul>
            </div>
            {/* <p>{userName}</p>
            <p>{email}</p>
            <p>{password}</p> */}
        </div>
        
    );
} 


// <p style={{marginTop: '15%'}}>
//                 {!accounts[0] ? accounts.map((item, index) => {
//                     <div key={index}>
//                         <span>{item.username}</span>
//                     </div>
//                 })

//                 : null
//             }
//             </p>