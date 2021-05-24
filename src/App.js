
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="app">
     {/*<h1>Hello</h1>*/}
    
      <Router>
        <Header />
        <Switch>
          {/*Search page */}
          <Route path='/search'>
            <SearchPage />
          </Route>  
          {/*Home Page */}
          <Route path='/'>
            <Home />
          </Route>
       
        </Switch>
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
