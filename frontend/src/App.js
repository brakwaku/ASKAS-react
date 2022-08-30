import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './screens/Home/Home';
import LoginScreen from './screens/Login/Login';
import SignupScreen from './screens/signup/Signup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomeScreen />} />
          <Route path='login' element={<LoginScreen />} />
          <Route path='signup' element={<SignupScreen />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
