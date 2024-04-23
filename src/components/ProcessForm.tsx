import { Modal } from "react-bootstrap";

const ProcessForm = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (a: boolean) => void;
}) => {
  const onClose = () => setShow(false);
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Process Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>Process Body</Modal.Body>
      <Modal.Footer>Process Footer</Modal.Footer>
    </Modal>
  );
};

export default ProcessForm;
