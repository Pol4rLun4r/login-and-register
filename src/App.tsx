// config router
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

//public routes
import Login from "./routes/public/Login";
import Register from "./routes/public/Register";
import Unauthorized from "./routes/public/Unauthorized";

// protect routes
import Root from "./routes/private/Root";
import Home from "./routes/private/Home";
import Admin from "./routes/private/Admin";
import User from "./routes/private/User";

// errors
import NotFound from "./routes/others/NotFound";

// react query
import { QueryClient, QueryClientProvider } from "react-query";

import PrivateRoute from "./routes/others/PrivateRoute";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* public routes */}
        <Route
          path="/login"
          element={<Login />}

        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

        {/* private routes for user  */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/"
            element={<Root />}
            errorElement={<NotFound />}
          >
            <Route
              index={true}
              element={<Home />}
            />
            <Route
              path="user"
              element={<User />}
            />

            {/* private routes for admin */}
            <Route element={<PrivateRoute allowedRole={["ADMIN"]} />}>
              <Route
                path="/admin"
                element={<Admin />}
              />
            </Route>
          </Route>
        </Route>

        {/* catch errors */}
        <Route
          path="/*"
          element={<NotFound/>}
        />
      </>
    )
  )

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
};

export default App