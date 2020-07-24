import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import TextField from '@material-ui/core/TextField';
import '../App.css';
import logo from '../assets/logo.svg';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

    root: {
        '& > * .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },

    }
  }));

  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
          {children}
        </animated.div>
      );
    });
    
    Fade.propTypes = {
      children: PropTypes.element,
      in: PropTypes.bool.isRequired,
      onEnter: PropTypes.func,
      onExited: PropTypes.func,
    };


    
 
export default function NavigationBar(){
        
        const classes = useStyles();
        const [open, setOpen] = React.useState(false);
        

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);


        
  };
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                         />{' '}
                         {/* SKILLS CONNECT */}
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                    <Button variant="outline-success" id="login" onClick={handleOpen}>Login</Button>
                    <Button variant="outline-success" id="register">Register</Button>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
                    <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="spring-modal-title"> Login Here</h2>
                        {/* <p id="spring-modal-description">react-spring animates me.</p> */}
                        <form className={classes.root} noValidate autoComplete="off">
                          
                            <div>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="outlined"
                                />
                            </div>
                            <div>
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                autoComplete="current-email"
                                variant="outlined"
                                />
                            </div>
                            <Button variant="contained" color="primary">
                                Login
                            </Button>
                        </form>
                    </div>
                    </Fade>
                </Modal> 
            </div>
        )
    }