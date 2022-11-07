import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RestaurantMenu from "./containers/RestaurantMenu";
import UserAccount from "./containers/UserAccount";
import {Provider} from "react-redux";
import store from "./store";
import Writings from "./containers/Writings";
import Menu from "./Menu/Menu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/restaurant-menu",
                element: <RestaurantMenu />
            },
            {
                path: "/restaurant-menu-two",
                element: <Menu />
            },
            {
                path: "/u/:username",
                element: <UserAccount />
            },
            {
                path: "/writings",
                element: <Writings />,
                loader: async () => {
                    const res = await fetch(`http://localhost:5000/posts`)
                    return res.json()
                }
            }
        ]
    }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
