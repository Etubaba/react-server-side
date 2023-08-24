import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { Data, getData } from "./pages/Data";
import { Root } from "./Layout/Root";
import Contact from "./pages/Contact";
import Slider from "./pages/Slider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/data" element={<Data />} loader={getData} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/slide" element={<Slider />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
