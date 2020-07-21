import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EnterPhrase from './components/Game/EnterPhrase';

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={EnterPhrase} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
