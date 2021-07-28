import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import $ from 'jquery';
import API_BASE_URL from './env';
import { store } from 'react-notifications-component';

export default function Login(props) {

  return (
    <>
      <Modal show={true} centered>
        <Modal.Header className="border-0 mb-1" onClick={() => props.setForm('headline')}>
          <Modal.Title className="m-auto">Member Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <form className="d-flex flex-column align-items-center" noValidate autoComplete="off">
            <TextField name="username" id="username" label="Username" className="mb-1" />
            <TextField name="password" id="password" label="Password" className="mb-1" type="Password" />
          </form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center border-0 my-3">
          <Button className="" variant="outlined" onClick={submitLogin}>Login</Button>
          <Button className="" variant="outlined" onClick={() => props.setForm('headline')}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function submitLogin() {
  $.ajax({
    type: 'POST',
    url: API_BASE_URL + '/login',
    data: {
      'username': $('#username').val(),
      'password': $('#password').val()
    }
  })
  .then((res) => {
    if (res.success) {
      let session = window.sessionStorage;
      session.setItem('userInfo', JSON.stringify(res.user));
    }
    else {
      store.addNotification({
        title: "Attempt Failed",
        message: "The username or password are incorrect.",
        type: "danger",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
    }
  })
}