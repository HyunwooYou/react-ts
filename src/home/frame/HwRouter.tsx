import styled from 'styled-components';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {
  ExBasicSyntax,
  ExLifeCycle,
  ExProps,
  ExReduxCounter,
  ExReduxTodo,
  ExState,
  ExTodoList,
  Welcome,
} from 'src/home/pages/react';

export const HwRouter = () => {
  return (
    <Wrapper>
      <HashRouter>
        <Route exact path="/" component={Welcome} />
        <Route path="/exState" component={ExState} />
        <Route path="/exProps" component={ExProps} />
        <Route path="/exBasicSyntax" component={ExBasicSyntax} />
        <Route path="/exLifeCycle" component={ExLifeCycle} />
        <Route path="/exReduxTodo" component={ExReduxTodo} />
        <Route path="/exTodoList" component={ExTodoList} />
        <Route path="/exReduxCounter" component={ExReduxCounter} />
      </HashRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: rgb(43, 43, 43);

  padding: 0 30px;
  overflow: auto;
`;
