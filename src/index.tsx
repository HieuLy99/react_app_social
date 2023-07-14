import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import ContentContainer from './routes/ContentContainer';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, Store } from "redux";
import reducer from './store/reducer';
import Login from './component/Login';
import Draft from './component/Draft';
/* other imports */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});
const store: Store<any, any> & {
  dispatch: any
} = createStore(reducer, applyMiddleware(thunk))
const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login></Login>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/*",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "new-feed",
        element: <ContentContainer />,
      },
      {
        path: "draft-post",
        element: <Draft />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
reportWebVitals();
