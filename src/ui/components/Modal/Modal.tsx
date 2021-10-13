import React, { ReactNode, useEffect } from 'react'

import { ICON_CLOSE } from 'assets'

import * as S from './Modal.styled'

type Props = {
  isOpen: boolean
  children: ReactNode
  onClose: () => void
}

export function Modal({ children, isOpen, onClose }: Props) {
  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && onClose()
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [onClose])

  return (
    <S.Container isOpen={isOpen} onClick={onClose}>
      <S.Dialog onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.Close onClick={onClose} aria-label='close button'>
            <img src={ICON_CLOSE} alt='Icon Close' />
          </S.Close>
        </S.Header>
        <S.Body>{children}</S.Body>
      </S.Dialog>
    </S.Container>
  )
}
