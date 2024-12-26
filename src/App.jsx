import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./routes/layout";
import DashboardPage from "./routes/dashboard/page";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
            index: true,
            element: <DashboardPage/>,
        },
        {
          path: "economydigital", 
          element: <h1 className="title">Economy Digital</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;