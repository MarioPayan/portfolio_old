import React, {useState} from 'react'
import {Dialog, DialogTitle, DialogContentText, DialogActions, Button, DialogContent} from '@mui/material'
import Context from './context'
import {initVisited, setVisited} from '../utils/cookies'

const UnderConstruction: any = () => {
  const [openModal, setOpenModal] = useState(!initVisited())

  const visited = () => {
    setOpenModal(false)
    setVisited(true)
  }

  return (
    <Context.Consumer>
      {({t}) => (
        <>
          <Dialog
            open={openModal}
            onClose={() => {
              visited()
            }}>
            <DialogTitle>{t('misc.label.underConstruction')}</DialogTitle>
            <DialogContent>
              <DialogContentText>{t('misc.text.underConstruction')}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color='secondary' variant='contained' onClick={visited}>
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </Context.Consumer>
  )
}

export default UnderConstruction
