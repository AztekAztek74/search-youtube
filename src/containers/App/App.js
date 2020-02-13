import React, { Fragment } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import Navigation from '../../components/Navigation/Navigation';
import { connect } from 'react-redux';
import { entryCheck } from '../../actions/SessionActions';
import { activeQuery, disabledSearch, currentTab } from '../../actions/QueryActions';

class App extends React.Component{ 

  out = () =>{
    this.props.entryCheck()
    this.props.activeQuery('')
    this.props.disabledSearch()
    this.props.currentTab('search')
  }

  render(){
    const { children, entry, activeTab, currentTab } = this.props;
    if (entry){return (
      <Fragment>
        <Navigation out={this.out} activeTab={activeTab} currentTab={currentTab} />
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
      activeTab: state.activeTab
  }), { entryCheck, activeQuery, disabledSearch, currentTab })(App)
