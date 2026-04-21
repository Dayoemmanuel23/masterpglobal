import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Track from "./pages/Track";
import Fleet from "./pages/Fleet";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="track" element={<Track />} />
        <Route path="fleet" element={<Fleet />} />
        <Route path="book" element={<Booking />} />
      </Route>
    </Routes>
  );
}
