import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import EnterPhrase from './components/Game/EnterPhrase';
import Hangman from './components/Game/Hangman';

function App() {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={EnterPhrase} />
          <Route path="/game" component={Hangman} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
