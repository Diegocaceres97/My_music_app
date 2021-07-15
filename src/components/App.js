import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from './pages/login/login'
import Main from './pages/main/main'
import Favorite from './pages/favorites/favorites'
import NotFound from './pages/notfound/notfound'
import Header from './organisms/headerSection/header'
import Footer from './organisms/footerSection/footer'

const App = ()=>(

  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/principal" component={Main}/>
      <Route exact path="/favoritos" component={Favorite}/>
      <Route component={()=> (<NotFound />)} />
    </Switch>
    < Footer />
  </Router>

  )


export default App;
