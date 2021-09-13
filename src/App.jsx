import { useState, useEffect } from 'react'

import LoadingScreen from './layouts/LoadingScreen'
import Background from './layouts/Background'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  return (
    <div>
      {loading === false ? (
        <div>
          <h1>Portfolio</h1>
          <Background />
        </div>
      ) : (
        <>
          <LoadingScreen />
        </>
      )}
    </div>
  )
}

export default App
