import { Route, Routes } from "react-router";
import { Phonebook } from "./Pages/Phonebook";


export const App = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/contacts" element={<Phonebook/>} />
      </Routes>
    </div>
  );
};



