import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import routes from "./routes";
import './App.scss';

function App() {
  return (
    <BrowserRouter >
						<Routes>
							{routes.map((route, index) => {
              return (
								  <Route key={index} exact path={route.path} element={route.component} />
							  )
              }
              )}
						</Routes>
					</BrowserRouter>
  );
}

export default App;
