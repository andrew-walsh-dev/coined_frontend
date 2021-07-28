import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import API_BASE_URL from './env';
import $ from 'jquery';
import { store } from 'react-notifications-component';

export default function Register(props) {
    return (
        <>
            <Modal show={true} centered>
                <Modal.Header className="border-0 mb-1" onClick={() => props.setForm('headline')}>
                    <Modal.Title className="m-auto">Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-0">
                    <form id="register-form" className="d-flex flex-column align-items-center" noValidate autoComplete="off">
                        <TextField label="First Name" id="firstName" name="firstName" className="mb-1" />
                        <TextField label="Last Name" id="lastName" name="lastName" className="mb-1" />
                        <TextField label="Email" id="email" name="email" className="mb-1" required />
                        <TextField label="Username" id="username" name="username" className="mb-1" required />
                        <TextField label="Password" id="password" name="password" className="mb-1" type="Password" required />
                        <TextField label="Confirm Password" id="confirmPassword" name="confirmPassword" className="mb-1" type="Password" required />
                    </form>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center border-0 my-3">
                    <Button id="submit" className="" variant="outlined" onClick={() => submitRegister(props.setForm)}>Register</Button>
                    <Button className="" variant="outlined" onClick={() => props.setForm('headline')}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function submitRegister(setForm) {
    $.ajax({
        type: 'POST',
        url: API_BASE_URL + '/users',
        data: {
            'firstName': $('#firstName').val(),
            'lastName': $('#lastName').val(),
            'username': $('#username').val(),
            'email': $('#email').val(),
            'password': $('#password').val(),
            'confirmPassword': $('#confirmPassword').val()
        }
    })
        .then((res) => {
            console.log(res);
            if (res.success) {
                store.addNotification({
                    title: "Registration Complete",
                    message: "Welcome to CryptoCamel!",
                    type: "success",
                    insert: "top",
                    container: "top-center",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
                setForm('login');
            }
            else {
                if (res.reason === 'email') {
                    store.addNotification({
                        title: "Registration Error",
                        message: "That email is taken, please try again with a different one.",
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
                else if (res.reason === 'username') {
                    store.addNotification({
                        title: "Registration Error",
                        message: "That username is taken, please try again with a different one.",
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
                else {
                    store.addNotification({
                        title: "Registration Error",
                        message: "There was a problem with your registration. Please try again.",
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
            }
        })
        .fail((res) => console.log(res))
}