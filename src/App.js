import { Container } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import SimpleBottomNavigation from './components/mainNav';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app"></div>

      <Container> Movie App </Container>

      <SimpleBottomNavigation/>
    
    </BrowserRouter>
  );
}

export default App;
