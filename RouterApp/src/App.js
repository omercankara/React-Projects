//pages
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Faq } from "../src/pages/help/Faq"
import { Contact, ContactAction } from "../src/pages/help/Contact"
import { UserDetails, userDetailsLoader } from "./pages/UserDetails"
import { NotFound } from "./pages/NotFound"

//layout
import { MainLayout } from "./layouts/MainLayout"
import { UsersLayout } from "./layouts/UsersLayout"
import { HelpLayout } from "./layouts/HelpLayout"
import { Users, usersLoader } from "./pages/Users"




const { createBrowserRouter, RouterProvider } = require("react-router-dom")



const router = createBrowserRouter([

  {
    path: '/',
    element: <MainLayout />, //ana root altında her yerde çağır

    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      {
        path: 'help', element: <HelpLayout />,
        children:
          [
            { path: 'contact', element: <Contact />, action: ContactAction },
            { path: 'faq', element: <Faq /> }
          ]
      },
      {
        path: 'users',
        element: <UsersLayout />,
        children: [
          { index: true, element: <Users />, loader: usersLoader }, //index true main sayfası olarak ayarlatır 
          { path: ':userid', element: <UserDetails />, loader: userDetailsLoader }
        ]
      }
    ]

  },
  {
    path: "*",
    element: <NotFound />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App