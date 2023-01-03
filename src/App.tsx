import Home from "./components/routes/home/home";
import { Routes, Route, Outlet } from 'react-router-dom'
import Navigation from "./components/routes/navigation/navigation";
import Authentication from "./components/routes/authentication/authentication.component";
import { UserProvider } from "./contexts/user.context";


const App = () => {

  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
