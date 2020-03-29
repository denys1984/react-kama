import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

const App = (props) => {

  return ( 
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={() => <Dialogs store={props.store} />} />
          <Route path='/profile' render={() => <Profile postData={props.state.profilePage}
                                                        dispatch={props.dispatch}  />} />
        </div> 
      </div>
    </BrowserRouter>

  );
}

export default App;