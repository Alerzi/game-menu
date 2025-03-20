import './App.css';
import {Main, Orders} from "./pages/index.ts"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
