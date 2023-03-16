/* eslint-disable no-case-declarations */
import React, { createContext, useContext, useState } from 'react'

// this is the context object that will be used to share state between components
const AccountContext = createContext([{}])
export default function addAccount (userName, email, password) {
  return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><u>Username</u>: {userName}</li>
                <li className="list-group-item"><u>Email</u>: {email}</li>
                <li className="list-group-item"><u>Password</u>: {password}</li>
            </ul>
)}

// this is the provider component that will wrap our example children components and provide the context to all of our child components
export const AccountProvider = ({ children }) => {

  const [accounts, setAccounts] = useState([]);

    

  const [accountData, setAccountData] = useState({
    userName: '',
    email: '',
    password: ''
    // balance: 100
  })

  const handleSetAccountData = (data) => {
    setAccounts([...accounts, data])
  }

  return (
    <AccountContext.Provider value={{ accountData, addAccount, setAccountData, handleSetAccountData, accounts }}>
      {children}
    </AccountContext.Provider>
  )
}

// 
export const useAccountContext = () => useContext(AccountContext);

// Cite: Pair-coded with Max Sturges - https://github.com/MSturges. Helping me understand useContext.