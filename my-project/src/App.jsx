import './App.css'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ProductDetails from './components/pagination/ProductDetails'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/Product/:id" element={<ProductDetails/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/SignUp" element={<SignUp/>}></Route>
  </Route>
))

function App() {
  

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
