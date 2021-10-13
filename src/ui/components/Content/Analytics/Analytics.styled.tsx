import styled, { css } from 'styled-components'
import { theme } from 'ui/styles'
import { Container as ShimmerEffectContainer } from 'ui/components/ShimmerEffect/ShimmerEffect.styled'

type AssetPricingProps = {
  isUp?: boolean
}

export const Container = styled.section`
  margin-top: 2.4rem;
  padding: 2.3rem;
  background: ${theme.colors.white};
  border-radius: ${theme.radius.card};
  box-shadow: 0 0.5rem 1.2rem rgba(222, 222, 231, 0.4);
`

export const AnalyticsAssetArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${ShimmerEffectContainer} + ${ShimmerEffectContainer} {
    margin-top: 0.8rem;
  }
`

export const AssetInfo = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
  }

  section {
    display: flex;
    margin-left: 1.2rem;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-weight: 500;
    }

    span {
      color: ${theme.colors.gray[300]};
      font-size: 1.4rem;
    }
  }
`

export const AssetPricing = styled.div<AssetPricingProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    margin-right: 0.8rem;
  }

  strong {
    font-weight: 600;
  }

  span {
    margin-top: 0.8rem;
    color: ${theme.colors.red[500]};
    font-weight: 500;

    ${({ isUp }) =>
      isUp &&
      css`
        color: ${theme.colors.green[500]};
      `}
  }
`
