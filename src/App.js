import React ,{Component} from 'react';
import './App.css';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Layout />
      </div>
    )
  }
}
export default App;
