import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import{BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import NewHIL from './Components/Pages/NewHIL'
import MX from './Components/Pages/MX'
import Home from './Components/Pages/Home'
import ContactUs from './Components/Pages/ContacUs'
import FleetPlanning from './Components/Pages/FleetPlanning'
import FleetSecond from './Components/Pages/FleetSecond';
import FleetDocumentSecond from './Components/Pages/FleetDocumentSecond';
import Fleet from './Components/Pages/Fleet';
import FleetDocument from './Components/Pages/FleetDocument';
import ScheduledMaintenance from './Components/Pages/ScheduledMaintenance';
import HoldItemList from './Components/Pages/HoldItemList';
import Tlb from './Components/Pages/Tlb';
import LogOut from './Components/Pages/LogOut'
import AddNewscheduledMaintenance from './Components/Pages/AddNewscheduledMaintenance'
import NewscheduledMaintenance from './Components/Pages/NewscheduledMaintenance'

// route and link  to the pages component//
function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
<Route exact path='/'  element={<Home />} />
<Route exact path='/contact-us'  element={<ContactUs />} />
<Route exact path='/fleetplanning' element={<FleetPlanning />} />
<Route exact path='/fleet' element={<Fleet />} />
<Route exact path='/fleetdocuments' element={<FleetDocument />} />
<Route exact path='/scheduledmaintenance' element={<ScheduledMaintenance />} />
<Route exact path='/holditemlist' element={<HoldItemList />} />
<Route exact path='/tlb' element={<Tlb />} />
<Route exact path='/mx' element={<MX />} />
<Route exact path='/log-out' element={<LogOut />} />
<Route exact path='/add-new-scheduled-maintenance' element={<AddNewscheduledMaintenance />} />
<Route exact path='/new-scheduled-maintenance' element={<NewscheduledMaintenance />} />
<Route exact path='/new-hil' element={<NewHIL />} />
<Route exact path='/fleetsecond' element={<FleetSecond />} />
<Route exact path='/fleet-document-second' element={<FleetDocumentSecond />} />
</Routes>
    </Router>
  );
}

export default App;
