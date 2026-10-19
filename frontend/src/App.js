import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing';
import MyNavbar from './Components/Navbar';
import About from './Components/About';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsAndCondition from './Components/TermsAndCondition';
import AdminLogin from './Components/AdminLogin';
import Donation from './Components/Donation';
import AdminDashboard from './Components/AdminDashboard';
import { AuthProvider } from './AuthContext';
import Internship from './Components/Internship';
import AddInternship from './Components/AddInternship';
import ManageInternships from './Components/ManageInternships';
import Success from './Components/success';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Program from './Components/Program';

function App() {
  return (
    <AuthProvider>
    <HashRouter>
   
    <MyNavbar backgroundColor="#fff" />
    <Routes>
      <Route path="/" element={<Landing />} />   
      <Route path="/about" element={<About />} />   
      <Route path='/contact' element={<Contact/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/program' element={<Program/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />   
      <Route path="/terms-condition" element={<TermsAndCondition />} />   
      <Route path="/admin-login" element={<AdminLogin />} />   
      <Route path='/donation' element={<Donation/>}/>
      <Route path='/admin-dashboard' element={<AdminDashboard/>} />
     <Route path='/add-internship' element={<AddInternship/>}/>
     <Route path='/internship' element={<Internship/>}/>
     <Route path='/success' element={<Success/>}/>
     <Route path='/manage-internships' element={<ManageInternships/>} />
      {/* other routes */}
    </Routes>
  </HashRouter>
</AuthProvider>
  );
}

export default App;
