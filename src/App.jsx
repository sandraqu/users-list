import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import FormDob from "./components/Form/FormDob";
import FormDetails from "./components/Form/FormDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/form/dob" element={<FormDob />} />
        <Route path="/form/details" element={<FormDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
