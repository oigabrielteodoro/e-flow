import styled, { css } from 'styled-components'
import { theme } from 'ui/styles'

type ContainerProps = {
  isPricingUp?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 1.6rem;
  border-radius: 0.8rem;
  background: ${theme.colors.white};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 0.8rem 2rem -0.2rem rgba(43, 37, 63, 0.1);
  }

  button {
    background: transparent;
    border: 0;

    & + .logo {
      margin-left: 1rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    margin-left: 1.2rem;

    span {
      color: ${theme.colors.gray[900]};

      &:last-child {
        color: ${theme.colors.gray[500]};
      }
    }
  }

  .logo {
    width: 4rem;
    height: 4rem;
    border: 0.2rem solid ${theme.colors.gray[300]};
    border-radius: 50%;
  }

  .pricing {
    margin-left: auto;
    display: flex;
    align-items: center;

    strong {
      font-weight: 500;
      margin-right: 0.8rem;
      color: ${theme.colors.red[500]};

      ${({ isPricingUp }) =>
        isPricingUp &&
        css`
          color: ${theme.colors.green[500]};
        `}
    }
  }
`
