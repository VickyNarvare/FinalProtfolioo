import { HomePage } from "../features/home/page/HomePage";
import Navbar from "../shared/components/Navbar/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <HomePage />
    </>
  );
};
