import DefaultLayout from "./layouts/DefaultLayout"
import { ProductList } from "./pages/ProductList"
import { HomePage } from "./pages/HomePage"
import { ProductDetails } from "./pages/ProductDetails"
import { BallPage } from "./pages/BallPage"
const { createBrowserRouter, RouterProvider } = require("react-router-dom")
const router = createBrowserRouter(
  [

    {
      path: '/', element: <DefaultLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/ProductList', element: <ProductList /> },
        { path: '/ProductDetails/:id', element: <ProductDetails /> },
        { path: '/BallPage', element: <BallPage /> }
      ]
    }
  ],
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App