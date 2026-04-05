import React from 'react';

import { Routes, Route } from 'react-router-dom';
//we are going to use Routes instead of Switch.

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';
//place that header outside of the Routes

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //to fetch data sign in and sign out
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user });
      createUserProfileDocument(user);

      // console.log(firestore.doc('users/1234567890'));
    });
  }
  

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Routes>
       <Route exact path='/' element={<HomePage />} />
       <Route exact path='/shop' element={<ShopPage />} />
       <Route exact path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
  }
}
// 1.use element instead of component
//2.pass the component as JSX: <HomePage /> 

export default App;  
 