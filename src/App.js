import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EnterPhrase from './components/Game/EnterPhrase';
import Hangman from './components/Game/Hangman';

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={EnterPhrase} />
          <Route path="/game" component={Hangman} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
