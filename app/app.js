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
import modelSagas from 'redux/modules/map/sagas'

import Bundle from 'components/Bundle'
import Header from 'components/Header'
import Footer from 'components/Footer'

import loadHomePage from 'bundle-loader?lazy!./pages/HomePage'
import loadModelPage from 'bundle-loader?lazy!./pages/ModelPage'
import loadNotFoundPage from 'bundle-loader?lazy!./pages/NotFoundPage'

const HomePage = (props) => (
  <Bundle load={loadHomePage}>
    {(HomePage) => <HomePage {...props}/>}
  </Bundle>
)

const ModelPage = (props) => (
  <Bundle load={loadModelPage}>
    {(ModelPage) => <ModelPage {...props}/>}
  </Bundle>
)

const NotFoundPage = (props) => (
  <Bundle load={loadNotFoundPage}>
    {(NotFoundPage) => <NotFoundPage {...props}/>}
  </Bundle>
)

const AppWrapper = styled.div`
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`

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
          <Route path='/models.html' component={ModelPage} />
          <Route component={NotFoundPage} />
        </Switch>
      <Footer />
    </AppWrapper>
  )
}


const initialState = {}
const store = configureStore(initialState)


// FIXME: select sagas to run
store.runSaga(mapSagas[0])
store.runSaga(modelSagas[0])


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

