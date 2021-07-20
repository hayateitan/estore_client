import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Kith from './components/Kith'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './components/Container';
import Sneakers from './components/Sneakers';
import Streetwear from './components/Streetwear';
import Account from './components/Account';
import Panier from './components/Panier';
import Search from './components/Search';
import NousContacter from './components/NousContacter';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import App1 from './components/App1';
import KawsXuniqlo from './components/KawsXuniqlo';
import TravisScott from './components/TravisScott';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/" component={Login} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Kith" component={() => <Container><Kith /></Container>} />
          <Route exact path="/KawsXuniqlo" component={() => <Container><KawsXuniqlo /></Container>} />
          <Route exact path="/Sneakers" component={() => <Container><Sneakers /></Container>} />
          <Route exact path="/Account" component={() => <Container><Account /></Container>} />
          <Route exact path="/Panier" component={() => <Container><Panier /></Container>} />
          <Route exact path="/Home" component={() => <Container><Home /></Container>} />
          <Route exact path="/Decouvrire" component={() => <Container><Streetwear /></Container>} />
          <Route exact path="/TravisScott" component={() => <Container><TravisScott/></Container>} />
          <Route exact path="/Search" component={() => <Container><Search /></Container>} />
          <Route exact path="/Contacter" component={() => <Container><NousContacter /></Container>} />
          <Route exact path="/App1" component={() => <Container><App1 /></Container>} />



        </Switch>
      </Router>
    </div>
  );
}


export default App;
