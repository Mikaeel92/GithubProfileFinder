import React, { useEffect, useState } from 'react'

const App = () => {

  const [input, setInput] = useState('')
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchDataFromApi = async () => {
      
  }

  useEffect(() => {
    fetchDataFromApi()
  }, [])

  return (
    <div>App</div>
  )
}

export default App