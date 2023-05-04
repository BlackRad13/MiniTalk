export interface MessageFunction {
  (message: string): void
}

export interface HistoryFunction {
  (message: string, from: 'bot' | 'user'): void
}

export interface ArchivedMessage {
  message: string,
  from: 'user' | 'bot',
}

export type SnackbarStatus = 'success' | 'error'

export interface SnackbarDTO {
  open: boolean
  message: string
  status: SnackbarStatus
}