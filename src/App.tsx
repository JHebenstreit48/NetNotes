import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer'; // Ensure the path is correct
import './CSS/Page.css';
import './CSS/Header.css';
import './CSS/Navigation.css';

export default function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
