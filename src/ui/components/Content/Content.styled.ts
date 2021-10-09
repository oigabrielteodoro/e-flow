import styled from 'styled-components'
import { theme } from 'ui/styles'

export const Wrapper = styled.div`
  background: ${theme.colors.gray[50]};
  border-radius: 2.4rem 0 0 0;
  padding: 3.2rem 2rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 2.4rem;
      height: 2.8rem;
    }

    h1 {
      margin-left: 1.1rem;
      font-size: 2.4rem;
      font-weight: 600;
    }
  }
`

export const Container = styled.main`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
`

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};

  margin-right: auto;

  input {
    border: 0;
    height: 4rem;
    background: transparent;
    border-radius: 0.8rem 0 0 0.8rem;
    border: 0.1rem solid ${theme.colors.gray[100]};
    border-right-color: transparent;
    padding: 0 1.6rem;

    &::placeholder {
      color: ${theme.colors.gray[300]};
    }
  }

  button {
    border: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 0.8rem;
    background: ${theme.colors.blue[500]};
    color: ${theme.colors.white};
    margin-left: -0.8rem;
  }
`

export const AnalyticsArea = styled.section`
  margin-top: 2.4rem;
  padding: 3rem 2.3rem;
  border-radius: 0.8rem;
  background: ${theme.colors.white};
  max-width: 74.8rem;
`

export const AnalyticsAssetArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AssetInfo = styled.div`
  display: flex;
  align-items: center;

  fieldset {
    border: 0;
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

export const AssetPricing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  img {
    margin-right: 0.8rem;
  }

  span {
    margin-top: 0.8rem;
    color: ${theme.colors.red[500]};
    font-weight: 500;
  }
`
