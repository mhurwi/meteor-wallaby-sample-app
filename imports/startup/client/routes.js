import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
// import { RecoverPassword } from '../../ui/pages/recover-password';
// import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } onEnter={ requireAuth } />
        <Route name="login" path="/login" component={ Login } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});