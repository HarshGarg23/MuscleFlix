import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bp from './components/buypass/Bp';
import Contact from "./components/contact/Contact";
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buypass' element={<Bp/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* <Route exact path="/status/:orderId" component={PaymentStatus} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
