import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

const HomePage = lazy(() => import("pages/Home"));
const SchedulePage = lazy(() => import("pages/Schedule"));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/schedule/:postId" component={SchedulePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

const NotFound = () => <h3>Sorry, you are in the wrong place.</h3>;

export default Router;
