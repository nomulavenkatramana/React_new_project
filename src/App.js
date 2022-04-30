import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header/Header';
// import { BrowserRouter , Route } from 'react-router-dom'
import RoutesComp from './Components/RoutesComponent/RoutesComp'


function App() {
  return (
    <div className="App">
      <Header />
      <RoutesComp />
    </div>
  )
}

export default App;
