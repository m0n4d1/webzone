import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Section from '../layout/Section'

const TopNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    li {
        list-style: none;
        height: 100%;
        width: 100%;
      a {
        display: block;
        padding: 20px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        transition: .2s ease;
        font-family: Comfortaa;
        &.active {
          background-color: #2af;
        }
        &:hover {
          background-color: #fff;
          color: #19f;
        }
      }
    }
  }
`
const TopHeader = styled.header`
  h1 {
    font-family: Righteous, Helvetica, sans-serif;
    text-align: center;
    font-size: 300%;
    color: #fff;
  }
`

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Section color={"#2af"} nopad >
          <TopHeader>
            <h1>THOUGHT ZONE</h1>
          </TopHeader>
        </Section>
        <Section color={"#19f"} sticky shadow overide={`z-index: 100;`} nopad>
          <TopNav>
            <ul>
              <li><NavLink exact to={process.env.PUBLIC_URL + '/'} >Home</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </TopNav>   
        </Section>
      </Fragment>
    )
  }
}
