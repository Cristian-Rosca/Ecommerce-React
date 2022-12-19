import Home from "./components/routes/home/home";
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation";


const App = () => {

  
  


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
