export interface SendMessage {
  (message: string): void
}

export interface ArchivedMessage {
  message: string,
  from: 'user' | 'bot',
}