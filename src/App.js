import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <div className='container-fluid'>
          <Routes>
              <Route path={''} element={<Login></Login>}> </Route>
              <Route path={'register'} element={<Register></Register>}></Route>


          </Routes>
      </div>
    </>
  );
}

export default App;
