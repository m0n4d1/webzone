import styled from 'styled-components'

const Frame = styled.div`
  display: grid;
  
  ${props => {
    if(props.size > 3) {
      return (`
        grid-template-columns: repeat(${Math.floor(props.size/3)}, 1fr);
        @media screen and (min-width: 600px) {
          grid-template-columns: repeat(${Math.ceil(props.size/2)}, 1fr);
        }
        @media screen and (min-width: 900px) {
          grid-template-columns: repeat(${props.size}, 1fr);
        }
      `)
    } else if(props.size === 3) {
      return (`
        @media screen and (min-width: 900px) {
          grid-template-columns: repeat(3, 1fr);
        }
      `)
    } else if(props.size === 2) {
      return (`
        @media screen and (min-width: 600px) {
           grid-template-columns: repeat(2, 1fr);
        }
      `)
    }
    
  }
  }
  grid-gap: 15px;
`

export default Frame