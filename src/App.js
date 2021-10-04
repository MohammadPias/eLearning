import logo from './logo.svg';
import './App.css';
import Header from '../src/component/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Footer from './component/Footer/Footer';
import NotFound from './component/NotFound/NotFound'
import Catagories from './component/Catagories/Catagories';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/catagory">
            <Catagories></Catagories>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
