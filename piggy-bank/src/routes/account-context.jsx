/* eslint-disable no-case-declarations */
import React, { createContext, useContext, useState } from 'react'

// this is the context object that will be used to share state between components
const AccountContext = createContext({})

// this is the provider component that will wrap our example children components and provide the context to all of our child components
export const AccountProvider = ({ children }) => {

    const [accounts, setAccounts] = useState([])

  const [accountData, setAccountData] = useState({
    userName: '',
    email: '',
    password: '',
    balance: 100
  })

  const handleSetAccountData = (data) => {
    setAccounts([...accounts, data])
  }

  return (
    <AccountContext.Provider value={{ accountData, setAccountData, handleSetAccountData, accounts }}>
      {children}
    </AccountContext.Provider>
  )
}

// 
export const useAccountContext = () => useContext(AccountContext);