import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Wrapper = styled.div`
  background: ${theme.colors.gray[50]};
  border-radius: ${theme.radius.background} 0 0 0;
  padding: 3.2rem 2rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 2.4rem;
      height: 2.8rem;
    }

    h1 {
      margin-left: 1.1rem;
      font-size: ${theme.font.sizes.title};
      font-weight: 600;
    }
  }
`

export const Container = styled.main`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
`

export const SearchArea = styled.form`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  margin-right: auto;

  input {
    border: 0;
    height: 4rem;
    background: transparent;
    border-radius: ${theme.radius.input} 0 0 ${theme.radius.input};
    border: 0.1rem solid ${theme.colors.gray[100]};
    border-right-color: transparent;
    padding: 0 1.6rem;
    min-width: 32.4rem;

    &::placeholder {
      color: ${theme.colors.gray[300]};
    }
  }

  button {
    border: 0;
    width: 4rem;
    height: 4rem;
    border-radius: ${theme.radius.input};
    background: ${theme.colors.blue[500]};
    color: ${theme.colors.white};
    margin-left: -0.8rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.85);
    }
  }
`
