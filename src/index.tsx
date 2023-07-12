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
/* other imports */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "contacts",
        element: <ContentContainer />,
      }
    ],
  },
]);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
reportWebVitals();
