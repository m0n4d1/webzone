import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    return (
        // <Menu stackable>
        //   <h2>This is the Header</h2>
        //   <ul>
        //     <li><NavLink >Home</NavLink></li>
        //     <li><NavLink to="/blog">Blog</NavLink></li>
        //     <li><NavLink to="/about">About</NavLink></li>
        //   </ul>
        <Menu stackable>
          <Menu.Item>
            <img src='https://via.placeholder.com/50' />
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            exact
            to="/"
            name='Home'

          >
            Home
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to="/blog"
            name='Blog'
          >
            Blog
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to="/about"
            name='sign-in' >
            About
          </Menu.Item>
        </Menu>
    )
  }
}
