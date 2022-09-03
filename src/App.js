import { Data } from "./Data";
import "./Style.css";
import { MovieList } from "./Componenets/MovieList";
import AddMovie from "./Componenets/AddMovie";
import { useState } from "react";
import Search from "./Componenets/Search";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Componenets/NavigationBar";
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import ProductDetails from "./Componenets/ProductDetails";
function App() {
  const [listFilm, setListFilm] = useState(Data);
  const HundleAdd = (newMovie) => {
    setListFilm([...listFilm, newMovie]);
  };

  const [findData, setFindData] = useState("");
  function lookfor(data) {
    setFindData(data);
  }
  const [valueByRate, setValueByRate] = React.useState(0);
  function ratetoadd(RateValue) {
    setValueByRate(RateValue);
  }
  return (
    
    <div className="app">
      <Router>
      <NavigationBar />
      <Search setFindData={lookfor} ratetoadd={ratetoadd} />
      <AddMovie HundelAdd={HundleAdd} />
      
        <Routes>
          <Route path="/Details/:idm" element={<ProductDetails listFilm={listFilm}/>}/>
         
          <Route path="/Home" element={<MovieList
        Data={listFilm.filter(
          (film, index) =>
            film.title.toUpperCase().includes(findData.toUpperCase()) &&
            film.rate >= valueByRate
        )}
      />}/>
      
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
