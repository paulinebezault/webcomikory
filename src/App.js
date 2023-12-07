/*Page Router*/
import React, { /*useEffect, useState*/ } from "react"
import './style/App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
//import Page from "./pages/Page"
//import Faq from "./pages/Faq"
//import Error from "./pages/Error"

function App() {
  /*const [logements, setLogements] = useState([]);

  const getData = () => {
    fetch('/data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setLogements(myJson)
      });
  }
  useEffect(() => {
    getData()
  }, [])*/

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/faq" element={<Faq />} />
        <Route path="/page" element={<Page />} />
        <Route path="/*" element={<Error />} />*/}
      </Routes>
    </div>
  );
}

export default App;
