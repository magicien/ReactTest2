import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import LanguageProvider from 'containers/LanguageProvider'
import configureStore from 'redux/configureStore'
import { renderTranslationMessages } from 'redux/modules/i18n'

import mapSagas from 'redux/modules/map/sagas'

import Header from 'components/Header'
import Footer from 'components/Footer'

import HomePage from 'pages/HomePage'
import NotFoundPage from 'pages/NotFoundPage'

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`

          //<Route component={NotFoundPage} />
function Root() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React Test 2"
        defaultTitle="React Test 2"
      />    
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      <Footer />
    </AppWrapper>
  )
}


const initialState = {}
const store = configureStore(initialState)


store.runSaga(mapSagas[0])


const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </LanguageProvider>
    </Provider>,
    document.getElementById('app')
  )
}

renderTranslationMessages(render)

if(process.env.NODE_ENV === 'production'){
  require('offline-plugin/runtime').install()
}

