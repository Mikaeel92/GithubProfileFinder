import React, { useEffect, useState } from 'react'

const App = () => {

  const [input, setInput] = useState('')
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const fetchDataFromApi = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${input}`)
        const data = await response.json()
        if(data && data.length) {
          setLoading(false)
          setUserData(data)
        }
      } catch (error) {
        setLoading(false)
        setErrorMsg(error.message)
        setInput('')
      }
  }

  useEffect(() => {
    fetchDataFromApi()
  }, [])

  if(loading) {return <div>Data Is Loading Please Wait...</div>}
  if(errorMsg) {return <div>Error! {errorMsg}</div>}

  return (
    <div>App</div>
  )
}

export default App