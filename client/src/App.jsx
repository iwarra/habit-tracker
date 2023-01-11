/* import Header from './compontents/Header' */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import AddHabit from "./compontents/AddHabit";
import Overview from "./compontents/Overview";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Overview />} />
      {/* <Route path='profile' element={<Profile />} */}
      <Route path="add" element={<AddHabit />}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
