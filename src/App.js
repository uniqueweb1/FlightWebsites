import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import{BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Fleet from './Assets/Pages/Fleet';
import FleetDocument from './Assets/Pages/FleetDocument';
import FleetDocumentForm from './Assets/Pages/FleetDocumentForm'
import FleetForm from './Assets/Pages/FleetForm';
import FleetPlanning from'./Assets/Pages/FleetPlanning';
import HoldItemList from './Assets/Pages/HoldItemList';
import Home from'./Assets/Pages/Home';
import LogOut from'./Assets/Pages/LogOut';
import NewHIL from'./Assets/Pages/NewHIL';
import NewscheduledMaintenance from'./Assets/Pages/NewscheduledMaintenance';
import AddNewscheduledMaintenance from './Assets/Pages/AddNewscheduledMaintenanance';
import ScheduledMaintenance from './Assets/Pages/ScheduledMaintenance';
import Tlb from'./Assets/Pages/Tlb';

// route and link  to the pages element//
function App() {

  return (
   <Router>
    <Navbar />
    <Routes>
<Route exact path='/'  element={<Home />} />
<Route exact path='/fleetplanning' element={<FleetPlanning />} />
<Route exact path='/fleet' element={<Fleet />} />
<Route exact path='/fleetdocuments' element={<FleetDocument />} />
<Route exact path='/scheduledmaintenance' element={<ScheduledMaintenance />} />
<Route exact path='/holditemlist' element={<HoldItemList />} />
<Route exact path='/tlb' element={<Tlb />} />
<Route exact path='/log-out' element={<LogOut />} />
<Route exact path='/add-new-scheduled-maintenance' element={<AddNewscheduledMaintenance />} />
<Route exact path='/new-scheduled-maintenance' element={<NewscheduledMaintenance />} />
<Route exact path='/new-hil' element={<NewHIL />} />
<Route exact path='/fleetform' element={<FleetForm />} />
<Route exact path='/fleet-document-form' element={<FleetDocumentForm />} />
</Routes>
    </Router>
  );
}

export default App;
