import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import AddNew from './views/AddNew'
import Overview from './components/Overview'
import RootLayout from './layouts/RootLayout'
import NotFound from './views/NotFound'
import DateView from './views/DateView'
import SeeMore from './views/SeeMore'
import { StatsProvider } from './context/StatsContext'
import { HabitProvider } from './context/HabitContext'
import { ModalProvider } from './context/ModalContext'
import Modal from './views/Modal'

/* <Route path='userProfile' element={<UserProfile />} */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route exact path="/" element={<Overview />} />
      <Route path="/date/:date" element={<DateView />} />
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
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </HabitProvider>
    </StatsProvider>
  )
}

export default App
