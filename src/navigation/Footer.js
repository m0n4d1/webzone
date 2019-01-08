import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '../presentational/Section'
import styled from 'styled-components'
import Frame from '../presentational/Frame';
import Block from '../presentational/Block';

const SubFooter = styled.div`
  h6 {
    color: #777;
    text-align: center;
    margin: 20px 0;
  }
`;

const FooterButtons = styled.ul`
  list-style: none;
  margin:0;
  padding: 0;
  li {
    display: grid;
    justify-content: center;
    background-color: #ddd;
    padding: 8px;
    &.facebook { background-color: #3b5998; }
    &.youtube { background-color: #bb0000; }
    &.twitter { background-color: #55acee; }
    &.instagram { background-color: #125688; }
  }
`

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Section color={"#444"} overide={"color: #ddd; "}>
          <Frame size={3}>
            <Block>
              <h2>Thought Zone</h2>
              <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor.</p>
            </Block>
            <Block>
              <h4>Contact</h4>
              <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt.</p>
            </Block>
            <Block>
              <h4>Social Media</h4>
              <FooterButtons>
                <a href="https://www.facebook.com">
                  <li className="facebook">
                      <FontAwesomeIcon color="white" icon={['fab', 'facebook']} size="2x"/>
                  </li>
                </a>
                <li className="twitter">
                    <FontAwesomeIcon color="white" icon={['fab', 'twitter']} size="2x"/>
                </li>
                <li className="youtube">
                    <FontAwesomeIcon color="white" icon={['fab', 'youtube']} size="2x"/>
                </li>
                <li className="instagram">
                    <FontAwesomeIcon color="white" icon={['fab', 'instagram']} size="2x"/> 
                </li>
              </FooterButtons>
            </Block>
          </Frame>
        </Section>
        <Section color={"#111"} nopad>
          <SubFooter>
            <h6>Thought Zone © 2019</h6>
          </SubFooter>
        </Section>
      </Fragment>
    )
  }
}
