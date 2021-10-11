import styled from 'styled-components'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 74.8rem;
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

export const CompaniesList = styled(Carousel).attrs({
  plugins: [
    {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides: 3,
      },
    },
  ],
})`
  max-width: 76rem;
  margin-top: 1.6rem;
`
