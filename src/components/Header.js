import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import '../App.css';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Jumbotron className="jumbo bg-transparent">
                <h1 style={{marginTop:200}}>SKILLS CONNECT</h1>
                <p >
                    Skills connect is platform that connect all people with professional skills
                </p>
                <p>
                    <Button variant="primary">Read more</Button>
                </p>
                </Jumbotron>
            </div>
        )
    }
}
export default Header;