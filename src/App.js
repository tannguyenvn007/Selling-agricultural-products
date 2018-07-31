import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import routes from './router';  
class App extends Component {
  
  
  render() {
    return (
      <div>
        <Header/>
        {this.showContent(routes)}
        <Footer/>
      </div>
    );
  }
  showContent = (routes) => {
    var result = '';
    if(routes.length > 0){
      
      result = routes.map((route, index) => {
        return (
        <Route key={index}
                path={route.path}
                exact = {route.exact}
                component = {route.main}
        />)
      });
    }
    
    return <Switch>{result}</Switch>;
    
    
  }
}

export default App;
