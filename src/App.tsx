import 'react-toastify/dist/ReactToastify.css';

import { Route, Routes } from "react-router-dom";

import Forgot from "./pages/Forgot";
import Header from "./components/Header";
import Home from "./pages/Home";
import MoneyBook from "./pages/MoneyBook";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/money-book" element={<MoneyBook />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App;
