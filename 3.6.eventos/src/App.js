import React from 'react';
import './App.css';
import OnionHater from './components/OnionHater';




class App extends React.Component {
    constructor(props) {
    super(props);
      this.value = '';
      this.onChangeListener =  this.onChangeListener.bind(this);
  }

  onChangeListener (event) {
    const value = event.target.value;
    this.input = value;
    console.log(this.input);
    if (this.input.indexOf ('cebolla') >= 0 ) {
      alert('ODIO LA CEBOLLA');
    }
  }
  render() {
    
    
    
    return (
      <div className="App">
        <OnionHater onChangeListener ={this.onChangeListener}></OnionHater>
      </div>
    );
  }
}

export default App;
