import "./App.css";
import { Route, Routes } from "react-router-dom";
import Trip from "./components/Trip";
import Recent from "./components/Recent";
import NavTabs from "./components/Nav/Nav";
import Bookings from "./components/Bookings";

function App() {
  return (
    <div className="App">      
      <NavTabs />
      <Trip/>
      <Routes>
        <Route exact path="/" component={Trip} />
        <Route path="/recent" element={<Recent/>} />
        <Route path="/bookings" component={Bookings} />
      </Routes>
    </div>
  );
}

export default App;
