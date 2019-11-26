import React from 'react';
// import componenets
import HeaderBar from './components/header/header'
import DispayFriends from './components/displayFriends/displayFriends'
import store from './store/store';
import {Provider} from 'react-redux';

class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
      <div className="App">
       <HeaderBar/>
       <DispayFriends/>
      </div>
      </Provider>
    );
  }
}

export default App;
