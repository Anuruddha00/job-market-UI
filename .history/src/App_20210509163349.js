import React from 'react';
import {Switch,Route} from 'react-router-dom';
import List from './components/List/List';
import JobMarket from './containers/JobMarket';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={JobMarket}/>
      <Route path='/List' component={List}/>
    </Switch>
  );
}
export default App;
