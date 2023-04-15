import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import routes from "./routes";
import {Helmet} from "react-helmet";
import './App.scss';

function App() {
  return (
    <html>
      <head>
      <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>CMCG</title>
                {/* <link rel="canonical" href="" /> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Helmet>
      </head>
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
      </html>
  );
}

export default App;
