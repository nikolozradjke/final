import {Routes, Route} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
import {Nav} from "./components/layouts/navbar/Navbar"
import {createStore} from "redux";
import allReducers from "./store";
import {Provider} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import {PageNotFound} from "./components/pages/404";

function App() {

    const [weather, setWeather] = useState('');

    const store = createStore(
        allReducers
    )

    async function getResults() {
        const results = await axios('https://api.open-meteo.com/v1/forecast?latitude=41.71&longitude=44.76&current_weather=true');
        setWeather(results.data.current_weather.temperature);
    }

    useEffect(() => {

        getResults()

    },[])

    store.dispatch({
        type: 'ADD',
        response: weather
    })

  return (
      <>
          <Nav />
          <Provider store={store}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about-us" element={<About />} />
                  <Route path="*" element={<PageNotFound />} />
              </Routes>
          </Provider>
      </>
  );
}

export default App;
