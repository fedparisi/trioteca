import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "@routes/routes";
import "@scss/components/App.scss";

const router = createBrowserRouter(routes);

const App = () => <RouterProvider router={router} />;

export default App;


