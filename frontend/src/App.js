import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './screens/Home/Home';
import LoginScreen from './screens/Login/LoginScreen';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path='login' element={<LoginScreen />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
