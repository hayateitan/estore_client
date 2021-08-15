import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from './components/Container';
import Account from './components/Account';
import Panier from './components/Panier';
import Search from './components/Search';
import NousContacter from './components/NousContacter';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import QuisommeNous from './components/QuisommeNous';
import Products from './components/Products';
import { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


export const BasketContext = createContext()

const stripePromise = loadStripe('pk_test_51J7zwCDsZuAa1t1GFUcRsaK7VQYug1ccevzWRIDnv07UNARMJhKbXIfpAkqpsvLabAZd0frEQssklYZ6K4pTB3QG00F5WKMnh6');

function App() {
  const [basket, dispatch] = useImmerReducer((draft, action) => {
    switch (action.type) {
      case "init":
        action.basket.map(e => draft.push({ ...e }))
        break;
      case "add":
        const i = draft.findIndex(a => a.id === action.article.id)
        if (i > -1) {
          let art = draft[i]
          art.qte++
        }
        else {
          draft.push({ ...action.article, qte: 1 })
        }
        break;
      case "remove":
        const j = draft.findIndex(a => a.id === action.article.id)
        if (j > -1) {
          let art = draft[j]
          if (art.qte > 1) {
            art.qte--
          }
          else {
            draft.splice(j, 1)
          }
        }
        break;
      case "update":
        break;
      case "del":
        const index = draft.findIndex(i => i.id === action.id)
        draft.splice(index, 1)
        break;
      default:
        break;
    }
    sessionStorage.setItem("basket", JSON.stringify(draft))
  }, [])

  useEffect(() => {
    const localBasket = sessionStorage.getItem("basket")
    if (localBasket !== null && localBasket !== undefined) {
      const initialBasket = JSON.parse(localBasket)
      dispatch({ type: "init", basket: initialBasket })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <BasketContext.Provider value={{ basket: basket, dispatch: dispatch }}>
        <Elements stripe={stripePromise}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/Kith" component={() => <Container><Products id="4" /></Container>} />
              <Route exact path="/KawsXuniqlo" component={() => <Container><Products id="3" /></Container>} />
              <Route exact path="/Sneakers" component={() => <Container><Products id="1" /></Container>} />
              <Route exact path="/Account" component={() => <Container><Account /></Container>} />
           
              <Route exact path="/Home" component={() => <Container><Home /></Container>} />
              <Route exact path="/Decouvrire" component={() => <Container><Products id="2" /></Container>} />
              <Route exact path="/TravisScott" component={() => <Container><Products id="5" /></Container>} />
              <Route exact path="/Search" component={() => <Container><Search /></Container>} />
              <Route exact path="/Contacter" component={() => <Container><NousContacter /></Container>} />
              <Route exact path="/QuisommeNous" component={() => <Container><QuisommeNous /></Container>} />
              <Route exact path="/panier" component={() => <Container>< Panier/></Container>} />

            </Switch>
          </Router>
        </Elements>
      </BasketContext.Provider>
    </div>
  );
}

export default App;
