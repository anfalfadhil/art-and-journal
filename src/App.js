import Header from './components/Header'
import './App.css';
import Card from './components/Card';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from 'react-router';
import Journal from './components/Journal';

function App() {
  return (
    <div className="app">
      <Header />
     <Card  />  
    <Route path='/img-journal/:imageid' component={Journal} />
    </div>
  );
}

export default App;
