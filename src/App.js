import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";


function App() {
  return (
    <div className="App">
      <Login/>
      <Home/>
      {/* <Watch/> */}
      <Register/>
    </div>
  );
}

export default App;
