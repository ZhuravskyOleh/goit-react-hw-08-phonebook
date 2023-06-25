import { Route, Routes } from "react-router";
import { Phonebook } from "./Pages/Phonebook";
import SignIn from "./Pages/SingIn";
import SignUp from "./Pages/SingUp";


export const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/contacts" element={<Phonebook />} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/register" element={<SignUp/>} />
        
      </Routes>
    </div>
  );
};



