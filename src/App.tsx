import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { lazy } from "react";
import Loader from "./components/Loader/Loader.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import Layout from "./components/Layout.tsx";
import SignIn from "./pages/SignIn/SignIn.tsx";
import Portfolio from "./pages/Portfolio/Portfolio.tsx";

// const PageNotFound = lazy(
//   () => import("./pages/PageNotFound/PageNotFound.tsx")
// );

const PageNotFound = lazy(
  () => import("./pages/PageNotFound/PageNotFound.tsx")
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
