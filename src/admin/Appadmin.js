import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Container } from './Containeradmin';
import './admin.css'
import User from './User';
import ProductsAdmin from './ProductsAdmin';
import AddProduct from './AddProduct';

function Appadmin() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/Streetwearadmin" component={() => <Container><ProductsAdmin id="2" /></Container>} />
          <Route exact path="/User" component={() => <Container><User /></Container>} />
          <Route exact path="/StreetwearTravisscott" component={() => <Container><ProductsAdmin id="5" /></Container>} />
          <Route exact path="/StreetwearKith" component={() => <Container><ProductsAdmin id="4" /></Container>} />
          <Route exact path="/StreetwearKaws" component={() => <Container><ProductsAdmin id="3" /></Container>} />
          <Route exact path="/SneakersAdmin" component={() => <Container><ProductsAdmin id="1" /></Container>} />
          <Route exact path="/AddSneakers" component={() => <Container><AddProduct /></Container>} />
          <Route exact path="/Addtravisscott" component={() => <Container><AddProduct /></Container>} />
          <Route exact path="/Addstreetwear" component={() => <Container><AddProduct /></Container>} />
          <Route exact path="/AddKith" component={() => <Container><AddProduct /></Container>} />
          <Route exact path="/AddKaws" component={() => <Container><AddProduct /></Container>} />
        </Switch>
        
      </Router>
    </div>
  );
}


export default Appadmin;
