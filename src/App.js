import ParentReactive from './reactive/parent';
import Login from './login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/reactive',
    element: <ParentReactive />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
