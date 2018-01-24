import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";

import store from './store';
import module from './module';
import AppTemplate from './commons/ui/components/AppTemplate';
import AsyncComponent from './AsyncComponent';
import basePath from './commons/utils/basePath';

import "./style/app.css";
import "./style/elements.css";

const register = module(store);
// Async modules
const home = () => register('home', import(/* webpackChunkName: "home" */ './modules/home/index'));
const projects = () => register('projects', import(/* webpackChunkName: "projects" */ './modules/projects/index'));
const contact = () => register('contact', import(/* webpackChunkName: "contact" */ './modules/contact/index'));
const page = () =>register('page',import(/*webpackChunkName: "page"*/ './modules/pages/index'));

render(
  <Provider store={store}>
    <Router>
      <AppTemplate>
        {/* Routes goes here */}
        <Route path={basePath``} exact={true} component={() => <AsyncComponent moduleProvider={home} />} />
        {/* <Route> */}
        {/* <Switch> */}
          <Route path={basePath`projects`} exact={true} component={() => <AsyncComponent moduleProvider={projects} />} />
          <Route path={basePath`projects/pages`} exact={true} component={()=> <AsyncComponent moduleProvider={page} />} />
        {/* </Switch> */}
        {/* </Route> */}
        <Route path={basePath`contact/:contactType?`} component={() => <AsyncComponent moduleProvider={contact} />} />
      </AppTemplate>
    </Router>
   </Provider>,
  document.getElementById("app")
);