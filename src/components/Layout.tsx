import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import Loader from "./Loader/Loader";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
