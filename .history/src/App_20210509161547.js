import React from 'react';
import './styles.scss';
import {Switch,Route} from 'react-router-dom';
import List from './components/List/List';

function App() {
  return (
    <Switch>
      <Route path='/list' component={List}/>
    </Switch>
  );
}

export default App;
