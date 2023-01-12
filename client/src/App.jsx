import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import AddNew from "./views/addNew/AddNew"
import Overview from "./compontents/Overview"
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Overview />} />
      {/* <Route path='profile' element={<Profile />} */}
      <Route path="add" element={<AddNew />}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
