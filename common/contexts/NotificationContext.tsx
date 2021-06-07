import { createContext, useState, useContext } from 'react'

type MessageType = 'success' | 'error' | 'warning'

export interface Notification {
  message: string
  id: string
  type: MessageType
}

interface INotificationsContext {
  notifications: Notification[]
  addNotification: (notification: {
    message: string
    type: MessageType
  }) => void
  removeNotification: (id: string) => void
}

const initialValue = {
  notifications: [],
  addNotification: null,
  removeNotification: null,
}

export const NotificationsContext =
  createContext<INotificationsContext>(initialValue)

export const NotificationsContextProvider: React.FC = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = (notification: Notification) =>
    setNotifications(currNotifications => [
      ...currNotifications,
      { ...notification, id: Math.random().toString() },
    ])

  const removeNotification = (id: string) =>
    setNotifications(currNotifications =>
      currNotifications.filter(notification => notification.id !== id)
    )

  return (
    <NotificationsContext.Provider
      value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export const useNotificationsContext = () => useContext(NotificationsContext)
