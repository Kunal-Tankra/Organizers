import React, { createContext } from 'react'

const AllContexts = createContext()
const AppContext = ({children}) => {

    const statesObj = {

    }

  return (
    <AllContexts.Provider value={statesObj}>
      {children}
    </AllContexts.Provider>
  )
}

export  {AppContext}
export default AllContexts
