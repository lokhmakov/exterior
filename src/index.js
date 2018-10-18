import React, { Component } from 'react'
import ReactDOM             from 'react-dom'

import { BrowserRouter }    from 'react-router-dom'
import { Route }            from 'react-router-dom'


import SpaceProvider        from 'core/space/all/Provider'

import PageHome             from 'app/page/web/PageHome'
import PageEditor           from 'app/page/web/PageEditor'

//import PageHome             from 'core/page/web/PageHome'


const App = () => {
  return (
    <BrowserRouter>
      <SpaceProvider>
        <Route
          exact
          path='/'
          component={ PageHome }
        />
        <Route
          path='/editor/:id'
          component={ PageEditor }
        />
      </SpaceProvider>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
