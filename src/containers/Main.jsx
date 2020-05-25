import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import FetchCategory from '../containers/FetchCategory'
import FetchNews from '../containers/FetchNews'

const Main = () => {
    return (
        <Switch>
          <Route exact path="/" component={FetchNews}/>
          <Route exact path="/category/:id" component={FetchCategory}/>
          {/* <Route exact path="/category/:id" component={FetchCategory}/>
          <Route exact path="/category/:id" component={FetchCategory}/>
          <Route exact path="/category/:id" component={FetchCategory}/>
          <Route exact path="/category/:id" component={FetchCategory}/> */}
          
 
          {/* <Route exact path="/search/:searchValue" component={Search}/> */}
          <Redirect to="/" />
        </Switch>
    );
  }

  export default Main;