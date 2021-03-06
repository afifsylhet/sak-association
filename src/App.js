import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import OurMission from './components/OurMission/OurMission';
import Register from './components/Register/Register';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import AllChart from './components/AllChart/AllChart';
import AuthProvider from './utilities/AuthProvider';
import Deshboard from './components/Deshboard/Deshboard';
import AllMembers from './components/AllMembers/AllMembers';
import PraviteRoute from './utilities/PraviteRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/about" element={<PraviteRoute ><About /></PraviteRoute>}>
              </Route>





              <Route path="/mission" element={<OurMission />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Deshboard />} />
              <Route path="/allChart" element={<AllChart />} />
              <Route path="/members" element={<AllMembers />} />

            </Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
