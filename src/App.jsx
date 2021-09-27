import { Route, Switch, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import LoadingScreen from './layouts/LoadingScreen'
import Background from './layouts/Background'
import MainPage from './layouts/MainPage'
import AboutMe from './layouts/AboutMe'
import Skills from './layouts/Skills'
import Contact from './layouts/Contact'
import Error from './layouts/Error'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])
  return (
    <>
      {loading === false ? (
        <div className='wrapper'>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route path='/' exact component={MainPage} />
              <Route path='/about_me' component={AboutMe} />
              <Route path='/skills' component={Skills} />
              <Route path='/contact' component={Contact} />
              <Route component={Error} />
            </Switch>
          </AnimatePresence>
          <Background />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  )
}

export default App
