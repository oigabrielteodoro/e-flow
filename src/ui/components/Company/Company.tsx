import React, { ElementType } from 'react'

import { ICON_STAR_OUTLINE, ICON_UP_PRICING, LOGO_FACEBOOK } from 'assets'

import * as S from './Company.styled'

type Props = {
  disableFavorite?: boolean
  as?: ElementType
}

export function Company({ as, disableFavorite = false }: Props) {
  return (
    <S.Container as={as} isPricingUp>
      {!disableFavorite && (
        <button>
          <img src={ICON_STAR_OUTLINE} alt='Icon Star' />
        </button>
      )}

      <img className='logo' src={LOGO_FACEBOOK} alt='Facebook' />

      <section>
        <span>FB</span>
        <span>Facebook</span>
      </section>

      <div className='pricing'>
        <strong>+2.3%</strong>
        <img src={ICON_UP_PRICING} alt='Icon Up Pricing' />
      </div>
    </S.Container>
  )
}
