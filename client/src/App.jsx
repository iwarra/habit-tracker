import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import AddNew from './views/AddNew'
import Overview from './compontents/Overview'
import RootLayout from './layouts/RootLayout'
import NotFound from './views/NotFound'
import Date from './views/Date'
import SeeMore from './views/SeeMore'
import { StatsProvider } from './context/StatsContext'
import { HabitProvider } from './context/HabitContext'

/* <Route path='userProfile' element={<UserProfile />} */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route exact path="/" element={<Overview />} />
      <Route path="/date" element={<Date />} />
      <Route path="add" element={<AddNew />} />
      <Route path="/more" element={<SeeMore />} />
      <Route path="*" element={<NotFound />} />
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
