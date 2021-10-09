import styled from 'styled-components'
import { theme } from 'ui'

export const Container = styled.aside`
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 9.6rem;
  height: 100vh;

  nav {
    margin-top: 3rem;

    ul {
      position: relative;

      li::before {
        content: '';
        position: absolute;
        background: ${theme.colors.orange[500]};
        width: 0.4rem;
        top: 50%;
        height: 4.8rem;
        left: -100%;
        transform: translateY(-50%);
        border-radius: 0 1.2rem 1.2rem 0;
      }
    }
  }
`

export const Logo = styled.img`
  padding: 2rem 0;
`
