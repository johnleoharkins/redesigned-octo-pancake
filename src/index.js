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
import AddMenuItem from "./components/AddMenuItem";
import {RestaurantActions} from "./store/restaurant-slice";
import NewMenu from "./components/Menu/NewMenu";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/restaurant-menu",
                element: <RestaurantMenu />,
                loader: async () => {
                    // const fetchInit = {
                    //     method: "GET",
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //     },
                    //     mode: "cors",
                    //     cache: 'no-cache',
                    //     referrerPolicy: 'no-referrer',
                    // }
                    // const res = await fetch(`http://localhost:5000/restaurant/menu`, fetchInit)
                    // const json = await res.json()
                    // console.log('/restaurant-menu (parent) loader method',json)
                    // // dispatch(RestaurantActions.updateMenuItems(json))
                    // return json
                },
                children: [
                    {
                        path: "/restaurant-menu/add-item",
                        element: <AddMenuItem />
                    },
                    {
                        path: "/restaurant-menu/",
                        element: <NewMenu />,
                        loader: async () => {
                            const fetchInit = {
                                method: "GET",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                mode: "cors",
                                cache: 'no-cache',
                                referrerPolicy: 'no-referrer',
                            }
                            const res = await fetch(`http://localhost:5000/restaurant/menu`, fetchInit)
                            const json = await res.json()
                            console.log(json)
                            // dispatch(RestaurantActions.updateMenuItems(json))
                            return json
                        }
                    }

                ]
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
                    const res = await fetch(`http://localhost:5000/posts`, {'method': "GET"})
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
