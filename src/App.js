import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import routes from "./routes";
import './App.css';

function App() {
  return (
    <BrowserRouter >
						<Routes>
							{routes.map((route, index) => {debugger;
              return (
								<Route key={index} exact path={route.path} element={route.component} />
							)})}
						</Routes>
					</BrowserRouter>
  );
}

export default App;
