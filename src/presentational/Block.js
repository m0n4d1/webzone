import styled from 'styled-components'

const Block = styled.div`
  grid-column: ${props => props.col ? props.col : (`span ${props.colspan}`)};
  grid-row: ${props => props.row ? props.row : (`span ${props.rowspan}`)};
  background-color: ${props => props.color};

`

export default Block