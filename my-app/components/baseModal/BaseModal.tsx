import { Modal } from 'react-bootstrap';

import BaseButton from '../baseButton/BaseButton';

interface Props {
  show: boolean;
  onHide: () => void;
}

const BaseModal = (props: Props) => {
  return (
    <Modal centered {...props}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>Modal Content</p>
      </Modal.Body>
      <Modal.Footer>
        <BaseButton text={'Close'} onClick={props.onHide}>
          Close
        </BaseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default BaseModal;
