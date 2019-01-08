import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { GlobalStyles } from './util/GlobalStyles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments, faHandshake, faCogs, faBrain,  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Header from './navigation/Header'
import Footer from './navigation/Footer'
import Home from './views/Home'
import Blog from './views/Blog'
import About from './views/About'
library.add(faComments, faHandshake, faCogs, faBrain, faFacebook, faYoutube, faTwitter, faInstagram)


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header/>
            <Route exact path={process.env.PUBLIC_URL + '/' }  component={Home}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/About" component={About}/>
          <Footer/>
          <GlobalStyles/>
        </Fragment>
      </BrowserRouter>
    )
  }
}
