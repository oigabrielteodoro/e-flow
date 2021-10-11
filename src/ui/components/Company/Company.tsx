import React, { ElementType } from 'react'

import { ICON_STAR_OUTLINE, ICON_UP_PRICING, LOGO_FACEBOOK } from 'assets'

import * as S from './Company.styled'

type Props = {
  isFavorite?: boolean
  as?: ElementType
}

export function Company({ as, isFavorite = true }: Props) {
  return (
    <S.Container as={as} isPricingUp>
      {isFavorite && (
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
