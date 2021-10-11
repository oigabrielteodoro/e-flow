import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Container = styled.aside`
  padding: 3.2rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.1rem solid rgba(0, 71, 187, 0.2);
    border-radius: 12rem;
    padding: 0.4rem 1.7rem 0.4rem 0.4rem;

    span {
      color: ${theme.colors.blue[500]};
      font-weight: 500;
    }

    button {
      display: grid;
      place-items: center;
      background: transparent;
      border: 0;
    }

    .avatar {
      width: 3.2rem;
      height: 3.2rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`

export const CompaniesArea = styled.section`
  margin-top: 4.8rem;

  h1 {
    display: inline-flex;
    font-weight: 500;
    font-size: 1.8rem;

    img {
      margin-right: 1rem;
    }
  }

  ul {
    margin-top: 3.2rem;
  }
`
