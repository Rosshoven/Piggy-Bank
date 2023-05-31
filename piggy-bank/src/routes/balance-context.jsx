// importing createContext from react - https://react.dev/reference/react/createContext
// "createContext lets you create a context that components can provide or read."
// createContext automatically returns an object. key:value system
import { createContext } from "react";

// "calling" createContext to make a BalanceContext with initial value of null, and exporting it
export const BalanceContext = createContext(null);



// Note, created the context outside of other components. 
