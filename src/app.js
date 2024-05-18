import React, {lazy, Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
//import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
    const [userName, setuserName] = useState();

    useEffect(() => {
        //Make a API call and send Username and Password
        const data = {
            name: "Prem Singh",
        };
        setuserName(data.name);
    }, []);

    //Authentication code
    return (
        <Provider store={appStore}>
        <UserContext.Provider value = {{loggedInUser: userName, setuserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />,

    },
   
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

//console.log(<Header />);
root.render(<RouterProvider router={appRouter} />);



