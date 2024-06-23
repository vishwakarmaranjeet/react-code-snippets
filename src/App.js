import React from "react";
// import * as Sentry from '@sentry/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import Home from "Views/Home";
import Dashboard from "Views/Dashboard";
import PageNotFound from "Views/PageNotFound";
import Login from "Views/Login";
import List from "Views/List";

// const history = createBrowserHistory();

// const routes = [{path: "localhost:3000"}, {path:"/dashboard"}, {path: "/login"}, {path:"/list"}];

// Sentry.init({
//   dsn: "https://e15b694d2baff913df1bb68cc153eb1f@o4505981122314240.ingest.sentry.io/4505981122379776",
//   autoSessionTracking: true,
//   integrations: [
//     new Sentry.BrowserTracing({
//       routingInstrumentation: Sentry.reactRouterV5Instrumentation(history, routes),
//     }),
//   ],
//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

const App = () => {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/list" element={<List />} />
            </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
