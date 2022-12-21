import Home from "./components/routes/home/home";
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation";
import SignIn from "./components/routes/sign-in/sign-in.component";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;