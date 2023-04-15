import { lazy } from "react";

const Home = lazy(() => import("./components/Home/index"));
const Navbar = lazy(() => import("./components/Navbar/index"));

const routes = [
    {
      path: '/',
      component: <Home />,
      description: "Home",
    },
    {
      path: '/navbar',
      component: <Navbar />,
      description: "Navbar",
    },
];

export default routes;