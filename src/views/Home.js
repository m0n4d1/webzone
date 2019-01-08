import React, { Component, Fragment } from 'react'
import Section from '../presentational/Section.js'
import Frame from '../presentational/Frame.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconCard from '../presentational/IconCard.js';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import Block from '../presentational/Block.js';
import BigHeading from '../presentational/BigHeading.js';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <h2>Welcome to Thought Zone</h2>
          <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
        </Section>
        <Section >
          <h2>Fluid Test</h2>
          <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
        </Section>
        <Section color={"#39f"}>
          <BigHeading>Our Values</BigHeading>
        </Section>
        <Section color={"#39f"} nopad>
          <Frame size={4} nogap>
            <Block color={"#18f"}>
              <IconCard>
                <faAlignCenter>
                  <FontAwesomeIcon color="white" icon="brain" size="9x"/>
                </faAlignCenter>
                <h3>Having Presence of Mind</h3>
              </IconCard>
            </Block>
            <Block color={"#17f"}>
              <IconCard>
                <faAlignCenter>
                  <FontAwesomeIcon color="white" icon="handshake" size="9x"/>
                </faAlignCenter>
                <h3>Being Good Spirited</h3>
              </IconCard>
            </Block>
            <Block color={"#19f"}>
              <IconCard>
                <faAlignCenter>
                  <FontAwesomeIcon color="white" icon="cogs" size="9x"/>
                </faAlignCenter>
                <h3>Regard for Logic and Reason</h3>
              </IconCard>
            </Block>
            <Block color={"#18f"}>
              <IconCard>
                <faAlignCenter>
                  <FontAwesomeIcon color="white" icon="comments" size="9x"/>
                </faAlignCenter>
                <h3>Using Debate to Sharpen One's Mind.</h3>
              </IconCard>
            </Block>
          </Frame>
        </Section>
        <Section 
          height={300}
        >
          <h2>Test</h2>
        </Section>
        <Section>
          <Frame size={3}>
            <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
            <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
            <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
          </Frame>
        </Section>
        <Section>
          <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
          <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
          <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
        </Section>
      </Fragment>
    )
  }
}
