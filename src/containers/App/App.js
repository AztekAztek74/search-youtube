import React, { Fragment } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Navigation from '../../components/Navigation/Navigation';
import { connect } from 'react-redux';
import { entryCheck } from '../../actions/SessionActions';
import { activeQuery, disabledSearch } from '../../actions/QueryActions';

class App extends React.Component{ 

  out = () =>{
    this.props.entryCheck()
    this.props.activeQuery('')
    this.props.disabledSearch()
  }

  render(){
    const { children, entry } = this.props;
    if (entry){return (
      <Fragment>
        <Navigation out={this.out} />
          {children}
      </Fragment>)}
    else{
      return(<LoginForm />)}
    }
}

export default connect (state => 
  ({
      entry: state.entry,
      query: state.query,
  }), { entryCheck, activeQuery, disabledSearch })(App)
