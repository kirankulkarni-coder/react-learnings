import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App.jsx";
import ListPosts, { getInitialPosts } from "./components/ListPosts.jsx";
import CreatePost, { handleOnSubmit } from "./components/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ListPosts />,
        loader: getInitialPosts,
      },
      {
        path: "/post",
        element: <CreatePost />,
        action: handleOnSubmit,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
