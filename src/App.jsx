import React, { useState, useEffect } from 'react';

const App = () => {
  const [apiResponse, setapiResponse] = useState('')

  useEffect(() => {
    callAPI()
  }, [])

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI')
      .then(res => res.text())
      .then(res => setapiResponse(res))
      .catch(err => err)
  }

  return (
    <div className="App">
      <p className='App-test'>{apiResponse}</p>
    </div>
  )
}

export default App
