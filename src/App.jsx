import { Route, Switch } from 'react-router-dom'

import { useState, useEffect } from 'react'

import LoadingScreen from './layouts/LoadingScreen'
import Background from './layouts/Background'
import MainPage from './layouts/MainPage'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  return (
    <>
      {loading === false ? (
        <div className='wrapper'>
          <Switch>
            <Route path='/' exact component={MainPage} />
          </Switch>
          <Background />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default App
