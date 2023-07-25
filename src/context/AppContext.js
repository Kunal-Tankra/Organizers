import React, { createContext, useState } from 'react'

const AllContexts = createContext()
const AppContext = ({ children }) => {
  // state for result data
  const [resultData, setResultData] = useState({});

  const statesObj = {
    resultData, setResultData
  }

  return (
    <AllContexts.Provider value={statesObj}>
      {children}
    </AllContexts.Provider>
  )
}

export { AppContext }
export default AllContexts
