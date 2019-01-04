import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Section from '../presentational/Section'

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
        <Section color={"#2af"}
          //img={"https://i.pinimg.com/originals/f5/f5/6a/f5f56ac8a2e3e5f39980b8b6fe83f3a9.jpg"}
        >
          <TopHeader>
            <h1>THOUGHT ZONE</h1>
          </TopHeader>
        </Section>
        <Section color={"#19f"} sticky shadow>
          <TopNav>
            <ul>
              <li><NavLink to={process.env.PUBLIC_URL + '/'} >Home</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </TopNav>   
        </Section>
      </Fragment>
    )
  }
}
