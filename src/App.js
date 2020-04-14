import React from 'react';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogsContainer';

const App = (props) => {

  return ( 
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/dialogs' 
                  render={() => <DialogsContainer store={props.store} />} />
          <Route path='/profile' 
                  render={() => <Profile store={props.store}  />} />
        </div> 
      </div>
    </BrowserRouter>

  );
}

export default App;