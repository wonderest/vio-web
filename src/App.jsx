import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'utils/redux/store';
import LandingPage from 'LandingPage/LandingPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={LandingPage} />
      </Router>
    </Provider>
  );
};

export default App;
