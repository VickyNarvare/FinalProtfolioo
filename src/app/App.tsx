import { RouterProvider } from 'react-router';
import { router } from '../routes/routes';

export const App = () => {
  return <RouterProvider router={router} />;
};
