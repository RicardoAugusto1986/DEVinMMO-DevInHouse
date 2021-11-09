import React from 'react';
import { Switch,Route,Link } from "react-router-dom";
import Pagelist from './pageList'
import PageNotice from './pageNotice'
import PageDescrition from './pageDescrition'

function Home() {
  return (
    
    <main>
      <Switch>
        <Route path='/pageList' component={Pagelist}/>
        <Route path='/pageDescrition' component={PageDescrition}/>
        <Route path='/pageNotice' component={PageNotice}/>
      </Switch>

      <div>
        <h1>Aqui é a Home</h1>
      </div>
    </main>
    
  );
};

export default Home;
