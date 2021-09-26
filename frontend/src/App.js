import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Switch>
              <Route exact path='/login' component={LoginScreen} />
              <Route exact path='/placeorder' component={PlaceOrderScreen} />
              <Route exact path='/shipping' component={ShippingScreen} />
              <Route exact path='/payment' component={PaymentScreen} />
              <Route exact path='/profile' component={ProfileScreen} />
              <Route exact path='/register' component={RegisterScreen} />
              <Route exact path='/product/:id' component={ProductScreen} />
              <Route exact path='/cart/:id?' component={CartScreen} />
              <Route exact path='/' component={HomeScreen} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
