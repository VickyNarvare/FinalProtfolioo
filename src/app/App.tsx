import { MotionConfig } from 'motion/react';
import { RouterProvider } from 'react-router';
import { router } from '../routes/routes';

export const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  );
};
