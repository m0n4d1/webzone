import React, { Component, Fragment } from 'react'
import Section from '../presentational/Section'
import styled from 'styled-components'
import Frame from '../presentational/Frame';
import Block from '../presentational/Block';

const SubFooter = styled.div`
  h6 {
    color: #777;
    text-align: center;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Section color={"#444"}>
          <Frame size={3}>
            <Block colspan={2}>
              <h4>Test</h4>
              <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
            </Block>
            <Block>
              <h4>Test</h4>
              <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
            </Block>
          </Frame>
        </Section>
        <Section color={"#111"} height={50}>
          <SubFooter>
            <h6>Thought Zone © 2019</h6>
          </SubFooter>
        </Section>
      </Fragment>
    )
  }
}
