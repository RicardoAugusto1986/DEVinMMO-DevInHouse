import React from 'react';
import { Switch,Route,Link } from "react-router-dom";
import Pagelist from './pageList'
import PageNotice from './pageNotice'
import PageDescrition from './pageDescrition'

function Home() {
  return (

    
    
    <main>
      <header>
        <h1>Bem vindo ao site DEVinMMO</h1>
        <h2>Aqui você encontrar as novidades do mundo dos games</h2>
      </header>

      <Switch>
        <Route path='/pageList' component={Pagelist}/>
        <Route path='/pageDescrition' component={PageDescrition}/>
        <Route path='/pageNotice' component={PageNotice}/>
      </Switch>

    </main>
    
  );
};

export default Home;
