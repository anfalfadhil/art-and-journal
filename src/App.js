import Header from './components/Header'
import './App.css';
import Card from './components/Card';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link } from 'react-router-dom';
import Journal from './components/Journal';

console.log(process.env.REACT_APP_GOOGLE_API_KEY)
console.log(process.env);

function App() {

  return (
    <div className="app">

      <Route path="/" exact component={Header} />
    
      <Route path="/" exact component={Card} />
   
    {/* <Route path='/img-journal/:imageid' component={Journal} /> */}
    <Route path="/img-journal/:imageid" exact>
     <Journal />
   </Route>
  
    </div>
  );
}

export default App;
