import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Home  from './Home';
import { Blog } from './Blog';
import { Contact } from './Contact';
import{ EmailVerification} from './EmailVerification';
import{ NoMatch} from './NoMatch';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route  path ="/contact" component={Contact} />
            <Route  path ="/blog" component={Blog} />
            <Route  path ="/verification" component={EmailVerification} />
            <Route   component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default App;