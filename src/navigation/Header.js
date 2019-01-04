import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Section from '../presentational/Section'

const TopNav = styled.nav`
  padding: 30px 0;
  ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
`
const TopHeader = styled.header`
  h1 {
    text-align: center;
    font-size: 300%;
  }
`

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Section
          img={"https://i.pinimg.com/originals/f5/f5/6a/f5f56ac8a2e3e5f39980b8b6fe83f3a9.jpg"}
        >
          <TopHeader>
            <h1>THOUGHT ZONE</h1>
          </TopHeader>
        </Section>
        <Section color={"#61B2F1"} sticky shadow>
          <TopNav>
            <ul>
              <li><NavLink to="/" >Home</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </TopNav>   
        </Section>
      </Fragment>
    )
  }
}
