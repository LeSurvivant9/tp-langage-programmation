import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import ToDoPage from "./pages/ToDoPage.jsx";
import WeatherPage from "./pages/WeatherPage.jsx";
import Layout from "./Layout.jsx";

function App() {
  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<ToDoPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
