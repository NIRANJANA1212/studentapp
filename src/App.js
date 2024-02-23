import './App.css';
import { Routes,Route } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Navbar from './components/Navbar';
import Apist from './components/Apist';
import List from './components/List';
import Forms from './components/Forms';
import Loginst from './components/Loginst';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
        {/* <Route path='/a' element={<Addstudent/>}></Route> */}
        <Route path='/b' element={<List/>}></Route>
        <Route path='/c' element={<Apist/>}></Route>
        <Route path='/add' element={<Forms method='post' data={{name:"",age:"",dept:""}}/>}></Route>
        <Route path='/' element={<Forms/>}></Route>
        <Route path='/d' element={<Loginst/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
