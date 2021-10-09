import React from 'react'

import { ICON_HOME, LOGO } from 'assets'

import * as S from './Sidebar.styled'

export function Sidebar() {
  return (
    <S.Container>
      <S.Logo src={LOGO} alt='Monetus Logo' />

      <nav>
        <ul>
          <li>
            <img src={ICON_HOME} alt='Home Icon' height={32} />
          </li>
        </ul>
      </nav>
    </S.Container>
  )
}
