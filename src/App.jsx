import { Route, Switch } from 'react-router-dom'

import { useState, useEffect } from 'react'

import LoadingScreen from './layouts/LoadingScreen'
import Background from './layouts/Background'
import MainPage from './layouts/MainPage'
import AboutMe from './layouts/AboutMe'

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
            <Route path='/about_me' exact component={AboutMe} />
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
