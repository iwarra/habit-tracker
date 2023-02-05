import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import AddNew from "./views/addNew/AddNew"
import Overview from "./compontents/Overview"
import RootLayout from "./layouts/RootLayout"
import NotFound from "./compontents/NotFound"
import { StatsProvider } from "./context/StatsContext"
import { HabitProvider } from "./context/HabitContext"
import SeeMore from "./views/SeeMore"

/* <Route path='profile' element={<Profile />} */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route exact path="/" element={<Overview />}/>
      <Route path="add" element={<AddNew />}/>
      <Route path="/more" element={<SeeMore />}/>
      <Route path="*" element={<NotFound />}/>
    </Route>
    )
  )
    
    function App() {
  return (
        <StatsProvider>
        <HabitProvider>
          <RouterProvider router={router} />
        </HabitProvider>
        </StatsProvider> 
        )
}

export default App
