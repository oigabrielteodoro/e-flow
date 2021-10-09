import styled from 'styled-components'
import { theme } from 'ui/styles'
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

export const CompaniesList = styled.ul`
  display: flex;
  align-items: center;
  padding-top: 1.6rem;
  max-width: 76rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 0;
  }

  li {
    padding: 1.6rem;
    border-radius: 0.8rem;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 0 0.8rem 2rem -0.2rem rgba(43, 37, 63, 0.1);
    }

    & + li {
      margin-left: 1.6rem;
    }

    button {
      background: transparent;
      border: 0;
    }

    section {
      display: flex;
      flex-direction: column;
      margin-left: 1.2rem;
      min-width: 11.5rem;

      span {
        color: ${theme.colors.gray[900]};

        &:last-child {
          color: ${theme.colors.gray[500]};
        }
      }
    }

    .logo {
      margin-left: 1.6rem;
    }

    .pricing {
      margin-left: 1.2rem;
      display: flex;
      align-items: center;

      strong {
        font-weight: 500;
        margin-right: 0.8rem;
        color: ${theme.colors.green[500]};
      }

      .up {
        color: ${theme.colors.green[500]};
      }

      .down {
        color: ${theme.colors.red[500]};
      }
    }
  }
`
