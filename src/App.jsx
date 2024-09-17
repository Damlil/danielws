import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Landing from './pages/landing';
import Gallery from './pages/wedding';
import Mexico from './pages/mexico';
import Bali from './pages/indonesia'
import London from './pages/england'





const router = createBrowserRouter( [ 

  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />
  },

  {
    path: '/wedding',
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


]);




function App() {
  return (
  <>


  <RouterProvider router={ router } />



   </>
  )
};

export default App;
