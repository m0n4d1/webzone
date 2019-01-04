import React, { Component } from 'react'
import Section from '../presentational/Section'

export default class Footer extends Component {
  render() {
    return (
      <Section color={"#777"}
        height={400}
        
      >
        <nav>
          <h3>This is the Footer</h3>
        </nav>
      </Section>
    )
  }
}
