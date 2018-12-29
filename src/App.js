import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './navigation/Header'
import Footer from './navigation/Footer'
import Home from './views/Home'
import Blog from './views/Blog'
import About from './views/About'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/About" component={About}/>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    )
  }
}
