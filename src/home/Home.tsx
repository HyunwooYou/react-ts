import React from 'react';
import './Home.scss';
import {HashRouter, Route} from 'react-router-dom';
import {HwFooter, HwHeader, HwMenu} from './frame/Frame';
import {
  Welcome,
  ExState,
  ExProps,
  ExTodoList,
  ExRedux
} from './pages/Pages';

const Home: React.FC = () => {
  return (
      <div className="home">
        <HwHeader/>

        <HwMenu/>

        <div className="router">
          <HashRouter>
            <Route exact path="/" component={Welcome}/>
            <Route path="/exState" component={ExState}/>
            <Route path="/exProps" component={ExProps}/>
            <Route path="/exTodoList" component={ExTodoList}/>
            <Route path="/exRedux" component={ExRedux}/>
          </HashRouter>
        </div>

        <HwFooter/>
      </div>
  );
};

export default Home;

