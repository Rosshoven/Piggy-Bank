import { useAccountContext } from "./account-context";


export default function AllData() {

    const { accountData: { userName, email, password } } = useAccountContext();
     
    console.log();
    return (
        <>
            {/* <p style={{marginTop: '15%'}}>
                {!accounts[0] ? accounts.map((item, index) => {
                    <div key={index}>
                        <span>{item.username}</span>
                    </div>
                })

                : null
            }
            </p> */}
            <p style={{marginTop: '15%'}}>I'm the All Data Page</p>
            <p>{userName}</p>
            <p>{email}</p>
            <p>{password}</p>
        </>
        
    );
} 
