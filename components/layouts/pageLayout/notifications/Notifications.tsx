import { Toast } from 'react-bootstrap'
import { MdClose } from 'react-icons/md'

import { useNotificationsContext } from '../../../../common/contexts/NotificationContext'
import { NotificationsWrapper, NotificationSign } from './Notifications.styles'
import { Align } from '../../../align/Align'

const Notifications: React.FC = () => {
  const { notifications, removeNotification } = useNotificationsContext()

  return (
    <NotificationsWrapper>
      {notifications.map(({ message, id, type }) => (
        <Toast onClose={() => removeNotification(id)} key={id}>
          <Toast.Header>
            <Align align='center'>
              <NotificationSign
                type={type}
                onClick={() => removeNotification(id)}
                key={id}
              />
              <strong className='title'>{type}</strong>
            </Align>
            <MdClose size={20} />
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      ))}
    </NotificationsWrapper>
  )
}

export default Notifications
