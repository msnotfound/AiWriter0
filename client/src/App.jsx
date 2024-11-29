import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css'
import { darkTheme } from '../utils/Theme';
import styled from 'styled-components';
import Navbar from './components/navbar';
import About from './pages/About'; // Import the About component
import Contact from './pages/Contact'; // Import the Contact component
import Signup from './pages/Signup';
import Login from './pages/login';
import Home from './pages/Home';
import NotFoundPage from './pages/404';
import Dashboard from './pages/dashboard';
import DashboardNavbar from './components/DashboardNavbar';
import { useLocation } from'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import PrivateRoute from './components/PrivateRoute';
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background: ${({ theme }) => theme.bg};
overflow-x: hidden;
overflow-y: auto;
transition: all 0.2s ease;
`;
const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {isDashboard ? <DashboardNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<PrivateRoute />}>
          <Route path="account" element={<Dashboard />} />
          <Route path="ai-writer" element={<Dashboard />} />
          <Route path="notes" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
      <UserProvider>
        <Container>
          <AppContent />
        </Container>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;