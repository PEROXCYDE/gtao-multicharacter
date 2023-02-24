import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./global.css";

import { Root } from "./components/Root";

import { Select } from "./components/Select";
import { Create } from "./components/Create";
import { Delete } from "./components/Delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "select",
        element: <Select />,
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "delete",
        element: <Delete />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}