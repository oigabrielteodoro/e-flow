import styled from 'styled-components'
import Carousel from 'react-multi-carousel'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    display: flex;
    align-items: center;
  }

  button {
    transition: opacity 0.2s;
    background: transparent;
    border: 0;

    &:hover {
      opacity: 0.5;
    }

    & + button {
      margin-left: 2rem;
    }

    img {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`

export const CompaniesList = styled(Carousel)`
  max-width: 90.5rem;
  margin-top: 1.6rem;

  li {
    padding-left: 1.6rem;
  }
`
