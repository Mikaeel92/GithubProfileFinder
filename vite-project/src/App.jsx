import React, { useEffect, useState } from 'react'
import Card from './Card'

const App = () => {

  const [userData, setUserData] = useState([])
  const [input, setInput] = useState('mikaeel92')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleSubmit = () => {
      fetchApi() 
  }
  const fetchApi = async () => {
      try {
          setLoading(true)
          const res = await fetch(`https://api.github.com/users/${input}`);
          const data = await res.json()
          console.log(data)
          if(data) {
              setUserData(data)
              setLoading(false)
              setInput('')
          }
      } 
      catch (e) {
          setErrorMsg(e.message)
          setLoading(false)
      }
  }
  useEffect(() => {
      fetchApi()
  }, [])

  if(loading) {return <div>Data Is Loading Please Wait...</div>}
  if(errorMsg) {return <div>Error! {errorMsg}</div>}

return (
  <div className='w-[700px] h-[750px] mx-auto mt-10 border border-gray-400 p-4 flex flex-col items-center justify-center shadow-lg rounded-lg'>
      <div className='flex gap-2 items-center justify-center my-10'>
      <input
      className='px-4 py-2 bg-gray-100 rounded-md font-bold flex items-center justify-center'
      value={input} 
      onChange={(e) => setInput(e.target.value) }
      type='text'
      placeholder='Search Github UserName...' 
      />
      <button onClick={handleSubmit} className='bg-blue-600 rounded-md p-2 hover:bg-blue-800 text-white'>Search</button>
      </div>
      {
          userData ? <Card user={userData}/> : null
      }
  </div>
)}

export default App