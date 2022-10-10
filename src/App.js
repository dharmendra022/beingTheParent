import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './parent/Header';
import Register from './parent/Register';
import PerfectSolution from './parent/PerfectSolution';
import Advertising from './parent/Advertising';
import BusinessToolkit from './parent/BusinessToolkit';
import Tune from './parent/Tune';
import WantsToTalk from './parent/WantsToTalk';
import Footer from './parent/Footer';
function App() {
  return (
    <>
    <Header/>
    <Register/>
    <PerfectSolution/>
    <Advertising/>
    <BusinessToolkit/>
    <Tune/>
    <WantsToTalk/>
    <Footer/>
    </>
  );
}

export default App;
