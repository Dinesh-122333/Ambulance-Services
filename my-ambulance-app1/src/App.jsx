// main.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Frontpage from './Frontpage';
import Login from './Login';
import AdminLogin from './AdminLogin';
import Bookingpage from './Bookingpage';
import Confrimpage from './Confrimpage';
import About from './About';
import AdminPage from './AdminPage';
import Service from './Services';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/book' element={<Bookingpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path='/confirm' element={<Confrimpage />} />
      </Routes>
    </Router>
  );
}
