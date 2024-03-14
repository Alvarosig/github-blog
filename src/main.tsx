import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ContentProvider } from "./contexts/ContentContext.tsx"
import { App } from "./App.tsx"
import { Blog } from "./pages/Blog/index.tsx"
import { Post } from "./pages/Post/index.tsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Blog />,
      },
      {
        path: "/post/:issueNumber",
        element: <Post />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContentProvider>
      <RouterProvider router={router} />
    </ContentProvider>
  </React.StrictMode>
)
