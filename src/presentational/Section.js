
import styled from 'styled-components'

const Section = styled.section`

  ${props => props.sticky && (
    `
      position: sticky;
      top: -1px;
    `
  )}

  display: grid;
  grid-template-columns: ${props => props.fluid ? (
    " 1fr" // fluid prop expands section horizontally completely
    ):(
    " 1fr minmax(auto, 1200px) 1fr" // normal will stretch to 1200px (centered)
  )};

  > * {
    grid-column: ${props => props.fluid ? "1" : "2"}; /* keeps contents in the correct grid cell */
  }

  height: ${props => props.height}px;

  margin: 0;
  padding: 0;

  background-color: ${props => props.color};

  ${props => props.img && (
    `
      background-image: url(${props.img});
      background-attachment: fixed;
      background-size: span;
      background-position: center;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
    `
  )}
  ${props => props.shadow && (
    `
      box-shadow: 0 2px 4px rgba(0,0,0,0.5); 
    `
  )}
`

export default Section;