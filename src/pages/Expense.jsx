import React, { useContext } from 'react'
import Dashboard from '../components/Dashboard'

const Expense = () => {
  useContext();
  return (
    <Dashboard activeMenu="Expense">
      This is expense page
    </Dashboard>
  )
}

export default Expense
