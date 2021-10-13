import React, { useState } from 'react'

import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { Company, Modal } from 'ui'
import { ApplicationState, removeFavoriteCompany } from 'client'
import { ICON_ALERT, ICON_CARET_DOWN, ICON_STAR, ICON_TRASH } from 'assets'

import * as S from './FavoriteCompanies.styled'

export function FavoriteCompanies() {
  const dispatch = useDispatch()

  const favorites = useSelector<ApplicationState, string[]>(
    (state) => state.companies.favorites,
  )

  const [selectedCompany, setSelectedCompany] = useState<string>()

  function handleClose() {
    setSelectedCompany(undefined)
  }

  function handleRemoveFavorite() {
    if (!selectedCompany) return

    dispatch(removeFavoriteCompany(selectedCompany))

    toast.success('Empresa removida dos favoritos!')

    handleClose()
  }

  return (
    <S.Container>
      <header>
        <img
          className='avatar'
          src='https://github.com/oigabrielteodoro.png'
          alt='Gabriel Teodoro'
        />
        <span>José Gabriel Cavalcante Teodoro</span>

        <button>
          <img src={ICON_CARET_DOWN} alt='Icon Caret Down' />
        </button>
      </header>

      <S.CompaniesArea>
        <h1>
          <img src={ICON_STAR} alt='Icon Star' />
          Empresas favoritas
        </h1>

        <ul>
          {favorites.map((company) => (
            <S.CompanyItem key={company}>
              <Company disableFavorite symbol={company} />
              <button
                onClick={() => setSelectedCompany(company)}
                aria-label='delete button'
              >
                <img src={ICON_TRASH} alt='Icon Trash' />
              </button>
            </S.CompanyItem>
          ))}
        </ul>
      </S.CompaniesArea>

      <Modal isOpen={!!selectedCompany} onClose={handleClose}>
        <S.ModalBody>
          <img src={ICON_ALERT} alt='Icon Alert' />
          <h1>Tem certeza que deseja excluir essa empresa?</h1>
          <p>
            Você tem certeza que deseja excluir a empresa{' '}
            <strong>{selectedCompany}</strong> de suas empresas favoritas?
          </p>
          <button className='confirm' onClick={handleRemoveFavorite}>
            Sim, excluir!
          </button>
          <button className='cancel' onClick={handleClose}>
            Cancelar
          </button>
        </S.ModalBody>
      </Modal>
    </S.Container>
  )
}
