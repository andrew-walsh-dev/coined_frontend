import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Login(props) {

  return (
    <>
      <Modal show={true} centered>
        <Modal.Header className="border-0 mb-1" onClick={() => props.setForm('headline')}>
          <Modal.Title className="m-auto">Member Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <form className="d-flex flex-column align-items-center" noValidate autoComplete="off">
            <TextField id="standard-basic" label="Username" className="mb-1" />
            <TextField id="standard-basic" label="Password" className="mb-1" type="Password" />
          </form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center border-0 my-3">
          <Button className="" variant="outlined" onClick={() => props.setForm('login')}>Login</Button>
          <Button className="" variant="outlined" onClick={() => props.setForm('headline')}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}