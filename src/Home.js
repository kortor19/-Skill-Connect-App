import React, { Component } from 'react'
import NavigationBar from './components/NavigationBar'
import Header from './components/Header'

 class Home extends Component {
    render() {
        return (
            
            <React.Fragment>
                <NavigationBar />
                <Header />
            </React.Fragment>
        )
    }
}
export default Home;