import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme } from 'ui/styles'

type ModalProps = {
  isOpen: boolean
}

const modifiersContainer = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
}

export const Container = styled.div<ModalProps>`
  background: ${rgba(theme.colors.gray[900], 0.4)};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: opacity 0.2s;
  backdrop-filter: blur(1px);

  ${({ isOpen }) => css`
    ${isOpen && modifiersContainer.open}
    ${!isOpen && modifiersContainer.close}
  `}
`

export const Dialog = styled.div`
  min-width: 40rem;
  max-height: 70rem;
  border-radius: 0.8rem;
  background: ${theme.colors.white};
  box-shadow: 0 0.4rem 2.5rem rgba(0, 0, 0, 0.1);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4.8rem;
  padding: 1.6rem 1.6rem 0 0;
`

export const Body = styled.div`
  padding: 0 4rem 4rem;
  max-height: 60rem;
  overflow-y: auto;
`

export const Close = styled.button`
  border-radius: 0.8rem;
  color: ${theme.colors.gray[500]};
  cursor: pointer;

  border: 0;
  background: transparent;

  &:hover {
    opacity: 0.7;
  }
`
