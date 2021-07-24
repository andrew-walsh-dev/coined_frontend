import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Register(props) {
    return (
        <>
          <Modal show={true} centered>
            <Modal.Header className="border-0 mb-1" onClick={() => props.setForm('headline')}>
              <Modal.Title className="m-auto">Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-0">
              <form className="d-flex flex-column align-items-center" noValidate autoComplete="off">
                <TextField label="First Name" className="mb-1" />
                <TextField label="Last Name" className="mb-1" />
                <TextField label="Email" className="mb-1" />
                <TextField label="Username" className="mb-1" />
                <TextField label="Password" className="mb-1" type="Password" />
                <TextField label="Confirm Password" className="mb-1" type="Password" />
              </form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center border-0 my-3">
              <Button className="" variant="outlined">Register</Button>
              <Button className="" variant="outlined" onClick={() => props.setForm('headline')}>Close</Button>
            </Modal.Footer>
          </Modal>
        </>
      );   
}