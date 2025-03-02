import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader";
const HomeHero = lazy(() => import("./homePages/HomeHero"));
const HomeAbout = lazy(() => import("./homePages/HomeAbout"));
const HomeService = lazy(() => import("./homePages/HomeService"));
const HomeContact = lazy(() => import("./homePages/HomeContact"));

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense
        fallback={
          <div className="text-white text-center py-10">
            <Loader />
          </div>
        }
      >
        <HomeHero />
        <HomeAbout />
        <HomeService />
        <HomeContact />
      </Suspense>
    </div>
  );
};

export default Home;
