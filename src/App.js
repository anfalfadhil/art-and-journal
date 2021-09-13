import Header from './components/Header'
import './App.css';
import Card from './components/Card';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Linke } from 'react-router';
import Journal from './components/Journal';

function App() {
  return (
    <div className="app">
      <Header />
     <Card  />  
     <Route path='/stocks/:symbol' exact render={(routerProps) => <Journal stock={routerProps.location.state.Journal}/>}
      /> 
    <Route path='/img-journal/:id' component={Journal} />
    </div>
  );
}

export default App;
