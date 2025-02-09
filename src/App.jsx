import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Landing from './pages/landing';
import Gallery from './pages/coffeeBar';
import Mexico from './pages/mexico';
import Bali from './pages/indonesia'
import London from './pages/england'
import Korcula from './pages/croatia';
import Wedding from './pages/wedding';





const router = createBrowserRouter( [ 

  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />
  },

  {
    path: '/coffeeBar',
    element: <Gallery />,
    errorElement: <Error />
  }
  ,

  {
    path: '/mexico',
    element: <Mexico />,
    errorElement: <Error />
  }
  ,

  {
    path: '/bali',
    element: <Bali />,
    errorElement: <Error />
  }
  ,

  {
    path: '/london',
    element: <London />,
    errorElement: <Error />
  }
  ,
  {
    path: '/korcula',
    element: <Korcula />,
    errorElement: <Error />
  }
  ,
  {
    path: '/wedding',
    element: <Wedding />,
    errorElement: <Error />
  }


]);




function App() {
  return (
  <>


  <RouterProvider router={ router } />



   </>
  )
};

export default App;
