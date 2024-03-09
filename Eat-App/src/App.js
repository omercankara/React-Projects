import './App.css';
import Home from "./pages/Home/Home"
import Create from "./pages/Create/Create"
import Details from "./pages/Details/Details"
import Search from "./pages/Search/Search"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/tarifler', element: <Home /> },
      { path: '/create', element: <Create /> },
      { path: '/tarifler/:id', element: <Details /> },
      { path: '/search', element: <Search /> }
    ]
  },

])

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
