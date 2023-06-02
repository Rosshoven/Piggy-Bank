// importing createContext from react - https://react.dev/reference/react/createContext
// "createContext lets you create a context that components can provide or read."
// createContext automatically returns an object. key:value system
// Here we CREATE the context
import { createContext, useState } from "react";

// "calling" createContext to make a BalanceContext with initial value of null, and exporting it
export const BalanceContext = createContext(null);



// Note, created the context outside of other components. 


export const BalanceProvider = ({ children }) => {


    const [balance, setBalance] = useState(0);

    return (
        <BalanceContext.Provider value = {{balance, setBalance }}>{children}</BalanceContext.Provider>
    )


}