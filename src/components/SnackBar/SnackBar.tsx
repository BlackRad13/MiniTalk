import {memo} from 'react'
import {Snackbar, Alert, styled, alertClasses} from '@mui/material'
import {SnackbarDTO} from "../../models/ChatDTO";

const StyledSnackbar = styled(Snackbar, {
  shouldForwardProp: (prop) => prop !== 'status',
})<Pick<SnackbarDTO, 'status'>>(({status}) => ({
  marginLeft: 1,
  borderRadius: 10,
  color: status == 'error' ? 'red' : 'green',
  [`& .${alertClasses.root}`]: {
    border: `1px solid`,
    borderRadius: 10,
    backgroundColor: 'red',
    fontSize: 16,
    color: 'white',
    boxShadow: '0px 4px 4px #00000040',
  },
}))

interface Props extends SnackbarDTO {
  autoHideDuration: number
  onClose: () => void
}

export const SnackBar = memo(({open, autoHideDuration, message, onClose, status}: Props) => {
  return (
    <StyledSnackbar status={status} open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
      <Alert icon={false}>{message}</Alert>
    </StyledSnackbar>
  )
})

SnackBar.displayName = 'SnackBar'
