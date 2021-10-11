import styled from 'styled-components'

import { theme } from 'ui/styles'

import { Container as CompanyContainer } from '../Company/Company.styled'

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
    display: grid;
    grid-gap: 3.2rem;
  }
`

export const CompanyItem = styled.li`
  display: flex;
  align-items: center;

  ${CompanyContainer} {
    width: 100%;
    box-shadow: 0 0.8rem 2rem -0.2rem rgba(43, 37, 63, 0.1);

    .pricing {
      margin-left: auto;
    }
  }

  > button {
    margin-left: 0.8rem;
    background: transparent;
    border: 0;
  }
`
