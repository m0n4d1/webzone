import React, { Component, Fragment } from 'react'
import Section from '../layout/Section.js'
import Frame from '../layout/Frame.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconCard from '../presentational/IconCard.js';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import Block from '../layout/Block.js';
import BigHeading from '../presentational/BigHeading.js';
import Particles from 'react-particles-js';

export default class Home extends Component {
  state = {
  }
  componentDidMount() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://discordapp.com/api/guilds/520225497666551818/widget.json")
    xhr.onload = () => {
      // console.log(JSON.parse(xhr.response))
      this.setState({
        members: JSON.parse(xhr.response).members
      })
    }
    xhr.send()
  }

  render() {
    let avatars = this.state.members && this.state.members.map(function(member) {
      return {
        src: member.avatar_url,
        height: 20,
        width: 20
      }
    })
    let onlineMembers = this.state.members && this.state.members.length
    return (
      <Fragment>
        <Section nopad
        height={400}
        >
          <h2>Welcome to Thought Zone</h2>
          <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
        </Section>
        <Section 
        img={"http://brainsciencesjournal.org/wp-content/uploads/neuronuul.jpg"}
        // bgcolor={"#99AAB5"} 
        fluid nopad overide={`
          > div {
            height: 400px;
          }
        `}>
          <Particles
            height="400px"
            params={{
              particles: {
                number: {
                  value: onlineMembers
                },
                shape: {
                  type: "images",
                  images: avatars
                },
                size: {
                  value: 30,
                  random: false
                },
                line_linked: {
                  color: "#2af",
                  width: 1,
                  opacity:3
                },
                move: {
                  direction: "left",
                  speed: 3,
                  bounce: false,
                  out_mode: "out"
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  }
                },
              }
            }}
          />
          <Section overide={`position: absolute; width: 100%; box-sizing: border-box;`} height={400} shadow={"inset"}>


            <Frame>
              <Block overide={`
                justify-self: center;
                display: grid;
                align:content: center;
                width: 100%;
                max-width: 600px;
                background-color: rgba(114,137,218,0.85); 
                border-radius: 15px;
                box-shadow: 0 2px 4px rgba(44,47,51,0.5);
                border: 1px solid white;
                text-align: center;
                h1 {
                  margin: 20px 0;
                  font-family: Righteous;
                  font-size: 30px;
                  color: white;
                }
                a {
                  margin: 12px 0;
                  background-color: white;
                  width: 100px;
                  padding: 10px;
                  font-family: Nunito;
                  font-size: 20px;
                  justify-self: center;
                  color: #7289DA;
                  align-self: center;
                  border-radius: 5px;
                  border: 1px solid white;
                  transition: all .15s ease;
                  text-decoration: none;
                  &:hover {
                    background-color: #7289DA;
                    color: white;
                    cursor: pointer;
                    box-shadow: 0 2px 4px black;
                    transform: translateY(-2px);
                  }
                }
              `}>
                <IconCard>
                  <h1>Join Our Community</h1>
                  <faAlignCenter>
                    <FontAwesomeIcon color="white" icon={['fab', 'discord']} size="10x"/>
                  </faAlignCenter>
                  <a href="https://discord.gg/MS37RUj" rel="noopener noreferrer"  target="_blank">Join Now!</a>
                </IconCard>
              </Block>
            </Frame>
          </Section>
        </Section>
            <Section>
            <h2>Fluid Test</h2>
          <p>Sit deserunt Lorem eu elit occaecat nulla nostrud sit voluptate culpa laborum dolor. Incididunt incididunt culpa ipsum labore dolore fugiat magna. Dolor Lorem ad ipsum consectetur anim commodo aute incididunt. Esse Lorem aute velit consectetur anim anim nostrud ex cillum quis non magna. Consectetur excepteur nisi laboris ut laborum qui. Officia veniam nulla pariatur sit voluptate eiusmod aute laborum enim dolor adipisicing Lorem. Velit nulla do laboris nostrud.</p>
            </Section>
        <Section bgcolor={"#39f"}>
          <BigHeading>Our Values</BigHeading>
        </Section>
        <Section bgcolor={"#39f"} nopad>
          <Frame size={4} nogap>
            <Block bgcolor={"#18f"}>
              <IconCard>
                <faAlignCenter>
                  <FontAwesomeIcon color="white" icon="brain" size="9x"/>
                </faAlignCenter>
                <h3>Having Presence of Mind</h3>
              </IconCard>
            </Block>
            <Block bgcolor={"#17f"}>
              <IconCard>
                <faAlignCenter>
                  <FontAwesomeIcon color="white" icon="handshake" size="9x"/>
                </faAlignCenter>
                <h3>Being Good Spirited</h3>
              </IconCard>
            </Block>
            <Block bgcolor={"#19f"}>
              <IconCard>
                <faAlignCenter>
                  <FontAwesomeIcon color="white" icon="cogs" size="9x"/>
                </faAlignCenter>
                <h3>Regard for Logic and Reason</h3>
              </IconCard>
            </Block>
            <Block bgcolor={"#18f"}>
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
