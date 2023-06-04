import { lazy } from "react";

const Home = lazy(() => import("./components/Home/index"));
const Navbar = lazy(() => import("./components/Navbar/index"));
const Contact = lazy(() => import("./components/Contact/index"));
const Appointment = lazy(() => import("./components/Appointment/index"));

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
    {
      path: '/contact',
      component: <Contact />,
      description: "Contact Page",
    },
    {
      path: '/Appointment',
      component: <Appointment />,
      description: "Appointment",
    },
];

export default routes;