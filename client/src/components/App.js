import React from 'react';
import './css/App.css';
import Header from './static/Header';
import Footer from './static/Footer';

const App = (props) => {
    return (
      <div className="App">
        <Header />
        {props.children}
        <Footer />
      </div>
    );
}

export default App;
